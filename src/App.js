import React, { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import { useAuth, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services';
import Contact from './components/Contact';
import Decision from './components/Decision';
import LeoneCharta from './components/LeoneCharta'
import Guidelines from './components/Guidelines';
import Payment from './components/Payment';
import PersonalInfoService from './components/services/PersonalInfoService';

function App() {
  const [loading, setLoading] = useState(false);
  const { isLoaded: authLoaded, userId, sessionId } = useAuth();
  const { isLoaded: userLoaded, isSignedIn, user } = useUser();

  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);

  const fetchLeoneChartaData = () => {
    const email = user.primaryEmailAddress.emailAddress;
    PersonalInfoService.getLeoneChartaDataByEmail(email)
      .then(response => {
        if (response.status === 200) {
          setFetchedData(response.data);
          setError(null);
          console.log(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        setError('Error fetching data.');
      });
  
    };

    

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
   
  }, []);

  return (
    <div className="App">
      {loading ? (
        <header className='splashScreen'>
          <SplashScreen />
        </header>
      ) : (
        <header className='App-header'>

        {/*Show sign-in button if user is not signed in */}

        
          {!isSignedIn &&(
            <Decision/>
          )}
        

        {authLoaded && userLoaded && isSignedIn && (
            <div className='bg-black bg-no-repeat bg-cover overflow-hidden'>
            <Header/>
            <Banner/>
            <Nav/>
            <section id='guidelines'>
            <Guidelines/>
            </section>
            <section id='leonecharta'>
            <LeoneCharta/>
            </section>
            
            <Services/>
            {/*<Payment/>
            <Contact/>*/}
            <div className='h-[4000px]'></div>
            </div>
          )}

          
        </header>
        
      )}
    </div>
  );
}

export default App;

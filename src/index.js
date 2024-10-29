import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
 
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { ClerkProvider } from "@clerk/clerk-react";
import { Routes,Route,useNavigate, Router } from 'react-router-dom';
import ProtectedPage from './Auth/ProtectedPage';
import { BrowserRouter } from 'react-router-dom';
import { dark } from '@clerk/themes';
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));

  const ClerkWithRoutes = () => {
    const navigate = useNavigate();

    return(
      <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
      appearance={{
          baseTheme:dark
            
          
      }}
      
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/sign-in"
          element={<SignIn />}
        />
        <Route
          path="/sign-up"
          element={<SignUp />}
        />
        <Route
          path="/protected"
          element={
            <SignedIn>
              <ProtectedPage />
            </SignedIn>
          }
        />
        <Route
          path="/"
          element={<SignedOut><RedirectToSignIn /></SignedOut>}
        />
      </Routes>
    </ClerkProvider>
    )
  }

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes/>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

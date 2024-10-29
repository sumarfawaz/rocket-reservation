import React, { useState, useEffect } from 'react'
import Bitcoin from '../assets/image 5.png'



const Payment = () => {



  const [btcValue, setBtcValue] = useState(0);
  const exchangeRate = 27500;
  const oneBtcValue = 1;

  useEffect(() => {
    generateRandomBtcValue();
  }, []);

  const generateRandomBtcValue = () => {
    const randomBtcValue = Math.random() * (50 - 1) + 1; // Random BTC value between 1 and 50
    setBtcValue(randomBtcValue);
  };

  const dollarValue = (btcValue * exchangeRate).toFixed(2);
  const oneBtcDollarValue = (oneBtcValue * exchangeRate).toFixed(2);

 
  return (
    <section className='min-h-[100vh] lg:min-h-[78vh] flex mt-5 mb-3 p-5 items-start gap-y-8' id='payment'>
        <div className='container mx-auto'>
        <div className='text-center mb-6 lg:text-center'>
          <h4 className='section-yellow-text'>
            <b>Pay</b>
          </h4>
          <h5 className='section-subheadings'>
            <b>Pay with Bitcoins</b>
          </h5>
        </div>

        <div className='justify-center  mb-2'>
        <div className='align-items-center justify-content-center' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src={Bitcoin} alt='Bitcoin' />
        </div>
        <div className='spacingbetweencomponents'></div>
        <div className='spacingbetweencomponents'></div>
        <div className='spacingbetweencomponents'></div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className='balance' style={{ marginRight: 'auto' }}>BALANCE -</span>
          <span className='btcvalue' style={{ textAlign: 'center' }}>{btcValue.toFixed(2)} BTC</span>
          <span className='dollarvalue' style={{ marginLeft: 'auto' }}>${dollarValue.toLocaleString('en-US')}</span>
        </div>
        <div className='spacingbetweencomponents'></div>
        <div className='spacingbetweencomponents'></div>
        <div className='spacingbetweencomponents'></div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className='balance' style={{ marginRight: 'auto' }}>BTC RATE -</span>
          <span className='btcvalue' style={{ textAlign: 'center' }}>{oneBtcValue.toFixed(2)} BTC</span>
          <span className='dollarvalue' style={{ marginLeft: 'auto' }}>${oneBtcDollarValue.toLocaleString('en-US')}</span>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Payment;
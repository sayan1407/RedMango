import React from 'react'
import { useLocation } from 'react-router-dom'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { PaymentForm } from '../Components/Page/Payment';
import { OrderSummary } from '../Components/Page/Order';


function Payment() {
  const {
    state : {apiResult, inputData,orderSummary}
  } = useLocation();
  console.log(apiResult);
  const stripePromise = loadStripe('pk_test_51NQ2MqSEMQXGUvnj9f0JFvtNHIHXdIQxqQbSRxQfp78ggsHL8rnfOUA1XmKPF7NGh4tim3zvUIHN1RClIVzLUEIC000bVIF2R5');
  const options = {
    clientSecret : apiResult.clientSecret
  }
  return (
    <Elements stripe={stripePromise} options={options}>
      <div className='container m-5 p-5'>
        <div className='row'>
          <div className='col-md-7'>
            <OrderSummary/>
          </div>
          <div className='col-md-5'>
             <PaymentForm />
          </div>
        </div>

      </div>
   
  </Elements>
  )
}

export default Payment
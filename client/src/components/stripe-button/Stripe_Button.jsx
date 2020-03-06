import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const Stripe_Button = ({ price }) => {
  //as stripe accepts cents as amount we need to multiply price with 100
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_k4Xt6pDHJbGBjq4s5wG0PIJ7009jgzp0kL';
  const onToken = token => {
    alert('Payment Successfull');
    console.log(token);
  };
  return <StripeCheckOut label='Pay Now' name='E Commerce JJ' billingAddress shippingAddress image='https://svgshare.com/i/CUz.svg' description={`Your total is $${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey} />;
};

export default Stripe_Button;

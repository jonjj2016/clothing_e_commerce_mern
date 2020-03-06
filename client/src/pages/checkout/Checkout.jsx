import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../reducers/reselect/cart-selector';
import StripeButton from '../../components/stripe-button/Stripe_Button';

import './Checkout.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
const Checkout = ({ cartItems, totalAmount }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-blocks'>
          <span>Product</span>
        </div>
        <div className='header-blocks'>
          <span>Description</span>
        </div>
        <div className='header-blocks'>
          <span>Quantity</span>
        </div>
        <div className='header-blocks'>
          <span>Price</span>
        </div>
        <div className='header-blocks'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className='total'>
        <span>TOTAL : ${totalAmount}</span>
      </div>
      <StripeButton price={totalAmount} />
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 <br /> 01/21 123
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectCartTotal
});
export default connect(mapStateToProps)(Checkout);

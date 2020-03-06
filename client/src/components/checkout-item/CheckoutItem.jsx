import React from 'react';
import './CheckoutItem.scss';
import { connect } from 'react-redux';
import { deleteCartItem, addToCart, removeCartQuantity } from '../../actions/cart_actions';
const CheckoutItem = ({ cartItem, deleteCartItem, addToCart, removeCartQuantity }) => {
  const { imageUrl, price, name, quantity, id } = cartItem;
  const onDeleteHandler = () => deleteCartItem(id);
  const onDecrementHandler = () => removeCartQuantity(id);
  const onIncrementHandler = () => addToCart(cartItem);
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={onDecrementHandler} className='arrow'>
          &#10094;
        </div>{' '}
        <span className='value'>{quantity}</span>
        <div onClick={onIncrementHandler} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={onDeleteHandler}>
        &#10008;
      </div>
    </div>
  );
};

export default connect(null, { deleteCartItem, addToCart, removeCartQuantity })(CheckoutItem);

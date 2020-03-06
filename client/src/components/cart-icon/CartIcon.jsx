import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../reducers/reselect/cart-selector';
import { connect } from 'react-redux';
const CartIcon = ({ onClick, quantity }) => {
  return (
    <div className='cart-icon' onClick={onClick}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{quantity}</span>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  quantity: selectCartItemsCount
});
export default connect(mapStateToProps)(CartIcon);

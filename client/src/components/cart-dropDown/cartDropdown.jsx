import React from 'react';
import './cartDropdown.scss';
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cart-item/Cart-item';
//import selectors
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../reducers/reselect/cart-selector';
import { cartDropdownToggler } from '../../actions/cart_actions';
//3rd party
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
const CartDropdown = ({ history, cartItems, cartDropdownToggler }) => {
  const onClick = () => {
    history.push('/checkout');
    cartDropdownToggler();
  };
  const output = () => {
    return cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item} />) : <span className='empty-message'> Your cart Is empty</span>;
  };
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>{output()}</div>
      <CustomButton onClick={onClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
export default connect(mapStateToProps, { cartDropdownToggler })(withRouter(CartDropdown));

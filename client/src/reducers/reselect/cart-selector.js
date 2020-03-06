import {
    createSelector
} from 'reselect';
//here we pull out cart from state

const selectCart = state => state.cart;
//here we pull out cartItems from cart
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);
// here we return reduced property //quantity
export const selectCartHidden = createSelector([selectCart], cart => cart.hidden)
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => (
    cartItems.reduce((acc, item) => acc + item.quantity, 0)
));
export const selectCartTotal = createSelector([selectCartItems], cartItems => (
    cartItems.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0)
))
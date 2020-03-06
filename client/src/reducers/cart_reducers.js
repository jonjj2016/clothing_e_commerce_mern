import * as TYPES from '../actions/types'
import {
    addItemToCart,
    decrimentItemFromCart,
    deleteFromCart
} from './utils/cart.utils'
const initState = {
    hidden: true,
    cartItems: []
};
export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        case TYPES.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...addItemToCart(state.cartItems, action.payload)]
            }
        case TYPES.DECREMENT_CART_QUANTITY:
            return {
                ...state,
                cartItems: decrimentItemFromCart(state.cartItems, action.payload)

            }
        case TYPES.DELETE_CART_ITEM:
            return {
                ...state,
                cartItems: deleteFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}
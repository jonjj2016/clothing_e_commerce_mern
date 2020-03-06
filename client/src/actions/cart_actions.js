import * as TYPES from './types'
export const cartDropdownToggler = () => {

    return {
        type: TYPES.TOGGLE_CART
    }
}
export const addToCart = (data) => ({
    type: TYPES.ADD_TO_CART,
    payload: data
})
export const removeCartQuantity = (id) => ({
    type: TYPES.DECREMENT_CART_QUANTITY,
    payload: id
})
export const deleteCartItem = (id) => ({
    type: TYPES.DELETE_CART_ITEM,
    payload: id
})
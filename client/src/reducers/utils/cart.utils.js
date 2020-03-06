export const addItemToCart = (cartItems, item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id)
    if (!existingItem) {
        return [...cartItems, {
            ...item,
            quantity: 1
        }]
    }
    return cartItems.map(cartItem => cartItem.id === item.id ? {
        ...cartItem,
        quantity: cartItem.quantity + 1
    } : cartItem)
}
export const deleteFromCart = (cartItems, id) => cartItems.filter(item => item.id !== id)
export const decrimentItemFromCart = (cartItems, id) => {
    const item = cartItems.find(item => item.id === id)
    if (item.quantity === 1) {
        return deleteFromCart(cartItems, id)
    }
    return cartItems.map(cartItem => cartItem.id === id ? {
        ...cartItem,
        quantity: cartItem.quantity - 1
    } : cartItem)
}
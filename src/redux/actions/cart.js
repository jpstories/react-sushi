export const addPizzaToCart = (goodObj) => ({
    type: 'ADD_GOODS_CART',
    payload: goodObj,
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
})

export const removeGoodCart = (id) => ({
    type: 'REMOVE_GOOD_CART',
    payload: id
})

export const plusGoodCart = (id) => ({
    type: 'PLUS_GOOD_CART',
    payload: id
})

export const minusGoodCart = (id) => ({
    type: 'MINUS_GOOD_CART',
    payload: id
})
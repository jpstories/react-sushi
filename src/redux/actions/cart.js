export const setCartTotalPrice = (price) => ({
    type: 'SET_TOTAL_PRICE',
    payload: price,
})

export const setCartTotalCount = (count) => ({
    type: 'SET_TOTAL_COUNT',
    payload: count,
})

export const addPizzaToCart = (goodObj) => ({
    type: 'ADD_GOODS_CART',
    payload: goodObj,
})
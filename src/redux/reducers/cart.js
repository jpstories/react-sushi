const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_GOODS_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id], action.payload],
            }

            const allGoods = [].concat.apply([], Object.values(newItems));
            const totalPrice = allGoods.reduce((sum, obj) => obj.price + sum, 0);

            return {
                ...state,
                items: newItems,
                totalCount: allGoods.length,
                totalPrice
            }
        }
        default: return state;
    }
}

export default cart;
const initialState = {
    category: null,
    sortType: {
        type: 'popular',
        order: 'desc',
    }
};

const filter = (state = initialState, action) => {
    
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortType: action.payload
        }
    }

    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload
        }
    }
    return state
}

export default filter;
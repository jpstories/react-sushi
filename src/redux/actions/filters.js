export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
})

export const setSort = ({ type, order }) => ({
    type: 'SET_SORT_BY',
    payload: { type, order },
})
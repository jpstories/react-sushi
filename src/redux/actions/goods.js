import axios from 'axios'

export const setGoods = (items) => ({
    type: 'SET_GOODS',
    payload: items
})

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchGoods = (category, sortType) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`/goods?${
      category !== null ? `category=${category}`: ''
      }&_sort=${sortType.type}&_order=${sortType.order}`)
      .then(({ data }) => {
      dispatch(setGoods(data))
    });
};
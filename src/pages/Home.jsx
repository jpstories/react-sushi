import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Categories, Sort, Goods, GoodsLoadingBlock } from '../components'
import { fetchGoods } from '../redux/actions/goods'
import { setCategory, setSort } from '../redux/actions/filters'
import { addPizzaToCart } from '../redux/actions/cart'

const categoryNames = ['Лосось', 'Тунец', 'Угорь', 'Острые', 'Запеченные']

const sortElems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'названию', type: 'name', order: 'asc' },
]

function Home() {
  const dispatch = useDispatch()
  
  const items = useSelector(({ goods }) => goods.items)
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ goods }) => goods.isLoaded)
  const { category, sortType } = useSelector(({ filters }) => filters)

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSort = React.useCallback((type) => {
    dispatch(setSort(type));
  }, []);

  React.useEffect(() => {
    dispatch(fetchGoods(category, sortType))
  }, [category, sortType])

  const addGoodToCart = obj => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">

      <div className="content__top">
        <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames} />
        <Sort activeSortType={sortType.type} onClickSortType={onSelectSort} items={sortElems} />
      </div>

      <h2 className="content__title">Все роллы</h2>

      <div className="content__items">
        {isLoaded 
          ? items.map((obj) => (
          <Goods 
            onClickAddGood={addGoodToCart}
            key={obj.id}
            addedCount={cartItems[obj.id] && cartItems[obj.id].length}
            {...obj}/>))
          : Array(12)
              .fill(0)
              .map((_, index) => <GoodsLoadingBlock key={index} />)}
      </div>
    </div>
  )
}

export default Home;
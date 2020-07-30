import React from 'react'
import arrow from '../../assets/img/sort__arrow.png'
import PropTypes from 'prop-types'

const Sort = React.memo(function Sort({ items, activeSortType, onClickSortType }) {
    const [visiblePopUp, setVisiblePopUp] = React.useState(false);
    const sortRef = React.useRef();
    const activeLabel = items.find((obj) => obj.type === activeSortType).name;
    console.log(activeLabel);

    const toggleVisiblePopup = () => {
        setVisiblePopUp(!visiblePopUp);
    };

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopUp(false);
        }
    }

    const changeSortActive = (index) => {
        onClickSortType(index)
        setVisiblePopUp(false)
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div>
            <div className="sort">
                <div className="sort__label">
                    <div className="sort__label-svg">
                        <img className={visiblePopUp ? 'sortArrow-up' : 'sortArrow-down'} width="17" src={arrow} alt="" />
                    </div>
                    <b>Сортировка по:</b>
                    <span onClick={toggleVisiblePopup}>{activeLabel}</span>
                </div>


                {visiblePopUp && (
                    <div ref={sortRef} className='sort__popup'>
                        <ul>
                        {items &&
                            items.map((obj, index) => (
                                <li
                                    onClick={() => changeSortActive(obj)}
                                    className={activeSortType === obj.type ? 'active' : ''}
                                    key={`${obj.type}_${index}`}>
                                    {obj.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
})

Sort.propTypes = {
    activeSortType: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickSortType: PropTypes.func.isRequired,
}

Sort.defaultProps = {
    items: [],
}

export default Sort;
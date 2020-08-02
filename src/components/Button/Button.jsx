import React from 'react'
import classNames from 'classnames'


const Button = ({ children, outline, cartBtn, addBtn, onClick, circle, minus, plus }) => {

    return (
        <div className="header__cart">
            <button onClick={onClick} className={classNames('button', {
                'button--outline': outline, 
                'button--cart': cartBtn,
                'button--add': addBtn,
                'button--circle': circle,
                'cart__item-count-minus': minus,
                'cart__item-count-plus': plus,
                })}>
                {children}
            </button>
        </div>
    )
}

export default Button
import React from 'react'
import classNames from 'classnames'


const Button = ({ outline, content, cartBtn, addBtn, onClickAddGood }) => {

    return (
        <div className="header__cart">
            <button onClick={onClickAddGood} className={classNames('button', {
                'button--outline': outline, 
                'button--cart': cartBtn,
                'button--add': addBtn
                })}>
                {content}
            </button>
        </div>
    )
}

export default Button
import React from 'react'

import logo from '../../assets/img/14.jpg'

import { Logo, Button } from '../index'
import { Link } from 'react-router-dom';

import cart from '../../assets/img/cart.svg'
import { useSelector } from 'react-redux'

const Header = () => {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart)

    const ContentBtn = () => {
        return (
            <>
                <span>{totalPrice} ₽</span>
                <div className="button__delimiter"></div>
                <img className="cart__logo" width="25" src={cart} alt="" />
                <span>{totalCount ? totalCount : ''}</span>
            </>
        )
    }

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <Logo
                        title={'React Sushi'}
                        desc={'Cамые вкусные суши и роллы!'}
                        logo={logo}
                        sizeLogo={'120'}
                    />
                </Link>

                <Link to="/cart">
                    <Button cartBtn outline-none content={<ContentBtn />} />
                </Link>
            </div>
        </div>
    )
}

export default Header
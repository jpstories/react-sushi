import React from 'react';

function Logo ({title, desc, logo, sizeLogo}) {
    return (
        <div className="header__logo">
        <img width={sizeLogo} src={logo} alt="Pizza logo" />
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    </div>
    )
}

export default Logo;
import React from 'react';

import "./Logo.css"

// @ts-ignore
import logo from "./logo.png"

function Logo(props) {

    const { size, showText = true } = props

    const style = {
        width: size,
        height: size
    }

    return (
        <div className='flex logo'>
            <img src={logo} style={style} alt="logo"></img>
            {showText ? <h1>Motorcycle Rent</h1> : null}
        </div >
    );
}

export default Logo;
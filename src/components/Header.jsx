import React from 'react';
import Logo from '../img/logo.png';
import s from './Header.module.css';

const Header = () => {
    return <div className={s.header}>
    <div className={s.logo}>
        <img src={Logo}></img>
    </div>
</div>
    

}

export default Header;
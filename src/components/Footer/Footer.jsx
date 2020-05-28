import React from 'react';
import Logo from './logo.png';
import s from'./Footer.module.css';


const Footer = () => {
    return <div className={s.footer}>
    <div className={s.logo}>
        <img src={Logo}></img>
    </div>
</div>
    

}

export default Footer;
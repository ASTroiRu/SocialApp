import React from 'react';
import s from './Nav.module.css';

const Navbar = () => {
    return <div className={s.nav}>
        <div className={s.activ}>
            <a href="#">Profile</a>
        </div>
        <div className={s.nav_text}>
            <a href="#">Message</a>
        </div>
        <div className={s.nav_text}>
            <a href="#">News</a>
        </div>
        <div className={s.nav_text}>
            <a href="#">Music</a><br></br>
        </div>
        <div className={s.nav_text}>
            <a href="#">Settings</a>
        </div>
    </div>
}

export default Navbar;
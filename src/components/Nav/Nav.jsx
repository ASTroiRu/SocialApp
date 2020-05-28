import React from 'react';
import s from './Nav.module.css';

const Navbar = () => {
    return <div className={s.nav}>
        <div className={s.activ}>
            <a href="/profile">Profile</a>
        </div>
        <div className={s.nav_text}>
            <a href="/dialogs">Dialogs</a>
        </div>
        <div className={s.nav_text}>
            <a href="/news">News</a>
        </div>
        <div className={s.nav_text}>
            <a href="/music">Music</a><br></br>
        </div>
        <div className={s.nav_text}>
            <a href="/settings">Settings</a>
        </div>
    </div>
}

export default Navbar;
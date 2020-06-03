import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import MyFriends from './MyFriends/MyFriends';

const Navbar = (props) => {

    let friendElement = props.state.friends.map (friend =>  <MyFriends name={friend.name} />);

    return <div className={s.nav}>
        <div className={s.nav_text}>
            <NavLink to="/profile" activeClassName={s.activ}>Profile</NavLink>
        </div>
        <div className={s.nav_text}>
            <NavLink to="/dialogs" activeClassName={s.activ}>Dialogs</NavLink>
        </div>
        <div className={s.nav_text}>
            <NavLink to="/news" activeClassName={s.activ}>News</NavLink>
        </div>
        <div className={s.nav_text}>
            <NavLink to="/music" activeClassName={s.activ}>Music</NavLink><br></br>
        </div>
        <div className={s.nav_text}>
            <NavLink to="/settings" activeClassName={s.activ}>Settings</NavLink>
        </div>
        <div className = {s.myFriends}>
            My friends
            <div className={s.myFriendsList}>
                {friendElement}
            </div>
        </div>
        
        

    </div>
}

export default Navbar;
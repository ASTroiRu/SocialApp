import React from 'react';
import s from './Person.module.css';
import { NavLink } from 'react-router-dom';


const Person = (props) => {
    let path='/dialogs/' + props.id;
    return (
        <div className={s.person}>
            <div className={s.user_logo}></div>
            <div className={s.user_name}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
         </div>
    )
}



export default Person;
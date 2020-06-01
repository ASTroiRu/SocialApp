import React from 'react';
import s from './MyFriends.module.css';


const MyFriends = (props) => {
    let path=window.location.pathname;
    
    if (path==='/profile') {
        return (
            <div className={s.show}>
               {props.name}
            </div>
        );
    } else {
            return (
            <div className={s.notShow}>
                
            </div>
        );
    }
}

export default MyFriends;
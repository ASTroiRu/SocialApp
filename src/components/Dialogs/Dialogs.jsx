import React from 'react';
import s from './Dialogs.module.css';
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

const MessageHistory = (props) => {
    let Mtype = 's.messageHistory_' + props.type;
    return (
        <div className={s.messagesHistory}>
            <div className={Mtype}>{props.messageText}</div>
        </div>
    )
}


const Dialogs = () => {
    return (
        <div>
            Dialogs.
            <div className={s.dialogs}>
                <div className={s.personsList}>

                    <Person name='Alex' id='1' />
                    <Person name='Boris' id='2' />
                    <Person name='Vasiliy' id='3' />
                    <Person name='Natulek' id='4' />
                    <Person name='Mama' id='5' />
                </div>
                <div className={s.messages}>
                    <MessageHistory type='in' messageText='Привет, Саша!' />
                    <MessageHistory type='out' messageText='Привет!!!' />
                    <div className={s.messagesHistory}>
                        <div className={s.messageHistory_in}>Привет, Саша!</div>
                        <div className={s.messageHistory_out}>Привет!!!</div>
                    </div>
                    <div className={s.sendMessage}>
                        <input className={s.inMessage} type="text" />
                        <button type="submit">SEND</button>
                    </div>

                </div>

            </div>
        </div >

    );
}

export default Dialogs;
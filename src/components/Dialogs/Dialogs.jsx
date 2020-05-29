import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div>
            Dialogs.
            <div className={s.dialogs}>
                    <div className= {s.personsList}>
                        <div className={s.person}>
                            иконка + ФИО
                        </div>
                          
                    </div>
                    <div className={s.messages}>
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
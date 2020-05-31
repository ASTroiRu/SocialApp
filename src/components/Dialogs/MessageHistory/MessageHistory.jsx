import React from 'react';
import s from './MessageHistory.module.css';



const MessageHistory = (props) => {

    if (props.type === 'in') {
        return (
            <div className={s.messagesHistory}>
                <div className={s.messageHistory_in}>{props.messageText}</div>
            </div>
        );
    } else {
return (
    <div className={s.messagesHistory}>
            <div className={s.messageHistory_out}>{props.messageText}</div>
        </div>
);

    }
}

export default MessageHistory;
import React from 'react';
import s from './Dialogs.module.css';
import Person from './Person/Person';
import MessageHistory from './MessageHistory/MessageHistory';


const Dialogs = (props) => {
    let messageElement = props.state.message.map(m => <MessageHistory type={m.type} messageText={m.messageText} />);
    let dialogsElement = props.state.dialogs.map(d => <Person name={d.name} id={d.id} />);
    let newMessageElement = React.createRef();
    let addMes = () => {
         let newMessage = newMessageElement.current.value;
         alert (newMessage);
    };

    return (
        <div>

            <div className={s.dialogs}>
                <div className={s.personsList}>

                    {dialogsElement}

                </div>
                <div className={s.messages}>

                    {messageElement}

                    <div className={s.sendMessage}>
                        <input className={s.inMessage} type="text" ref = {newMessageElement}/>
                        <button type="submit" onClick = {addMes}>SEND</button>
                    </div>

                </div>

            </div>
        </div >

    );
}

export default Dialogs;
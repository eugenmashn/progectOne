import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs=(props)=>{
    let state=props.dialogsPage;
    let dialogsElements=state.dialogs.map (d=> <DialogItem name={d.name} foto={d.srcL} id={d.id}/>);
    let messegesElements=state.message.map(m=><Message message={m.message}/>);
    let newMessageBody=state.newMessageBody;

    let onSendMessageClick=()=>{
        props.sendMessage();

    };
    let onNewMessageChange=(e)=>{
    let body=e.target.value;

    props.updateNewMessage(body);
    };
    return( <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messeges}>

                <div>{messegesElements}</div>

            </div>
            <div>
                <div><textarea  value={newMessageBody}
                                placeholder='Enter your message'
                               onChange={onNewMessageChange}>
                     </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )

};
export  default Dialogs;
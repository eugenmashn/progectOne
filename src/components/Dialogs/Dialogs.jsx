import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs=(props)=>{
    let dialogsElements=props.state.dialogs.map (d=> <DialogItem name={d.name} foto={d.srcL} id={d.id}/>);
    let messegesElements=props.state.message.map(m=><Message message={m.message}/>);
    let newSend=React.createRef();
    let newMesseg=()=>{
        let text=newSend.current.value;
        props.newMessege(text);

    };
    return( <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messeges}>

                {messegesElements}

            </div>
            <textarea ref={newSend}></textarea>
            <button onClick={newMesseg}>Send</button>
        </div>
    )

};
export  default Dialogs;
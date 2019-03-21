import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs=(props)=>{
    let dialogs =[
        {
            id:1, name:'Eugen'
        },
        {
            id:2, name:'Pavel'
        },
        {
            id:3,  name:'Oleks'
        }

    ];
    let messages =[
        {
            id:1, message:'Hi'
        },
        {
            id:2, message:'How are your'
        },
        {
            id:3,  message:'Ok it is very good'
        }

    ];
    let dialogsElements=dialogs.map (d=> <DialogItem name={d.name} id={d.id}/>);
    let messegesElements=messages.map(m=><Message message={m.message}/>);
    return( <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messeges}>

                {messegesElements}

            </div>
        </div>
    )

};
export  default Dialogs;
import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const DialogItem=(props)=>{
    let path='/dialogs/'+props.id;;
    return(
        <div className={s.message+' '+s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};
const Message=(props)=>{
    return(

            <div className={s.message}>{props.message}</div>
    )
};

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
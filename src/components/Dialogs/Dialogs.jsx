import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const DialogItem=(props)=>{
    let path='/dialogs/'+props.id;;
    return(
        <div className={s.dialog+' '+s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};
const Message=(props)=>{
    return(

            <div className={s.dialog}>{props.message}</div>
    )
};
const Dialogs=(props)=>{
    return( <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              <DialogItem name='Eugen' id='1' />
              <DialogItem name='Oleks' id='2' />
              <DialogItem name='Pavel' id='3' />

            </div>
            <div className={s.messeges}>
                <Message message='Hi'/>
                <Message message='How are your'/>
                <Message message='Ok it is very good'/>


            </div>
        </div>
    )

};
export  default Dialogs;
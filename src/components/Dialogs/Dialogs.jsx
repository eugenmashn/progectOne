import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const Dialogs=(props)=>{
    return( <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+' '+s.active}>
                <NavLink to='/dialogs/1'>Eugen</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Pavel</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'> Oleks</NavLink>
                </div>
            </div>
            <div className={s.messeges}>
                <div className={s.messege}> Hi</div>
                <div className={s.messege}>How are your</div>
                <div className={s.messege}>Ok it is very good</div>

            </div>
        </div>
    )

};
export  default Dialogs;
import React from 'react'
import s from './Dialogs.module.css'
const Dialogs=(props)=>{
    return( <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+' '+s.active}>
                eugen
                </div>
                <div className={s.dialog}>
                    Pavel
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
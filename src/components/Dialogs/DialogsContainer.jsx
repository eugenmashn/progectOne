import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateTOProps=(state)=>{
    return {
        dialogsPage:state.dialogsPage
    }
};
let mapDispatchTooProps=(dispatch)=>{
    return {
        updateNewMessage: () => {
            dispatch(sendMessageCreator());
        },
    sendMessage:(body)=>{
        dispatch(updateNewMessageBodyCreator(body))
        }
    }
    };
const DialogsContainer=connect(mapStateTOProps,mapDispatchTooProps)(Dialogs);
export  default DialogsContainer;
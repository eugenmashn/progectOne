import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer=()=>{

    return <StoreContext.Consumer>{
        (store)=>{
        let state=store.getState().dialogsPage;
        let onSendMessageClick=()=>{
        store.dispatch(sendMessageCreator());

    };
        let updateNewMessage=(body)=>{

        store.dispatch(updateNewMessageBodyCreator(body));
    };

     return   <Dialogs updateNewMessage={updateNewMessage}sendMessage={onSendMessageClick} dialogsPage={state}/>
        }
        }</StoreContext.Consumer>

};
export  default DialogsContainer;
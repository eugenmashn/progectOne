

import state, {subcribe, subscribe} from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, newMessege, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree=(state)=>{
    ReactDOM.render(
    <BrowserRouter>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} newMessege={newMessege}/>
    </BrowserRouter>,
    document.getElementById('root'));
};
serviceWorker.unregister();
rerenderEntireTree(state);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
subscribe(rerenderEntireTree);
serviceWorker.unregister();

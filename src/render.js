import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
export let rerenderEntireTree=(state)=>{
    ReactDOM.render(
    <BrowserRouter>
    <App state={state} addPost={addPost}/>
    </BrowserRouter>,
    document.getElementById('root'));
};
serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


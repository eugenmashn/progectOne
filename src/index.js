import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
let posts =[
    {
        id:1, message:'Hi , how are you?',countLike:5
    },
    {
        id:2, message:'It`s my first post',countLike:4
    },

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
ReactDOM.render(<App posts={posts} messages={messages} dialogs={dialogs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

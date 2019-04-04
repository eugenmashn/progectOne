/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import './App.css'
import  Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {updateNewPostText} from "./redux/state";

const App=(props)=>{

    return(
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
           <Navbar/>

          <div

    className='app-wrapper-content'>

              <Route  path='/dialogs' render={()=><Dialogs
                 state={props.state.dialogsPage}/>}/>
              <Route path='/profile' render={()=><Profile
                 profilePage={props.state.profilePage}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}/>}  />
              <Route path='/news' component={News}/>
              <Route path='/music' component={Music}/>
              <Route path='/settings' component={Settings}/>
          </div>
        </div>
        </BrowserRouter>
    )
};


export default App;

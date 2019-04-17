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
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/users/UserContainer";

const App=(props)=>{

    return(
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
           <Navbar/>

          <div className='app-wrapper-content'>

              <Route  path='/dialogs'
            render={()=><DialogsContainer />}/>
              <Route path='/profile'
            render={()=><Profile />}/>
                <Route path='/users'
            render={()=><UserContainer/>}/>

          </div>
        </div>
        </BrowserRouter>
    )
};


export default App;

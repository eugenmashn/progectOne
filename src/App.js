import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import './App.css'
import  Dialogs from './components/Dialogs/Dialogs'
const App=()=>{
    return(
        <div className='app-wrapper'>
            <Header/>
           <Navbar/>
          {/*<Profile/>*/}
          <div className='app-wrapper-content'>
            <Dialogs/>
          </div>
        </div>
    )
};



export default App;

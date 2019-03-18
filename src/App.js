import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Profile/Profile'
import './App.css';

const App=()=>{
    return(
        <div className='app-wrapper'>
            <Header/>
           <Navbar/>
          <Content/>
        </div>
    )
};



export default App;

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'

import Skills from './components/skills'
import Education from './components/education'
import Experience from './components/experience'
import Contact from './components/contact'
//import Timeline from './components/timeline'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React bu rahul
    //     </a>
    //   </header>
    // </div>
      <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
      <div id="colorlib-main">
        <Introduction></Introduction>
        <About></About> 
        <Skills></Skills>
        <Experience></Experience>
        <Education></Education>
        <Contact></Contact>
      
        
          </div>
      </div>
      </div>
  );
}

export default App;

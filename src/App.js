import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); 

  const toggleMode = () =>{
    
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.title = "Text-Utils - Dark Mode Enabled!";
      setTimeout(() => {
        document.title = "Text-Utils";
      }, 2000);
     
      // setInterval(() => {
      //   document.title = "Text-Utils";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Text-Utils Dark Mode";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "Text-Utils - Light Mode Enabled !";
      setTimeout(() => {
        document.title = "Text-Utils";
      }, 2000);
    }
    
  }
  return (
    <>
    <Router>
    <Navbar  title="Text-Utils" mode={mode} toggleMode={toggleMode} />

    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm heading="Enter the text" mode={mode}/>} />
      </Routes>
    </div>
    </Router>
    </> 
  );
}

export default App;

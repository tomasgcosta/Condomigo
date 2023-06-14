import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './components/home/homePage';
import ButtonClients from'../src/components/home/buttonClient'
import Login from '../src/components/login/login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/ButtonClients' element={<ButtonClients/>}/>
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;

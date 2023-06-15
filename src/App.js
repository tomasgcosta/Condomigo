import React from 'react';
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
>>>>>>> 6d081cdf76bb60e765172d5fdafa3f654a2bc95d
import './App.css';
import HomePage from './components/home/homePage';
import ListClients from'../src/components/list/listClient'
import Login from '../src/components/login/login'




function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/listaDeClientes' element={<ListClients />}/>
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>

  );
}

export default App;

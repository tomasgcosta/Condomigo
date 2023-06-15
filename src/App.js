import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './components/home/homePage';
import ListClients from'../src/components/list/listClient'
import Login from '../src/components/login/login'
<<<<<<< HEAD
import Recibos from '../src/components/recibos/recibos'
import ListHouse from './components/list/listHouse';
import ListInvoice from './components/list/listInvoice';

=======

import Recibos from '../src/components/recibos/recibos'
import ListHouse from './components/list/listHouse';


>>>>>>> fbf16d0ef3952057ce69b510054d2d0041f5d357



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/HomePage' element={<HomePage/>}/>
<<<<<<< HEAD
        <Route path='/listaDeClientes' element={<ListClients />}/>
        <Route path='/listaDeClientes' element={<ListClients />}/>
        <Route path='/listaderecibos' element={<Recibos/>}/>
      <Route path="/" element={<Login/>} />
        <Route path='/listaDeApartamento' element={<ListHouse />}/>
        <Route path='/listarecibos/:id' element={<ListInvoice/>}/>

        <Route path="/" element={<Login/>} />
=======
     

        <Route path='/listaDeClientes' element={<ListClients />}/>
        <Route path='/listaderecibos' element={<Recibos/>}/>
      <Route path="/" element={<Login/>} />

        <Route path='/listaDeApartamento' element={<ListHouse />}/>



>>>>>>> fbf16d0ef3952057ce69b510054d2d0041f5d357
      </Routes>
    </Router>

  );
}

export default App;

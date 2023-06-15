<<<<<<< HEAD
import React from 'react';
import { ButtonClients } from "./buttonClient";
import { ButtonDate } from "./buttonDate";
import { ButtonInvoice } from "./buttonInvoice";
import LoginPage from '../LoginPage/Login'; // Atualize o caminho de importação

export default function HomePage(props) {
  return (
    <div>
      <div><ButtonDate /></div>
      <div><ButtonClients /></div>
      <div><ButtonInvoice /></div>
      <LoginPage /> 
    </div>
  );
}
=======

import React from 'react';

import ButtonClients from "./buttonClient";
import ButtonInvoice from "./buttonInvoice";
import './homepage.css'
import CONDOMIGO from "../image/CONDOMIGO.png"






export default function HomePage(props) {

    return (

        <div className="paginahomepage">
            <div className="branquitopa"></div>
            <div className="qwe" >
                
                <img className="imgCondomigo" src={CONDOMIGO}></img>

                <div class="containerbotoes">
                    <div ><ButtonClients /></div>
                    <div ><ButtonInvoice /></div>
                </div>


            </div>

    )
}
>>>>>>> 6d081cdf76bb60e765172d5fdafa3f654a2bc95d

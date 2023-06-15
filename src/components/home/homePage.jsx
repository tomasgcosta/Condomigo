
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
        </div>
    )
}
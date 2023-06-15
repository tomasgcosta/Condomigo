<<<<<<< HEAD
import React from 'react';

export function ButtonClients(props) {
    return (
      <div>
        <button>Lista clientes</button>
      </div>
    );
  }
  
=======

 import React from "react"
 import { Link } from "react-router-dom"

export default function ButtonClients(props) {
        
    return (
             <div >

                <Link to='/listaDeClientes'>
                <button className="botoeshomepage"> Lista de clientes</button>
                 </Link>
             </div>
         
     )
 }
>>>>>>> 6d081cdf76bb60e765172d5fdafa3f654a2bc95d

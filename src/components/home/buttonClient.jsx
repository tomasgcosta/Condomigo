
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
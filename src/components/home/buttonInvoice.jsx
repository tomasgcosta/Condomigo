import React from 'react';
import { Link } from 'react-router-dom';
export default function ButtonInvoice(props) {
        
    return (
             <div >
                <Link to='/listaderecibos'>
            <button className="botoeshomepage"> Lista de Recibos</button>
                </Link>

             </div>
         
     )
 }
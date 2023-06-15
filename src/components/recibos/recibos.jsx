import React, { useState } from "react";
import condmingo3 from '../recibos/image/condomingo3.jpg'
import './recibos.css'
import BtnRecibos from "../home/BtnRecibos";
import certo from './image/certo.png'
import errado from './image/errado.png'

export default function Recibos(){
    const [troca,setTroca] = useState(false)
    const handleTroca = () =>{
        setTroca(!troca);
    }
    return (
        <div>
            <div className="imagemLista">
               <img  src={condmingo3}/>
            </div>
            <div className="todos">
                <BtnRecibos mes="Mai" pago="Pagamento" src={troca ? certo : errado} onClick={handleTroca}/>
                <BtnRecibos mes="Abr" pago="Pagamento" src={errado}/>
                <BtnRecibos mes="Mar" pago="Pagamento" src={certo}/>
                <BtnRecibos mes="Fev" pago="Pagamento" src={certo}/>
                <BtnRecibos mes="Jan" pago="Pagamento" src={certo}/>
            </div>
           
        </div>
    )
}
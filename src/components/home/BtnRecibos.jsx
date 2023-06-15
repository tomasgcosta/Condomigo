import React from "react"
import '../recibos/recibos.css'

function BtnRecibos(props){
    return (
        <div className="btnRecibos" onClick={props.onClick}>
            <div className="r">
                <h1>{props.mes}</h1>
                <h1>|</h1>
                <h1>{props.pago}</h1>
            </div>
            <div className="certo">
                <img src={props.src} alt="" />
            </div>
        </div>
    )
}

export default BtnRecibos
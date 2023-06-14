import React from 'react';
import ButtonInvoice from './buttonInvoice';
import ButtonClients from './buttonClient';
import ButtonDate from './buttonDate';



export default function HomePage(props) {

    return (
        <div>
            <ButtonDate/>
            <ButtonClients />
            <ButtonInvoice />
        </div>
    )
}
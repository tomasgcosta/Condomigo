import React from 'react';
import styles from './list.module.css'
import { useEffect, useState } from "react"
import List from "./list";
import { ItemHouse, ItemInvoice } from './items';



export default function ListInvoice() {
    // criar condição para que se o ID do apartamento tem um Id de recibo criado, ele está pago. Desta forma recebe uma imagem verde.


    const [invoice, setInvoice] = useState(null)

    useEffect(() => {
        async function fetchData() {

            const res = await fetch(
                `/api/condo/invoice`,
                { method: "GET" }
            );
            if (res.status != 200) {
                console.log("Recibos ainda não disponíveis");
            } else {
                const data = await res.json();
                console.log("esse eh o de dados", data);
                setInvoice(data);
            }
        }

        fetchData()
    }, [])

    // const items =
    //     [{
    //         floor: "11",
    //         door: "1123",


    //     },
    //     {
    //         floor: "9",
    //         door: "938",

    //     }
    //     ]

    //usar para organizar a lista em ordem onde quem já pagou esta por baixo
    //    items.sort((i1, i2) => i1.status - i2.status)

    return (
        <div className={styles.container}>
            <List>
                {invoice.map(i => <ItemInvoice name={i.name} record={i.record} />)}
            </List>


        </div>
    )
}
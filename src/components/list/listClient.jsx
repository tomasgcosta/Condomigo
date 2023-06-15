import React from 'react';
import { useEffect, useState } from "react"

import { ItemClients } from "./items";
import List from "./list";


export default function ListClients() {

    const [cond, setCond] = useState(null)

    useEffect(() => {
        async function fetchData() {

            const res = await fetch(
                `/api/condos`,
                { method: "GET" }
            );
            if (res.status != 200) {
                console.log("Condominios ainda não disponíveis");
            } else {
                const data = await res.json();
                console.log("esse eh o de dados", data);
                setCond(data);
            }
        }

        fetchData()
    }, [])

    // const items =
    //     [{
    //         name: "Nelson Medina",
    //         local: "1123",
    //         url: "/logo192.png"
    //     },
    //     {
    //         name: "Nelson Medina",
    //         local: "1123",
    //         url: "/logo192.png"
    //     }
    //     ]

    return (
        <div>
            <List>
                {cond && cond.length > 0 && cond.map(i => <ItemClients name={i.name} local={i.local} url={i.url} />)}
            </List>


        </div>
    )
}
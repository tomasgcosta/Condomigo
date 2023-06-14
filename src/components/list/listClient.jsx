import React from 'react';


import { ItemClients } from "./items";
import List from "./list";


export default function ListClients() {

    const items =
        [{
            name: "Nelson Medina",
           local: "1123",
            url: "/logo192.png"
        },
        {
            name: "Nelson Medina",
            local: "1123",
            url: "/logo192.png"
        }
    ]

       return (
        <div>
            <List>
                {items.map(i => <ItemClients name={i.name} local={i.local} url={i.url} />)}
            </List>
            

        </div>
    )
}
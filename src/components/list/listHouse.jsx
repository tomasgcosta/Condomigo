import React from 'react';
import styles from './list.module.css'

import List from "./list";
import { ItemHouse } from './items';
import Header from './header';


export default function ListHouse() {
    // criar condição para que se o ID do apartamento tem um Id de recibo criado, ele está pago. Desta forma recebe uma imagem verde.

    const items =
        [{
            floor: "11",
            door: "1123",
            
           
        },
        {
            floor: "9",
            door: "938",

        }
        ]
    //usar para organizar a lista em ordem onde quem já pagou esta por baixo
    //    items.sort((i1, i2) => i1.status - i2.status)

    return (
        <div className={styles.container}>
            <Header/>
            <List>
                {items.map(i => <ItemHouse floor={i.floor} door={i.door} />)}
            </List>


        </div>
    )
}
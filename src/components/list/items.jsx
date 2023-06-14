import React from 'react';
import styles from './list.module.css'

export function ItemDate({ name, }) {

    return (
        <div>
            <p>{name} </p>
        </div>
    )
}




export function ItemClients({ name, url, onClick, local }) {

    return (
        <div className={styles.slides }onClick={onClick}>
            <div >
                <img src={url} alt='123'/>
            </div>
            <div>
                <p>{name}</p>
                <p>{local}</p>
            </div>
        </div>
    )
}

export function ItemHouse({ floor, door, onClick, status }) {

    return (
        <div className={styles.containerButton} onClick={onClick}>
            <p>{floor} - {door}</p>

        </div>
    )
}

//

export function ItemInvoice({ name, record, onClick }) {

    return (
        <div>
            <p onClick={onClick}>{name} - {record} </p>
        </div>
    )
}




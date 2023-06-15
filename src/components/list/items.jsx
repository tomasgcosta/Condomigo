import React from 'react';
import styles from './list.module.css'


export function ItemDate({ name, }) {

    return (
        <div>
            <p>{name} </p>
        </div>
    )
}




export function ItemClients({ name, url, onClick, location }) {

    return (
        <div  >
            <div className={styles.slides} onClick={onClick}>
                <div>
                    <img className={styles.condImg} src={url} alt='123' />
                </div>
                <div>
                    <p>{name}</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    )
}

export function ItemHouse({ floor, door, onClick, location }) {

    return (
        <div>
            <div className={styles.containerButton} onClick={onClick}>
                <p>Andar: {floor} - Porta:{door}</p>

            </div>
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




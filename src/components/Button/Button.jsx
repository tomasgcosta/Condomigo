import React from 'react';
import styles from './button.module.css'
import { Link } from "react-router-dom"



export default function Button() {

    return (
        <div ><Link to='/HomePage'> 
           <button className={styles.buttonRetorno} >Retornar</button></Link>
        </div>
    )
}


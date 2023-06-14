
export function ItemDate({ name, }) {

    return (
        <div>
            <p>{name} </p>
        </div>
    )
}




export function ItemClients({ name, floor, onClick , status}) {

    return (
        <div>
            <p onClick={onClick}>{name} {floor}  </p>
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




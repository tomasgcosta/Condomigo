import { ItemClients } from "./items";
import List from "./list";


export default function ListClients() {

    const items =
        [{
            name: "Nelson Medina",
            registration: "1123",
            date: "21/05/2023"
        }]

       return (
        <div>
            <List>
                {items.map(i => <ItemClients name={i.name} date={i.date}/>)}
            </List>
            

        </div>
    )
}
import ButtonClients from "./buttonClient";
import ButtonDate from "./buttonDate";
import ButtonInvoice from "./buttonInvoice";

export default function HomePage(props) {

    return (
        <div>

            <div><ButtonDate /></div>
            <div><ButtonClients /></div>
            <div><ButtonInvoice /></div>

        </div>
    )
}
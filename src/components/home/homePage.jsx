import ButtonClients from "./buttonClient";
import ButtonDate from "./buttonDate";
import ButtonInvoice from "./buttonInvoice";
import './homepage.css'





export default function HomePage(props) {

    return (
        <div className="paginahomepage">
            <div className="branquitopa"></div>

            <div class="containerbotoes">
                <div ><ButtonDate /></div>
                <div ><ButtonClients /></div>
                <div ><ButtonInvoice /></div>
            </div>

        </div>
    )
}
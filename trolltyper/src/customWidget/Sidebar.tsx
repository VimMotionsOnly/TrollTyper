import {clients} from "../clients.ts";
import '../css/Sidebar.css'

function Sidebar(){
    return (
        <section className="sidebar">
            <div className="clientCard">
                <h5>Connected Clients</h5>
            </div>
            {clients.map(client =>
                <div className="clientCard">
                    <img src="https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png" alt="client_pfp" height="32px" width="48px"/>
                    <p>{client.username}</p>
                </div>
            )}
        </section>
    )
}

export default Sidebar
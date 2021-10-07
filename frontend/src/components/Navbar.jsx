import React from "react";
import {Link} from "react-router-dom";
import './style.css';

// Renders the navbar and hold links to go to next pages
function Navbar(){
    return <nav className="navbar">
        <h4><Link className="link" to="/">|Home|</Link></h4>
        <h4><Link className="link" to="/log"> |Uitloggen </Link></h4>
        <h4><Link className="link" to="/vragenlijst">|Vragenlijst</Link></h4>
        <h4><Link className="link" to="/createtool">|AanmakenTool</Link></h4>
        <h4><Link className="link" to="/rapportgeschiedenis">|Rapport geschiedenis</Link></h4>
        <h4><Link className="link" to="/informatiepagina">|Informatie pagina</Link></h4>
        {/* <h4><Link className="link" to="/datafetch">|data</Link></h4> */}
        <a href="/"><button className="automaaTestH" type="button">AutomaaTest</button></a>
    </nav>
}

export default Navbar;
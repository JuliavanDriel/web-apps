import React from "react";

// Reders the homepage
function HomePage(){
    return <div className='contain'>
        <div className='greenArray'>
        <h1 className="TitleH">Je hebt de juiste gegevens ingevuld</h1>
        </div>
        <div>
        <p className="subTextH">Welkom op de homepagina, vanaf hier kun je een testscript maken.</p>
        </div>
        <div>
        <a href= "/vragenlijst"><button className="TestScripMakeBtn CreateScript" type="button">Testscript maken <p class= "hakenBetter"></p> </button></a>
        <a href="/informatiepagina"><button className="ExplainBtn CreateScript2" type="button">Uitleg <p class= "hakenBetter"></p></button></a>
        <a href="/rapportgeschiedenis"><button className="RHistoyBtn CreateScript3" type="button">Rapport geschiedenis <p class= "hakenBetter"></p></button></a>
        </div>
    </div>
}

export default HomePage;
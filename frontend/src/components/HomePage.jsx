import React from "react";


// Reders the homepage
function HomePage(){
    return <div className='contain'>
        <div className='greenArray'>
        <h1 className="TitleH">Welkom bij AutomaaTest</h1>
        </div>

        <div>
        <div>
        <p data-testid="HomeTitle" className="subTextH">Welkom op de homepagina, vanaf hier kun je een testscript maken.</p>
        </div>
        <div>
        <a href= "/vragenlijst"><button id="QuestionPage" className="TestScripMakeBtn CreateScript" type="button">Testscript maken <p className= "hakenBetter"></p> </button></a>
        <a href="/informatie"><button id="InformationPage" className="ExplainBtn CreateScript2" type="button">Uitleg <p className= "hakenBetter"></p></button></a>
        <a href="/rapportGeschiedenis"><button id="HistoryPage" className="RHistoyBtn CreateScript3" type="button">Rapport geschiedenis <p className= "hakenBetter"></p></button></a>
        </div>
        </div>
    </div>
}

export default HomePage;
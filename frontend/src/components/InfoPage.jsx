import React, { useState } from "react";

// renders the infopagee
function Infopage(){
    const [seleniumInfo,setSeleniumInfo] = useState(false)
    const [gatlingInfo, setGatlingInfo] = useState(false)
    const [jmeterInfo, setJmeterInfo] = useState(false)
    const [cypressInfo, setCypressInfo] = useState(false)
    const [webdriverInfo, setWebdriverInfo] = useState(false)
    const [createToolInfo, setCreateToolInfo] = useState(false)
    const [createTestInfo, setTestInfo] = useState(false)

    return <div className='contain'>
         <div className='greenArray'>
        <div>
            <h1 className="TitleI">Lezen. Leren. Schrijven.</h1>
        {/* <p class="haken">>></p> */}
    </div>
    </div>
    <div className='body'>
    <button className='seleniumInfoBtn' onClick={() => setSeleniumInfo(!seleniumInfo)}>Selenium</button>
    <button className='gatlingInfoBtn' onClick={() => setGatlingInfo(!gatlingInfo)}>Gatling</button>
    <button className='jmeterInfoBtn' onClick={() => setJmeterInfo(!jmeterInfo)}>JMeter</button>
    <button className='cypressInfoBtn' onClick={() => setCypressInfo(!cypressInfo)}>Cypress</button>
    <button className='webdriverInfoBtn' onClick={() => setWebdriverInfo(!webdriverInfo)}>WebdriverIO</button>
    <button className='CreateToolInfoBtn' onClick={() => setCreateToolInfo(!createToolInfo)}>Uitleg aanmaken testtool</button>
    <button className='TestInfoBtn' onClick={() => setTestInfo(!createTestInfo)}>Uitleg aanmaken testscript</button>
    {seleniumInfo && <div>
    <h1 className="QuestScript">Selenium</h1>
    <p className="QuestScript">
    Selenium heeft 3 verschillende test manieren. Een testscript kan worden gemaakt via de WebDriver, IDE en GRID. Bij WebDriver wordt Chrome opgestart (in test modus), vervolgens wordt het script met stappen doorlopen op de website. Hierdoor lijkt het alsof een echte gebruiker op de website zit. 
    Bij IDE wordt er zelf een script gemaakt, door in de test modus op elementen te klikken. 
    GRID zorgt ervoor dat een test op verschillende applicaties en browsers kan testen. Nadat er een test is gemaakt in de optie WebDriver, kan GRID worden gebruikt.
    Voor het maken van de applicatie is er voor WebDriver gekozen, omdat er handmatig een script aangemaakt kan worden. Voor het schrijven van een script kan er gekozen worden uit de volgende talen:
	Java,
	Python,
	C#,
	Ruby en
	JavaScript
</p>
<br/>
<h3 className="QuestScript">Hoe is het script opgebouwd?</h3>
<p className="QuestScript">
    Als eerste moet selenium-webdriver worden aangeroepen. Hierdoor kan de code uitgevoerd worden. De code die hiervoor is als volgt:
    “const = require('selenium-webdriver');”
    (Selenium, Writing your first Selenium script, 2021)</p>

<p className="QuestScript">
    Vervolgens moet Chrome worden aangeroepen.  De code is:
    require("chromedriver");

    Nadat dit geschreven is, volgt de functie die uitgevoerd moet worden. Dit is het gehele script dat uitgevoerd zal worden. De code is:

    async function FunctieNaam() 
 
    In deze functie zal alles wat je als gebruiker wilt testen in moeten komen staan.

    Daarna moet het venster worden geopend om de test uit te voeren. De code is als volgt:
    await new Builder().forBrowser('chrome').build();

    Het eerste dat in de functie moet komen te staan is de URL-link van de website die getest moet worden. De code die daarvoor gebruikt wordt is als volgt:

    await driver.get('https://URL);
    
    Vervolgens ligt het eraan wat er getest moet worden op een website. De basiselementen zullen hier uitgelicht worden. 
</p>

<p className="QuestScript">
    Navigatie website
    Navigatie in de website zoals teruggaan, vooruitgaan en opnieuw laden. De code is als volgt:
    (teruggaan)
    await driver.navigate().back();
    (vooruit)
    await driver.navigate().forward();
    Opnieuw laden
    await driver.navigate().refresh();
   </p>

<p className="QuestScript">
    Zoek een element op website
    Er zijn verschillende elementen die kunnen worden getest. Er wordt gebruik gemaakt van findElement. Vervolgens wordt By aangeroepen. Na By kunnen de volgende elementen worden aangeroepen: By.name, By.id, By.css en By.linkText
</p >
<p className="QuestScript">
    await driver.findElement(By.name('ID_van_element'));
    Als check of het element op de website “aan” staat, kan de volgende code achter de bovenstaande code gezet worden.
    .isEnabled();
    </p>
<p className="QuestScript">

    Op knoppen klikken
    Nadat er een element gevonden is, kan er bijvoorbeeld op een knop geklikt worden (met hetzelfde ingevoerde ‘id’ als bij ‘findElement’)
    De code is als volgt:
    await DeNaamVanVariabelFindId.click();

</p>

<p className="QuestScript">
    Stop het script
    Als het script moet stoppen, gebruik de volgende code:
    await driver.quit();

    Hoe moet de test uitgevoerd worden via de terminal?
    Als eerst moet selenium-webdriver worden geïnstalleerd. In Visual Studio moet je de volgende command invoeren in de terminal (mits npm is geïnstalleerd):
</p>

<p className="QuestScript">
    “npm install selenium-webdriver” (NPM, 2021)

    Vervolgens moet chromedriver worden geïnstalleerd. Het volgende command moet worden ingevuld:

    “npm install chromedriver”  (CodingSrc, 2019)

    Nadat alles geïnstalleerd is, kan de test worden uitgevoerd. Via de terminal moet er verwezen worden naar de juiste file en deze moet vervolgens worden uitgevoerd. 

    Om de code uit te voeren moet het volgende command worden uitgevoerd:

    “Run bestandNaam.js” (CodingSrc, 2019)

    Bij Xterm moet het volgende command worden ingevuld:

    “node bestandNaam.js”
</p>

</div>
}
{gatlingInfo &&<div>
    <h1 className="QuestScript">Gatling</h1>
    <p className="QuestScript">
        Hoe is het script opgebouwd?
        Als eerste moeten er verschillende importen worden gedaan, zodat Gatling zelf wordt aangeroepen. Vervolgens wordt de class aangemaakt waarin de test komt te staan.

        Daarna worden de HTTP-configuraties opgesteld, zoals de URL-link en de acceptheaders.

        Gatling maakt gebruik van virtuele gebruikers. Elke gebruiker voert een aantal vooropgestelde stappen uit. Om een gebruiker iets uit te laten voeren, moet er eerst een scenario worden opgesteld. Dit wordt als volgt gedaan:

        “scenario(“Scenario naam”)” (Gatling, Advanced Tutorial, sd)

        In een scenario wordt als eerst de scenario naam toegeschreven. Vervolgens hangen aan die scenario de stappen die moeten worden doorlopen.

        “scenario(“Scenario naam”)
            .exec(http(“naam van wat er getest wordt”).get(“URL-link”))” (Gatling, Advanced Tutorial, sd)

        Daarnaast kan een scenario worden toegeschreven aan een simulatie. Een simulatie bepaalt het aantal virtuele gebruikers, die de test uitvoeren, en de tijd die tussen de gebruikers zit.

        “ScenarioBuilder FirstUser = scenario(”VoorbeeldNaam gebruikers”);”
        “setUp(FirstUser).injectOpen(rampUsers(500).during(200))” (Gatling, Advanced Tutorial, sd)

        Feeders vullen de test aan met gegevens vanuit een extern bestand. Een voorbeeld van een extern bestand is een CSV-bestand. In zo’n bestand kunnen bijvoorbeeld meerdere inloggegevens zijn opgeslagen. In een test kunnen de inloggegevens achterelkaar worden ingevuld, om te testen of de applicatie naar behoren functioneert. (Gatling, Advanced Tutorial, sd)

        Check is een functie die checkt of conditie het gewenste eindresultaat heeft. 
        .check

        Ook is het mogelijk om een pauze tussendoor in te voeren. Als een echte gebruiker, wordt er niet gelijk overal op geklikt. Er is denktijd voor nodig om alles te lezen, te zoeken en om keuzes te maken. Om een virtuele gebruiker te laten lijken op een echte gebruiker, is er een mogelijkheid om dit te doen via de pauze functie. (Gatling, Concepts, sd)
        
        “.pause(2)” (Gatling, Concepts, sd)

    </p>
    </div>
    }

{jmeterInfo &&<div>
    <h1 className="QuestScript">JMeter</h1>
    <p className="QuestScript">
        Hoe is het script opgebouwd?
        Als eerste wordt het testplan aangemaakt. Hierin is het mogelijk om een naam te geven aan het testplan. Daarna kan er een threathgroup worden aan gemaakt. Een threathgroup is een goep van threath die apart van elkaar opdrachten uitvoeren. Een threath is hetzelfde als een virtuele gebruiker. In de threathGroup kan worden aangegeven hoeveel nummers van threaths in het script moet staan, hoeveel tijd ze erover mogen doen, of en een timer op moet staan en hoelang dit moet duren. Daarna moet er in de http-sampler worden aangegeven welke website er getest moet worden en welke methode er gebruikt moet worden. (Pedamkar, sd)

        In de GUI mode heb je de mogelijkheid om een aantal functie aan te zetten. Dit is ook mogelijk in de non-GUI mode. 

        Hoe moet de test uitgevoerd worden?
        In dit script zijn een aantal aanpassingen gedaan, zodat een gebruiker het script naar eigen zinnen kan veranderen. 

        Als eerste moet JMeter geïnstalleerd zijn op je computer. Vervolgens moet er een CSV-bestand aangemaakt worden, waarin de gegevens van de test worden opgeslagen.

        Daarna kan het script worden uitgevoerd, doormiddel van de terminal te gebruiken met het volgende command:
    </p>
    <p className="QuestScript">
        “jmeter -n -t [jmx file] -l [results file] -e -o [Path to output folder]” (JMeter, sd)
    </p>
    
    </div>
    }

{cypressInfo &&<div>
    <h1 className="QuestScript">Cypress</h1>
    <p className="QuestScript">
        Hoe is het script opgebouwd?
        Het eerste wat er in het script komt te staan is de titel van de test. De code hiervoor is als volgt:

        “describe(“Naam van de titel”, ()=)”

        Vervolgens wordt beschreven welk onderdeel er getest gaat worden. Dit kadert de test, zo kunnen meerdere functies getest worden. De code is als volgt:

        “it(“Naam van de functie”, ()=)”

        Daarna wordt er specifieker gekeken naar wat er getest moet worden. Zoals bezoek een website, vul gegevens in en de doorloop van de website. Er zijn ongeveer 84 commands die hierbij uitgevoerd kunnen worden. Een aantal commands zijn hieronder weergegeven:

        And, Check, Click, Get, Pause, Reload, Select, Should, Then, Tick, Trigger, url, wrap, writeFile.

        De commands wordt als volgt gebruikt:

        “cy.get(“www.example.nl”)” of “cy.visit(“www.example.nl”)” (Cypress, get, sd)
        Hierbij wordt een URL-link geopend.

        “cy.get(.buttonName).click()”
        Hierbij wordt er op een knop geklikt. Er kunnen op verschillende manieren geklikt worden op een knop. Een knop kan worden gevonden via de id met de volgende code: 

        “[id:^=btn]” 
        (Dit stukje code moet dan .buttonName vervangen, in het voorbeeld hierboven)

        “cy.writeFile(“path naar de file.txt”, “wat er in de file moet worden weergegeven aan tekst”) (Cypress, writeFile, sd)
        Hierbij wordt er, via de aangegeven path/file, in de file geschreven. Als er nog geen file bestaat, dan zal deze worden aangemaakt. (Cypress, writeFile, sd)

        “cy.get(“een object”)
            .Should(“be.disabe”l)”
            .and(“match”, /open sans/)”

        Daarnaast is het ook mogelijk om functies aan te maken en de functie in de test te gebruiken. Hierbij moet er eerst een functie aangemaakt worden (buiten de test). En vervolgens wordt de functie aangeroepen in de test. (Cypress, Writing and Organizing Tests, sd)
    </p>

    <p className="QuestScript">
        Hoe moet de test uitgevoerd worden?
        Om een script van Cypress uit te voeren, moet Cypress eerst worden geïnstalleerd in visual studio. De code hiervoor is:

        “npm install cypress”

        Om het script uit te voeren, moet het volgende command worden uitgevoerd:

        “npx cypress open” (Cypress, Writing and Organizing Tests, sd)
        Dit zal een Electron app openen en in de tussen tijd wordt het script uitgevoerd. In de app staat daarna of de test goed of fout is gegaan. (Cypress, Writing and Organizing Tests, sd)
    </p>
    </div>
    }

{webdriverInfo &&<div>
    <h1 className="QuestScript">WebdriverIO</h1>
    <p className="QuestScript">

    De test begint eerst met een algemene beschrijving over wat de test gaat uit voeren. 

“Describe(“Hier moet een korte uitleg worden gegeven”, function(){})”

Vervolgens kan er in deze beschrijving verschillende stappen/tests worden uitgevoerd.

Elke stap begint als volgt:
“it(“wederom een korte beschrijving wat de test moet gaan uitvoeren”, function(){})”

Het testscript ziet er dan als volgt uit:
“Describe(“Hier moet een korte uitleg worden gegeven”, function()
 "it(“wederom een korte beschrijving wat de test moet gaan uitvoeren”, function(){}"
")”

In de test kunnen verschillende dingen op een pagina worden getest. Voorbeelden zijn: naar een URL-link gaan, analyseren of een titel op de aangewezen pagina staat, op een knop klikken en een zoekopdracht uitvoeren.

Om naar een pagina te gaan, vul dan de volgende code, in de testscrip bij “it” in:
“Browser.url(“Hier moet de URL-link komen te staan”)”

Om te analyseren of een titel op een pagina staat, vul dan de volgende code in bij de “it” functie:
“Expect(browser).toHaveTitle(“Welke titel er verwacht wordt dat er op de website te zien is”)”

Om op een knop te klikken in het testscript, vul dan de volgende code in bij de “it” functie:
“const NaamVanHetVariable = $(“#HetIDVanDeKnop”)”
“NaamVanHetVariable.click()”

Om een zoekopdracht uit te voeren is er een id van de zoekbar zelf nodig en is de id van de knop van de zoekbar nodig.
“const NaamVanVariableSearchBar = $(“#IdVanDeSearchBar”)”
“const NaamVanVariableKnop = $(“#IdVanDeButton”)”
“NaamVanVariableSearchBar.addValue(“WatErIngevuldMoetWordenInDeZoekBar”)
“NaamVanVariableKnop.click()” (Webdriver, sd)


3.4.7.2	Het uitvoeren van een testscript
Een testscript van WebDriverIO wordt uitgevoerd in de terminal. Er kan een keuze worden gemaakt om alle testscript in één keer uit te voeren of een specifieke testscript.

Voer “npx wdio” in de terminal uit om alle testen uit te voeren, die zijn beschreven.

Als een specifieke test moet worden uitgevoerd, voer dan het volgende uit in de terminal:

“npx wdio -–spec ./HetPadNaarHetScript\NaamVanDeSpecifiekeTest.js”

Druk vervolgens op “Enter”.

De test zal worden uitgevoerd. Er zal gelijk een rapport worden laten zien of er een error is of niet. (Webdriverio, sd) (Webdriver, sd) 

    </p>
    </div>}

{createToolInfo &&<div>
    <h1 className="QuestScript">Uitleg aanmaken testtool</h1>
    <p className="QuestScript">Stap 1. Klik op de knop "AanmakenTool"</p>
    <p className="QuestScript">Stap 2. Vul de vragen in</p>
    <p className="QuestScript">Stap 3. Klik op de knop "Voeg testtool toe"</p>
    <p className="QuestScript">De testtool zal nu in de database worden gezet</p>
            </div>
            }

{createTestInfo &&<div>
    <h1 className="QuestScript">Uitleg aanmaken testscript</h1>
    <p className="QuestScript">Stap 1. Klik op de knop "Vragenijst"</p>
    <p className="QuestScript">Stap 2. Vul de vragen in</p>
    <p className="QuestScript">Stap 3. Klik op de knop "Maak script"</p>
    <p className="QuestScript">Vervolgens zal er een andere pagina worden geopent, zoek nu waar je script staat</p>
    <p className="QuestScript">Stap 4. Sla het script op, door op de knop "Script opslaan in database" te klikken</p>
    </div>
    }
    </div>
    </div>
}

export default Infopage;
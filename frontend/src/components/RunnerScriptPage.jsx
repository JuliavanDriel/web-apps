import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import axios from "axios";
import {singleFileUpload} from '../data/api'
var FileSaver = require('file-saver');

// render the script and extern website
function RunnerScriptpage() {
  // States
  const [js, setJs] = useState("");
  const [xml, setXml] = useState("");
  const uRl = localStorage.getItem("Url");
  const ThreathsBasic = localStorage.getItem("ThreathsBasic");
  const allquest = localStorage.getItem("allquest");
  const renderhttp = localStorage.getItem("renderHttp");
  const basicJM = localStorage.getItem("BasicJM");
  const renderAll = localStorage.getItem("renderAll");
  const Httpqest = localStorage.getItem("Httpqest");
  const RunJMeterScript = localStorage.getItem("RunJMeterScript");

  console.log(allquest);
  console.log(Httpqest);
  console.log(ThreathsBasic);
  console.log(RunJMeterScript); 

  //cypress
  // choose the script from the tool(true/false)
  const CypressBasic = localStorage.getItem("CypressBasic");
  const CypressAssertion = localStorage.getItem("CypressAssertion");
  const CypressAll = localStorage.getItem("CypressAll");

  const CypBasic = localStorage.getItem("CypBasic");
  const CypAssertion = localStorage.getItem("CypAssertion");
  const CypAll = localStorage.getItem("CypAll");

  const [cypresBasic, setCypresBasic] = useState(CypBasic);
  const [CypAssertions, setCypAssertions] = useState(CypAssertion);
  const [CypAlls, setCypAlls] = useState(CypAll);

  //gatling
  // choose the script from the tool (true/false)
  const GatlingBasic = localStorage.getItem("GatlingScript1");
  console.log("gatling b True:" + GatlingBasic);
  const GatlingM = localStorage.getItem("GatlingScript2");
  console.log("gatling M True:" + GatlingM);
  const GatlingG = localStorage.getItem("GatlingScript3");
  console.log("gatling G True:" + GatlingG);

  // the value of the scripts
  const GatBasic = localStorage.getItem("GatlingBasic");
  const GatM = localStorage.getItem("GatlingMe");
  const GatG = localStorage.getItem("GatlingGe");

  const [GatlingBasics, setGatlingBasics] = useState(GatBasic);
  const [GatlingMs, setGatlingMs] = useState(GatM);
  const [GatlingGs, setGatlingGs] = useState(GatG);

  //webdriver
  const scriptWeb = localStorage.getItem('scriptWeb')

  //selenium
  // const inputFileName = localStorage.getItem("inputFileName");
  // console.log("title file selenium is "+ inputFileName);
  const selenBasic = localStorage.getItem("selenBasic");
  // const [seleniumBasic, setSeleniumBasic] = useState(selenBasic);
  console.log("selenium script is:" + selenBasic);

  const RunSeleniumScript = localStorage.getItem("RunSeleniumsScript");
  console.log("selenium:" + RunSeleniumScript);

  const [inputXmlHTTP, setinputXmlHTTP] = useState(Httpqest);
  const [inputAll, setinputAll] = useState(allquest);

  // Database state
  const [item, setitem] = useState({
    inputHttp: "",
    inputAll: "",
    ThreathsBasic: "",
    selenBasic: "",
    CypBasic: "",
    CypAssertion: "",
    CypAll: "",
    GatlingBasics: "",
    GatlingMs: "",
    GatlingGs: "",
    scriptWeb:"",
    // inputFileName: ""
  });

  // Handle the change
  function handleChange(event) {
    const { name, value } = event.target;

    setitem(
      inputXmlHTTP,
      inputAll,
      ThreathsBasic,
      CypBasic,
      CypAssertion,
      CypAll,
      selenBasic,
      GatlingBasics,
      GatlingMs,
      GatlingGs ,
      scriptWeb,
      nameFile,
      // inputFileName
    );
    console.log(item);
  }

  // add testscript to database
  function addItem(e) {
    // alert("Script is opgeslagen in database");
    e.preventDefault();
    const newItem = {
      // inputHttp: Httpqest,
      // inputAll: allquest,
      // ThreathsBasic: ThreathsBasic,
      // CypBasic: cypresBasic,
      // CypAssertion: CypAssertions,
      // CypAll: CypAlls,
      // idName:,
      // inputFileName: inputFileName,
      selenBasic: selenBasic,
      // GatlingBasics: GatlingBasics,
      // GatlingMs: GatlingMs,
      // GatlingGs: GatlingGs,
      // scriptWeb: scriptWeb,
    };
    axios.post("http://localhost:3001/SaveScript", newItem);
    console.log(newItem);
  }
 
  // function getItem(e) {
  //   useEffect(() => {
  //     axios.get("http://localhost:3001/hellos").then((response) => {
  //       setGetInputHey(response.data);
  //     });
  //   }, []);
  // }

  const [InfoCheckTrue, setInfoCheckTrue] = useState(false);
  const [InfoDatabase, setInfoDatabase] = useState(false);
  const [InfoScriptPipeline, setInfoScriptPipeline] = useState(false);
  const [InfoDownload, setInfoDownlod] = useState(false);
  const [InfoGitHub, setInfoGithub] = useState(false);

  const [singleFile, setSingleFile] = useState('');
   
  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
    // setSingleProgress(0);
}
const uploadSingleFile = async () => {
  const formData = new FormData();
  formData.append('file', singleFile);
  await singleFileUpload(formData);
  // props.getsingle();
}

const[nameFile, setnameFile] = useState({
  title: ""
})

// function addfile(){
//   // naam toevoegen
//   // console.log("script:" + selenBasic)
//    var file = new File([selenBasic], nameFile + ".js", {type: "javascript"});   
//    FileSaver.saveAs(file);
// }

function handleChange2(event) {
  const { name, value } = event.target;

  setnameFile((prevInput) => {
    return {
      ...prevInput,
      [name]: value,
    };
  });
  console.log("dit is"+nameFile);
}


const [inputHey, setSayHello] = useState({
  TitleHello:"",
}

);

const [getinputhey, setGetInputHey] = useState([])



  // add item to database and post a testscript to run
  function addItemTest(e) {
    alert("Het kan even duren voordat de test klaar is. Een moment geduld a.u.b.")
    e.preventDefault();
    
    // Save result from the test
    const newhello = {
      TitleHello: inputHey.TitleHello,
    };
    // Run the test
    axios.post("http://localhost:3001/uitvoerenvanTest", newhello);
    console.log(newhello);
  }
 

useEffect(() => {
  axios.get("http://localhost:3001/hellos").then((response) => {
    setGetInputHey(response.data);
  });
}, []);




function handleHello(event) {
  // console.log(event.target)
  const { name, value } = event.target;

  setSayHello((prevInput) => {
      return {
          ...prevInput,
          [name]: value,
      };
  });
}


// Get data of the file and kopie it to a file in the path
function getTestFromDatabase(){
  alert("Script is gepushed naar de backend")
  console.log(selenBasic)
  axios.get("http://localhost:3001/getFile/", { params: { selenBasic: selenBasic } });
}

  return (
    <div className="contain">
      <div className="greenArray">
        <div>
          <h1 className="TitleI">Test</h1>
        </div>
      </div>
      <div className='body'>
      <div>
        
        <h1 className="paramTitle">Stap 1: Controleer of het testscript juist is.</h1>
        {/* <button className="InfoBtn" onClick={() => setInfoCheckTrue(!InfoCheckTrue)}>Info</button>
        {InfoCheckTrue && <div>
        <p className="paramTitle">Is dit het gewenste testscript?</p>
        <p className="paramTitle">Zo ja, klik dan op de knop "run script".</p>
        <p className="paramTitle">Zo nee, ga dan terug naar de vorige pagina en vul opnieuw de vragen in.</p>
        </div>} */}
      </div>

      {/* selenium */}
      <div className="pane top-pane">
        {/* the language where the script on the website runs in */}
        <div className="selenium" id="selenium">
        <Editor
          language="javascript"
          displayName="Selenium"
          id="editor"
          value={selenBasic}
          onChange={setJs}
        ></Editor>
        </div>
      </div>
      
          
        
{/* webdriver */}
      <div className="pane top-pane">
        {/* the language where the script on the website runs in */}
        <div className="webdriver" id="webdriver">
        <Editor
          language="javascript"
          displayName="WebdriverIO"
          id="editor"
          value={scriptWeb}
          onChange={setJs}
        ></Editor>
        </div>
        </div>

      <div className="pane top-pane">
        {/* basic */}
        {basicJM && (
          <Editor
            language="xml"
            displayName="JMeter Basic"
            value={ThreathsBasic}
            onChange={setXml}
          ></Editor>
        )}

        {/* http */}
        {renderhttp && (
          <Editor
            onChange={handleChange}
            language="xml"
            displayName="JMeter HTTP"
            name="inputXmlHTTP"
            value={inputXmlHTTP}
            // onChange={setXml}
          ></Editor>
        )}

        {/* all */}
        {renderAll && (
          <Editor
            language="xml"
            displayName="JMeter All"
            value={allquest}
            onChange={setXml}
          ></Editor>
        )}
      </div>

      {/* cypress */}
      <div className="pane top-pane">
        {CypressBasic && (
          // {/* the language where the script on the website runs in */}
          <Editor
            language="javascript"
            displayName="Cypress"
            value={CypBasic}
            onChange={setJs}
          ></Editor>
        )}

        {CypressAssertion && (
          <Editor
            language="javascript"
            displayName="Cypress Assertion"
            value={CypAssertion}
            onChange={setJs}
          ></Editor>
        )}

        {CypressAll && (
          <Editor
            language="javascript"
            displayName="Cypress Assertion+"
            value={CypAll}
            onChange={setJs}
          ></Editor>
        )}
      </div>

      {/* Gatling */}
      <div className="pane top-pane">
        {GatlingBasic && (
          // {/* the language where the script on the website runs in */}
          <Editor
            language="java"
            displayName="Gatling"
            value={GatBasic}
            onChange={setJs}
          ></Editor>
        )}

        {GatlingM && (
          <Editor
            language="java"
            displayName="Gatling"
            value={GatM}
            onChange={setJs}
          ></Editor>
        )}

        {GatlingG && (
          <Editor
            language="java"
            displayName="Gatling"
            value={GatG}
            onChange={setJs}
          ></Editor>
        )}
      </div>

      <div>
        <input
          onChange={handleChange}
          name="selenBasic"
          autoComplete="off"
          className="Hide-inputscripts"
          placeholder="Naam"
        ></input>
        
        <input
          onChange={handleChange}
          name="ThreathsBasic"
          autoComplete="off"
          className="Hide-inputscripts"
          placeholder="Naam"
        ></input>

        <input
          onChange={handleChange}
          name="inputHttp"
          autoComplete="off"
          className="Hide-inputscripts"
          placeholder="Naam"
        ></input>

        <input
          onChange={handleChange}
          name="CypAssertion"
          autoComplete="off"
          className="Hide-inputscripts"
          placeholder="Naam"
        ></input>

        <input
          onChange={handleChange}
          name="CypAll"
          autoComplete="off"
          className="Hide-inputscripts"
          placeholder="Naam"
        ></input>

        <input
          onChange={handleChange}
          name="inputXmlHTTP"
          autoComplete="off"
          className="Hide-inputscripts"
          placeholder="Naam"
        ></input>

        <input
          onChange={handleChange}
          name="CypBasic"
          autoComplete="off"
          className="Hide-inputscripts"
          placeholder="Naam"
        ></input>

        <input
          onChange={handleChange}
          name="scriptWeb"
          autoComplete="off"
          className="Hide-inputscripts"
          placeholder="Naam"
        ></input>

        <input
          onChange={handleChange}
          name="inputAll"
          autoComplete="off"
          className="Hide-inputscripts"
          placeholder="Naam"
        ></input>

{/*  Change the text in a file */}
<h1 className="paramTitle">Stap 2: Push de code naar de backend</h1>
<button id="executeScriptBtn" className="executeScriptBtn" onClick={getTestFromDatabase}>Gebruik de bovenstaande code</button>

{/* Execute the script with Docker */}
<h1 className="paramTitle">Stap 3: Voer de test uit</h1>
<p className="QuestScript">Let op, het kan even duren voordat de test klaar is. Dit komt doordat Docker moet opstarten en moet runnen. Even geduld...</p>
<button id="executeScriptChangeBtn" className="executeScriptChangeBtn" onClick={addItemTest}>Voer testscript uit</button>

{/* Show all data of results aftester execution */}
<p className="paramTitle">Resultaat:</p>
<div className="gridContainer">
        {getinputhey.map((to) => (
          <div key={to._id}>
            <h3 id="RenderResultScript" className="titleTools">{to.TitleHello}</h3>
                   </div>
        ))}
      </div>

        <h1 className="paramTitle">Optioneel: Testscript opslaan in database</h1>
        <button  onClick={addItem} className="executeScriptBtn">
          Testscript opslaan in database
        </button>
 
        {/* <button onClick={axiosTest} className="Btn-addItem-db">
          Haal testscript uit database
        </button>  */}

        {/* <div>
        {/* <h1 className="paramTitle">Stap 3: Testscript downloaden</h1> */}
  {/* <button className="InfoBtn" onClick={() => setInfoDownlod(!InfoDownload)}>Info</button>
        {InfoDownload && <div>
        <p className="paramTitle">Om het testscript te kunnen uitvoeren, moet het testscript worden gedownlaod</p>
        <p className="paramTitle">Klik op "Download testscript" om het testscript te downloaden</p>
        </div>}
      </div> */} 
      

      {/* <input  onChange={handleChange2} placeholder="Naam van bestand" id="setnameFile" name="setnameFile" /> */}

         {/* <button onClick={addfile} className="QuestDownloadBtn">Download testscript</button> */}
        {/* <h3 className="paramTitle">keuze uit: testscript toevoegen aan bestandspad of testscript toevoegen aan GitHub</h3> */}
          
         {/* Code for saving in directory */}
        
         <div className="form-group">
                    {/* <label >Kies een script en voeg hem toe aan een bestandspad</label> */}
                    <br />
                    
                    {/* <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} /> */}
                    <br />
                    {/* <br />
                    <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile()} >Upload</button> */}
            
                </div>
                

        {/* <div> */}
        {/* <h1 className="paramTitle">Stap 4.1: Testscript toevoegen aan GitHub</h1>
        <button className="InfoBtn" onClick={() => setInfoGithub(!InfoGitHub)}>Info</button>
        {InfoGitHub &&<div>
        <p className="paramTitle">Om het testscript te kunnen uitvoeren, moet het testscript worden geüpload in GitHub</p>
        <p className="paramTitle">Klik op "Ga naar GitHub" om naar GitHub te gaan</p>
        <p className="paramTitle">Ga vervolgens naar het gewenste branch en klik op "add file"</p> */}
        {/* <p className="paramTitle">Voeg je tescript toe en commit je veranderingen</p> */}
        {/* </div>} */}
      {/* </div> */}
      {/* <form action="https://github.com/JuliavanDriel/web-apps/tree/master/frontend/src/components/testfiles">
        <button  className="Btn-Open-GitHub">
          Ga naar GitHub
        </button>
        </form> */}
{/* 
      <div>
        <h1 className="paramTitle">Stap 5: Ga naar Jenkins om de test uit te voeren</h1>
        <button className="InfoBtn" onClick={() => setInfoScriptPipeline(!InfoScriptPipeline)}>Info</button>
        {InfoScriptPipeline && <div>
        <p className="paramTitle">Om het testscript te kunnen uitvoeren, moet er eerst worden ingelogd</p>
        <p className="paramTitle">vervolgens moet er een pipeline worden toegevoegd</p>
        <p className="paramTitle">Een voorbeeld van het uit voeren van een script is als volgt:</p>
        <p className="paramTitle">pipeline ( "dit moet een gekrulde haak zijn" agent any</p>
 
  <p className="paramTitle">tools (nodejs "node") "de () moeten een gekrulde haak zijn"</p>
    
  <p className="paramTitle">stages ( "dit moet een gekrulde haak zijn" </p>   
    <p className="paramTitle">stage('Cloning Git') ("dit moet een gekrulde haak zijn"</p>
    <p className="paramTitle">steps ( </p>   
      <p className="paramTitle">git branch: 'working', url: 'https://github.com/JuliavanDriel/web-apps.git'</p>
      <p className="paramTitle">sh "npm install selenium-webdriver" </p>
      <p className="paramTitle">sh "npm install chromedriver" </p>
      <p className="paramTitle">dir("frontend/src/components") ("dit moet een gekrulde haak zijn"</p>
      <p className="paramTitle">sh "node file.js"</p>
      <p className="paramTitle">)"dit moet een gekrulde haak zijn"</p>
      <p className="paramTitle"> )"dit moet een gekrulde haak zijn"</p>
       
      <p className="paramTitle">)"dit moet een gekrulde haak zijn"</p>
      <p className="paramTitle">)"dit moet een gekrulde haak zijn"</p>
      <p className="paramTitle">)"dit moet een gekrulde haak zijn"</p>
     </div>} 
     </div> */}
        
        {/* <form action="http://localhost:8080/login?from=%2F">
        <button  className="Btn-Open-Jenkins">
          Ga naar JenKins
        </button>
        </form> */}
        
         {/* <p className="paramTitle">Dit is de website die is aangegeven</p> */}
      </div> 

      {/* Frame where the input/url webpage will be published */}
      {/* <div>
        <iframe
          className="frame"
          title="output"
          src={uRl}
          height="400"
          width="600"
        ></iframe>
      </div> */}

      <a href="/vragenlijst">
        <button className="BacktoQuestBtn">Terug</button>
      </a>
    </div>

    {/* <h1>Alle scripts</h1>
        <div className="gridContainerJM">
        {fileData.map((to, key) => (
         <div className="Onegrid" key={key}>
              {to.inputFileName === "EveryOne" && <div><p> {to.selenBasic}</p><button className="deletebtntool" onClick={() => kopieItem(to._id)}>kopie script</button></div>}
            
          </div>
        ))}
        </div> */}
    </div>
  );
}

export default RunnerScriptpage;

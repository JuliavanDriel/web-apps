import React, { useState } from "react";
import Editor from "./Editor";
import axios from "axios";

// render the script and extern website
//////////////////////////////////////////////// RenderJmeterpage
function RunnerScriptpage() {
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

  // /////////////////////////////////////////////////////cypress
  // const textCypress= localStorage.getItem('RunCypressScript')
  // console.log('cypress:'+textCypress)
  // const savedCypress1 = localStorage.getItem('saveCypress1');
  // console.log('cypress script:'+savedCypress1);
  // const saveCypressAssertion = localStorage.getItem('scriptAssertion');
  // console.log('cypressAssertion :' +saveCypressAssertion);

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

  /////////////////////////////input

  //////////////////////////////////////////////gatling
  // choose the script from the tool (true/false)
  const GatlingBasic = localStorage.getItem("GatlingScript1");
  console.log("gatling b True:" + GatlingBasic);
  const GatlingM = localStorage.getItem("GatlingScript2");
  console.log("gatling M True:" + GatlingM);
  const GatlingG = localStorage.getItem("GatlingScript3");
  console.log("gatling G True:" + GatlingG);

  // const GatlingMe = localStorage.getItem('GatlingMe');
  // console.log('gatling ME:'+GatlingMe);
  // const GatlingGe = localStorage.getItem('GatlingGe');
  // console.log('gatling GE:'+GatlingGe);

  // the value of the scripts
  const GatBasic = localStorage.getItem("GatlingBasic");
  const GatM = localStorage.getItem("GatlingMe");
  const GatG = localStorage.getItem("GatlingGe");

  const [GatlingBasics, setGatlingBasics] = useState(GatBasic);
  const [GatlingMs, setGatlingMs] = useState(GatM);
  const [GatlingGs, setGatlingGs] = useState(GatG);
  //////////////////////////////////////////////////
///////////////////////////////////////////////////////webdriver
const WebDriverScript = localStorage.getItem('scriptWeb')



///////////////////////////////////////////////////
  /////////////////////////////////////////////////////selenium
  const selenBasic = localStorage.getItem("selenBasic");
  const [seleniumBasic, setSeleniumBasic] = useState(selenBasic);
  console.log("selenium:" + selenBasic);

  const RunSeleniumScript = localStorage.getItem("RunSeleniumsScript");
  console.log("selenium:" + RunSeleniumScript);

  const [inputXmlHTTP, setinputXmlHTTP] = useState(Httpqest);
  const [inputAll, setinputAll] = useState(allquest);

  ////////////////////////////////////////////////////////
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
    ////////////////////////input
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
      GatlingGs ///input
    );
    console.log(item);
  }

  function addItem(e) {
    alert("Script is opgeslagen in database");
    e.preventDefault();
    const newItem = {
      inputHttp: Httpqest,
      inputAll: allquest,
      ThreathsBasic: ThreathsBasic,
      CypBasic: cypresBasic,
      CypAssertion: CypAssertions,
      CypAll: CypAlls,
      selenBasic: seleniumBasic,
      GatlingBasics: GatlingBasics,
      GatlingMs: GatlingMs,
      GatlingGs: GatlingGs,
      ///////input
    };
    axios.post("http://localhost:3001/SaveScript", newItem);
    console.log(newItem);
  }
  
  function file(a) {
  //   try{
    if(a !== undefined){
    console.log(a)
    const Builder = require("selenium-webdriver");
  require("chromedriver");
    async function example(){
            let driver = await new Builder().forBrowser("chrome").build();
            await driver.get("http://localhost:3002/vragenlijst");
    }
    example();
  }
  else{console.log("nope")}
  }
  // catch(e){
    // console.log(e);
  // }
// }


  return (
    <div className="contain">
      <div className="greenArray">
        <div>
          <h1 className="TitleI">Test</h1>
        </div>
      </div>
      <div>
        <p className="paramTitle">Is dit het gewenste testscript?</p>
        <p className="paramTitle">Zo ja, klik dan op de run script knop</p>
        <button  onClick={file}>run</button>
      </div>

      {/* selenium */}
      {/* {RunSeleniumScript&& */}
      <div className="pane top-pane">
        {/* the language where the script on the website runs in */}
        <div className="proberen" id="proberen">
        <Editor
        className="hoihoi"
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
          value={WebDriverScript}
          onChange={setJs}
        ></Editor>
        </div>
        </div>


      {/* } */}
      {/* JMeter */}
      {/* {renderJMScript && */}
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
            onChange={setXml}
          ></Editor>
        )}
        {/* all */}
        {renderAll && (
          // {/* HIer moet nog een if state ment komen, omdat hij nu constant te zien is */}
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
        {/* <input onChange={handleChange} name= "savedCypress1" autoComplete = "off" className="Hide-inputscripts" placeholder="Naam"></input> */}
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
        {/* <input onChange={handleChange} name= "" autoComplete = "off" className="Hide-inputscripts" placeholder="Naam"></input> */}

        {/* input!!!!!!!!!!!!!!!!!!!!!!!!!! */}

        <input
          onChange={handleChange}
          name="inputAll"
          autoComplete="off"
          className="Hide-inputscripts"
          placeholder="Naam"
        ></input>
        <button onClick={addItem} className="Btn-addItem-db">
          Script opslaan in database
        </button>
        <p className="paramTitle">Dit is de website die is aangegeven</p>
      </div>

      {/* Frame where the input/url webpage will be published */}
      <div>
        <iframe
          className="frame"
          title="output"
          src={uRl}
          height="400"
          width="600"
        ></iframe>
      </div>

      <a href="/Selenium">
        <button className="BacktoQuestBtn">Terug</button>
      </a>
    </div>
  );
}

export default RunnerScriptpage;

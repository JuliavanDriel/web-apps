import React, { useState, useEffect } from "react";
import axios from "axios";


// renders the rapport history
function HistoryPage(){
  
  // Delete an item
  function deleteItem(id) {
    axios.delete("/deleteScript/" + id);
    alert("item deleted");
    console.log("delete item with " + id);
  }

    useEffect(() => {
        axios.get("http://localhost:3001/readScripts").then((response) => {
            sethistoryScriptJMeter(response.data);
        });
      }, []);
      useEffect(() => {
        axios.get("http://localhost:3001/readScripts").then((response) => {
            sethistoryScriptCypress(response.data);
        });
      }, []);
      useEffect(() => {
        axios.get("http://localhost:3001/readScripts").then((response) => {
            sethistoryScriptSelenium(response.data);
        });
      }, []);
    
      const [historyScriptJMeter, sethistoryScriptJMeter] = useState([]);
      const [historyScriptCypress, sethistoryScriptCypress] = useState([]);
      const [historyScriptSelenium, sethistoryScriptSelenium] = useState([]);

    return <div className='contain'>
         <div className='greenArray'>
        <div>
            <h1 className="TitleR">Van geschiedenis kan je leren</h1>
    </div>
        </div>
        <div className='body'>
        <h1>JMeter</h1>
        <div className="gridContainerJM">
        {historyScriptJMeter.map((to, key) => (
         <div className="Onegrid" key={key}>
              {to.inputHttp !== "undefined" && <div><h1>HTTP:</h1>
            <p className="titleTools">{to.inputHttp !== "undefined"&& to.inputHttp}</p></div>}
            {to.inputAll !== "undefined" && <div><h1>Alles:</h1>
            <p className="titelAnswere">{to.inputAll !=="undifined"&& to.inputAll}</p></div>}
            {to.ThreathsBasic !== "undefined" && <div><h1>Threaths:</h1>
            <p className="titelAnswere">{to.ThreathsBasic !=="undefined" && to.ThreathsBasic}</p></div>}
            <button className="deletebtntool" onClick={() => deleteItem(to._id)}>Verwijder script</button>
          </div>
        ))}
        </div>
        <h1>Cypress</h1>
        <div className="gridContainerCY">
        {historyScriptCypress.map((to, key) => (
    <div className="Onegrid" key={key}>
        {to.CypBasic !== "undefined" && <div><h1>Basic:</h1>
            <p className="titelAnswere">{to.CypBasic !== "undefined" && to.CypBasic}</p></div>}
        {to.CypAssertion !== "undefined" && <div><h1>Assertions:</h1>
            <p className="titelAnswere">{to.CypAssertion !== "undefined" && to.CypAssertion}</p></div>}
        {to.CypAll !== "undefined" && <div> <h1>Alles:</h1>
            <p className="titelAnswere">{to.CypAll !== "undefined" && to.CypAll}</p></div>}
            <button className="deletebtntool" onClick={() => deleteItem(to._id)}>Verwijder script</button>
     </div> 
  ))}
  </div>
  <h1>Selenium</h1>
  <div className="gridContainerSelenium">
  {historyScriptSelenium.map((to, key) => (
         <div className="Onegrid" key={key}>
            {to.selenBasic !== "undefined" && <div><h1>Script:</h1>
            <p className="titelAnswere">{to.selenBasic !== "undefined" && to.selenBasic}</p></div>}
            <button className="deletebtntool" onClick={() => deleteItem(to._id)}>Verwijder script</button>
            </div>
            )
      )
  }
  </div>
    </div>
    </div>
}

export default HistoryPage;
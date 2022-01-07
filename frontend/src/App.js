import React from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import QuestionPage from './components/Questionpage';
import HistoryPage from './components/Historypage';
import Infop from './components/Infop';
import Home from "./components/Home";
import CreateTool from "./components/UploadTool";
import Renderpage from "./components/RenderScript";
// import JMeterpage from "./components/JMeter";
import RenderSeleniumpage from "./components/Selenium";
import JMeterScriptpage from './components/JMeterScript';
import RunnerScriptpage from './components/RunnerScriptpage'


// defines the routes
function App() {

return (
  <Router>
    <Navbar/>
    <Route path="/" exact>
      <Home/>
      {/* home */}
    </Route>
    <Route path="/log">
      <Home/>
      {/* Uitloggen */}
    </Route>
    <Route path="/vragenlijst">
      <QuestionPage/>
      {/* questionpage */}
    </Route>
    <Route path= "/createtool">
      <CreateTool/>
    {/* Create a tool */}
    </Route>
    <Route path="/rapportgeschiedenis">
      <HistoryPage/>
      {/* rapporthistory */}
    </Route>
    <Route path="/informatiepagina">
      <Infop/>
      {/* questionpage */}
    </Route>
    <Route path="/render">
      <Renderpage/>
      {/* qpage */}
    </Route>
    {/* <Route path="/JMeter">
      <JMeterpage/>
      {/* RenderSeleniumpage */}
    {/* </Route> */} 
    <Route path="/Selenium">
      <RenderSeleniumpage/>
      {/* renderSeleniumpage */}
    </Route>
    <Route path="/JMeterScript">
      <JMeterScriptpage/>
      {/* renderJMeterpage */}
    </Route>
    <Route path="/RunnerScriptpage">
      <RunnerScriptpage/>
    </Route>
  </Router>
)
}

export default App;

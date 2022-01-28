import React from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import QuestionPage from './components/QuestionPage';
import HistoryPage from './components/HistoryPage';
import InfoPage from './components/InfoPage';
import HomePage from "./components/HomePage";
import CreateTool from "./components/UploadTool";

import RunnerScriptpage from './components/RunnerScriptPage';
import Loginpage from "./components/LoginPage";


// defines the routes
function App() {

return (
  <Router>
    <Navbar/>
    <Route path="/" exact>
      <Loginpage/>
      {/* home */}
    </Route>
    <Route path="/home" exact>
      <HomePage/>
      {/* home */}
    </Route>
    <Route path="/login">
      <Loginpage/>
      {/* Uitloggen */}
    </Route>
    <Route path="/vragenlijst">
      <QuestionPage/>
      {/* questionpage */}
    </Route>
    <Route path= "/testtoolToevoegen">
      <CreateTool/>
    {/* Create a tool */}
    </Route>
    <Route path="/rapportGeschiedenis">
      <HistoryPage/>
      {/* rapporthistory */}
    </Route>
    <Route path="/informatie">
      <InfoPage/>
      {/* questionpage */}
    </Route>
    <Route path="/uitvoerenScript">
      <RunnerScriptpage/>
    </Route>
    <Route path="/single">
      <Loginpage/>
    </Route>
  </Router>
)
}

export default App;

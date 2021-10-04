import React from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import QuestionPage from './components/Questionpage';
import HistoryPage from './components/Historypage';
import Infop from './components/Infop';
import Home from "./components/Home";
import CreateTool from "./components/UploadTool";

// defines the routes
function App() {

return (
  <Router>
    <Navbar/>
    <Route path="/home" exact>
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
  </Router>
)
}

export default App;

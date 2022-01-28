import React, { useState, useEffect } from "react";
import axios from "axios";

// Renders the questionpage. The function hold nothing, when user types something then it fills in
function QuestionPage() {
  const [tools, setTools] = useState([]);
  const [functioneel, setfunctioneel] = useState(false);
  const [performance, setperformance] = useState(false);
  const [security, setsecurity] = useState(false);
  const [option, setOption] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/read").then((response) => {
      setTools(response.data);
    });
  }, []);

  function handleChange2(event) {
    setOption(event.target.value);
    if (event.target.value === "Ja") {
      if (
        (functioneel === true) &
        (performance === false) &
        (security === false)
      ) {
        const getIdFunc = document.getElementById("IdFunc");
        const getIdSec = document.getElementById("Idsec");
        var ChangeText = "<p></p>";
        getIdFunc.innerHTML = ChangeText;
        getIdSec.innerHTML = ChangeText;
        const filterArray = tools.filter((tool) => tool.option === "Ja");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Ja") &
            (tool.functioneel === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter func met ja kosten");
      } else if (
        (functioneel === false) &
        (performance === true) &
        (security === false)
      ) {
        const getIdperf = document.getElementById("Idperf");
        const getIdsec = document.getElementById("Idsec");
        var text99 = "<p></p>";
        getIdperf.innerHTML = text99;
        getIdsec.innerHTML = text99;
        const filterArray = tools.filter((tool) => tool.option === "Ja");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Ja") &
            (tool.performance === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter perf met ja kosten");
      } else if (
        (functioneel === false) &
        (performance === false) &
        (security === true)
      ) {
        const getIdFunc = document.getElementById("IdFunc");
        const getIdperf = document.getElementById("Idperf");
        const getIdSec = document.getElementById("Idsec");
        var ChangeNewText = "<p></p>";
        getIdFunc.innerHTML = ChangeNewText;
        getIdperf.innerHTML = ChangeNewText;
        getIdSec.innerHTML = ChangeNewText;
        const filterArray = tools.filter((tool) => tool.option === "Ja");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Ja") &
            (tool.security === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter sec met ja kosten");
      } else if (
        (functioneel === false) &
        (performance === true) &
        (security === true)
      ) {
        const GetIdFunc = document.getElementById("IdFunc");
        const GetIdPerf = document.getElementById("Idperf");
        const GetIdSec = document.getElementById("Idsec");
        var NewText = "<p></p>";
        GetIdFunc.innerHTML = NewText;
        GetIdPerf.innerHTML = NewText;
        GetIdSec.innerHTML = NewText;
        const filterArray = tools.filter((tool) => tool.option === "Ja");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Ja") &
            (tool.security === "true") &
            (tool.performance === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter sec  en perf met ja kosten");
      } else if (
        (functioneel === true) &
        (performance === true) &
        (security === false)
      ) {
        const myDiv = document.getElementById("IdFunc");
        const myDiv2 = document.getElementById("Idperf");
        const myDiv3 = document.getElementById("Idsec");
        var text66 = "<p></p>";
        myDiv.innerHTML = text66;
        myDiv2.innerHTML = text66;
        myDiv3.innerHTML = text66;
        const filterArray = tools.filter((tool) => tool.option === "Ja");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Ja") &
            (tool.functioneel === "true") &
            (tool.performance === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter func en perf met ja kosten");
      } else if (
        (functioneel === true) &
        (performance === false) &
        (security === true)
      ) {
        const myDiv = document.getElementById("IdFunc");
        const myDiv2 = document.getElementById("Idperf");
        const myDiv3 = document.getElementById("Idsec");
        var text55 = "<p></p>";
        myDiv.innerHTML = text55;
        myDiv2.innerHTML = text55;
        myDiv3.innerHTML = text55;
        const filterArray = tools.filter((tool) => tool.option === "Ja");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Ja") &
            (tool.functioneel === "true") &
            (tool.security === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter func en sec met ja kosten");
      } else if (
        (functioneel === true) &
        (performance === true) &
        (security === true)
      ) {
        const myDiv = document.getElementById("IdFunc");
        const myDiv2 = document.getElementById("Idperf");
        const myDiv3 = document.getElementById("Idsec");
        var text44 = "<p></p>";
        myDiv.innerHTML = text44;
        myDiv2.innerHTML = text44;
        myDiv3.innerHTML = text44;
        const filterArray = tools.filter((tool) => tool.option === "Ja");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Ja") &
            (tool.performance === "true") &
            (tool.functioneel === "true") &
            (tool.security === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter func en sec met ja kosten");
      } else {
        const myDiv = document.getElementById("myId5");
        const myDiv2 = document.getElementById("IdFunc");
        const myDiv3 = document.getElementById("Idsec");
        const myDiv4 = document.getElementById("Idperf");
        var text33 = "<p></p>";
        myDiv.innerHTML = text33;
        myDiv2.innerHTML = text33;
        myDiv3.innerHTML = text33;
        myDiv4.innerHTML = text33;
        console.log("alles zou moeten zijn verwijdert");
        var text2 = "<p></p>";
        myDiv.innerHTML = text2;

        const filterArray = tools.filter((tool) => tool.option === "Ja");
        addList5(filterArray, list5);
        console.log("hoihoi2");
      }
    } else if (event.target.value === "Nee") {
      if (
        (functioneel === true) &
        (performance === false) &
        (security === false)
      ) {
        const myDiv = document.getElementById("IdFunc");
        const myDiv2 = document.getElementById("Idsec");
        const myDiv3 = document.getElementById("Idperf");
        var text22 = "<p></p>";
        myDiv.innerHTML = text22;
        myDiv2.innerHTML = text22;
        myDiv3.innerHTML = text22;
        const filterArray = tools.filter((tool) => tool.option === "Nee");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Nee") &
            (tool.functioneel === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter func met nee kosten");
      } else if (
        (functioneel === false) &
        (performance === true) &
        (security === false)
      ) {
        const myDiv = document.getElementById("Idperf");
        const myDiv2 = document.getElementById("Idsec");
        var text11 = "<p></p>";
        myDiv.innerHTML = text11;
        myDiv2.innerHTML = text11;
        const filterArray = tools.filter((tool) => tool.option === "Nee");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Nee") &
            (tool.performance === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter perf met nee kosten");
      } else if (
        (functioneel === false) &
        (performance === false) &
        (security === true)
      ) {
        const myDiv = document.getElementById("Idperf");
        const myDiv2 = document.getElementById("Idsec");
        var texts = "<p></p>";
        myDiv.innerHTML = texts;
        myDiv2.innerHTML = texts;
        const filterArray = tools.filter((tool) => tool.option === "Nee");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Nee") &
            (tool.security === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter sec met nee kosten");
      } else if (
        (functioneel === true) &
        (performance === false) &
        (security === true)
      ) {
        const myDiv = document.getElementById("Idperf");
        const myDiv2 = document.getElementById("Idsec");
        var texte = "<p></p>";
        myDiv.innerHTML = texte;
        myDiv2.innerHTML = texte;
        const filterArray = tools.filter((tool) => tool.option === "Nee");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Nee") &
            (tool.functioneel === "true") &
            (tool.security === "true") &
            (tool.title !== filterArray.title)
        );
        if (filterArray2.title !== "") {
          const myDiv4 = document.getElementById("IdFunc");
          const myDiv3 = document.getElementById("Idsec");
          var text91 = "<p></p>";
          var text90 = "<p>Geen tool gevonden</p>";
          myDiv3.innerHTML = text91;
          myDiv4.innerHTML = text90;
        }
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter func en sec met nee kosten");
      } else if (
        (functioneel === true) &
        (performance === true) &
        (security === false)
      ) {
        const myDiv = document.getElementById("Idperf");
        const myDiv2 = document.getElementById("Idsec");
        var textr = "<p></p>";
        myDiv.innerHTML = textr;
        myDiv2.innerHTML = textr;
        const filterArray = tools.filter((tool) => tool.option === "Nee");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Nee") &
            (tool.functioneel === "true") &
            (tool.performance === "true") &
            (tool.title !== filterArray.title)
        );
        if (filterArray2.title !== "") {
          const myDiv4 = document.getElementById("IdFunc");
          const myDiv3 = document.getElementById("Idsec");
          var text911 = "<p></p>";
          var text900 = "<p>Geen tool gevonden</p>";
          myDiv3.innerHTML = text911;
          myDiv4.innerHTML = text900;
        }
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter func en perf met nee kosten");
      } else if (
        (functioneel === false) &
        (performance === true) &
        (security === true)
      ) {
        const myDiv = document.getElementById("Idperf");
        const myDiv2 = document.getElementById("Idsec");
        var textm = "<p></p>";
        myDiv.innerHTML = textm;
        myDiv2.innerHTML = textm;
        const filterArray = tools.filter((tool) => tool.option === "Nee");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Nee") &
            (tool.performance === "true") &
            (tool.security === "true") &
            (tool.title !== filterArray.title)
        );
        if (filterArray2.title !== "") {
          const myDiv4 = document.getElementById("IdFunc");
          const myDiv3 = document.getElementById("Idsec");
          var text915 = "<p></p>";
          var text905 = "<p>Geen tool gevonden</p>";
          myDiv3.innerHTML = text915;
          myDiv4.innerHTML = text905;
        }
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter perf en sec met nee kosten");
      } else if (
        (functioneel === true) &
        (performance === true) &
        (security === true)
      ) {
        const myDiv = document.getElementById("IdFunc");
        const myDiv2 = document.getElementById("Idperf");
        const myDiv3 = document.getElementById("Idsec");
        var text67 = "<p></p>";
        myDiv.innerHTML = text67;
        myDiv2.innerHTML = text67;
        myDiv3.innerHTML = text67;
        const filterArray = tools.filter((tool) => tool.option === "Nee");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.option === "Nee") &
            (tool.performance === "true") &
            (tool.functioneel === "true") &
            (tool.security === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter func en sec met ja kosten");
      } else {
        const myDiv = document.getElementById("myId5");
        console.log("shoild removed");
        var text = "<p></p>";
        myDiv.innerHTML = text;

        const filterArray = tools.filter((tool) => tool.option === "Nee");
        addList5(filterArray, list5);

        console.log("dagdag2");
      }
    }
  }

  /////////////////////////////////////////////////////////////// filter functioneel ///////////////////////////////////////////////////

  function filterFunc(e) {
    if (e === true) {
      if ((performance === true) & (security === false)) {
        const myDiv = document.getElementById("Idperf");
        var text6p = "<p></p>";
        myDiv.innerHTML = text6p;
        const filterArray = tools.filter((tool) => tool.functioneel === "true");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.performance === "true") &
            (tool.functioneel === "true") &
            (tool.title !== filterArray.title)
        );

        addList3(filterArray2, listFunc);
        console.log(filterArray2, "filter functioneel en performance");
      } else if ((security === true) & (performance === false)) {
        const myDiv2 = document.getElementById("Idsec");
        var text7 = "<p></p>";
        myDiv2.innerHTML = text7;
        const filterArray = tools.filter((tool) => tool.functioneel === "true");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.functioneel === "true") &
            (tool.security === "true") &
            (tool.title !== filterArray.title)
        );
        console.log("hello you went here");
        addList3(filterArray2, listsec);
      } else if ((security === true) & (performance === true)) {
        const GetidSec = document.getElementById("Idsec");
        const GetidFunc = document.getElementById("IdFunc");
        const GetidPerf = document.getElementById("Idperf");
        console.log("remove lijsten func en perf");
        var NewLineText = "<p></p>";
        GetidSec.innerHTML = NewLineText;
        GetidFunc.innerHTML = NewLineText;
        GetidPerf.innerHTML = NewLineText;
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.performance === "true") &
            (tool.security === "true") &
            (tool.functioneel === "true")
        );

        addList3(filterArray2, listsec);
        console.log(
          filterArray2,
          "filter functioneel en security en performance"
        );
        console.log("hello world");
      } else {
        const filterArray = tools.filter((tool) => tool.functioneel === "true");
        addList3(filterArray, listFunc);
        console.log(e + "filter functioneel");
      }
    } else if (e === false) {
      if ((performance === true) & (security === true)) {
        const myDiv = document.getElementById("Idperf");
        const myDiv2 = document.getElementById("Idsec");
        var text14 = "<p></p>";
        myDiv.innerHTML = text14;
        myDiv2.innerHTML = text14;
        const filterArray = tools.filter(
          (tool) => (tool.performance === "true") & (tool.security === "true")
        );
        console.log(
          e + "filter performance en security, maar functioneel is false"
        );

        addList3(filterArray, listPerf);
      } else {
        const myDiv = document.getElementById("IdFunc");
        console.log("remove everything (functioneel)");
        var text = "<p></p>";
        myDiv.innerHTML = text;
      }
    }
  }

  /////////////////////////////////////////////////////////////// filter performance ///////////////////////////////////////////////////

  function filterPerform(e) {
    if (e === true) {
      if (functioneel === true) {
        const myDiv = document.getElementById("IdFunc");
        const myDiv2 = document.getElementById("Idsec");
        var text6 = "<p></p>";
        myDiv.innerHTML = text6;
        myDiv2.innerHTML = text6;
        const filterArray = tools.filter((tool) => tool.performance === "true");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.performance === "true") &
            (tool.functioneel === "true") &
            (tool.title !== filterArray.title)
        );
        addList3(filterArray2, listPerf);
        console.log(filterArray2, "filter func and perf");
      } else if (security === true) {
        const myDiv = document.getElementById("Idsec");
        console.log("should remove security items");
        var text7 = "<p></p>";
        myDiv.innerHTML = text7;
        const filterArray = tools.filter((tool) => tool.performance === "true");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.performance === "true") &
            (tool.security === "true") &
            (tool.title !== filterArray.title)
        );

        addList3(filterArray2, listPerf);
        console.log(filterArray2);
      } else if ((security === true) & (functioneel === true)) {
        console.log("hello world2");
      } else {
        const myDiv = document.getElementById("Idperf");
        var text3 = "<p></p>";
        myDiv.innerHTML = text3;
        const filterArray = tools.filter((tool) => tool.performance === "true");
        addList3(filterArray, listPerf);
        console.log(filterArray, "Filter performance");
      }
    } else if (e === false) {
      if ((functioneel === true) & (security === true)) {
        const GEtIdPerf = document.getElementById("Idperf");
        const GEtIdSec = document.getElementById("Idsec");
        const GEtIdFunc = document.getElementById("IdFunc");
        console.log("functioneel en security is true, maar perf is false");
        var NewcodeText = "<p></p>";
        var NewtextCode = "<p></p>";
        GEtIdPerf.innerHTML = NewcodeText;
        GEtIdSec.innerHTML = NewtextCode;
        GEtIdFunc.innerHTML = NewtextCode;
        const filterArray = tools.filter(
          (tool) => (tool.functioneel === "true") & (tool.security === "true")
        );
        addList3(filterArray, listFunc);
        console.log("perform is false, sec en func zijn true");
      } else {
        const GETidperf = document.getElementById("Idperf");
        const GETidsec = document.getElementById("Idsec");
        const GETidfunc = document.getElementById("IdFunc");
        var NewText = "<p></p>";
        var NeWTxt = "<p></p>";
        GETidperf.innerHTML = NewText;
        GETidsec.innerHTML = NeWTxt;
        GETidfunc.innerHTML = NeWTxt;
        console.log("remove everything (performance)");
        var Ntext = "<p></p>";
        GETidperf.innerHTML = Ntext;
      }
    }
  }
  ////

  function filterSecurity(e) {
    if (e === true) {
      if ((functioneel === true) & (performance === false)) {
        const myDiv = document.getElementById("IdFunc");
        var text6 = "<p></p>";
        myDiv.innerHTML = text6;
        const filterArray = tools.filter((tool) => tool.security === "true");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.security === "true") &
            (tool.functioneel === "true") &
            (tool.title !== filterArray.title)
        );
        addListSec(filterArray2, listFunc);
        console.log(filterArray2, "filter func and sec");
        console.log("dagaga youre here huh");
      } else if ((performance === true) & (functioneel === false)) {
        const myDiv = document.getElementById("Idperf");
        var text11 = "<p></p>";
        myDiv.innerHTML = text11;
        const filterArray = tools.filter((tool) => tool.security === "true");
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.security === "true") &
            (tool.performance === "true") &
            (tool.title !== filterArray.title)
        );
        addListSec(filterArray2, listsec);
        console.log(filterArray2, "filter sec en perform");
      } else if ((performance === true) & (functioneel === true)) {
        const myDiv = document.getElementById("Idperf");
        const myDiv2 = document.getElementById("IdFunc");
        const myDiv3 = document.getElementById("Idsec");
        var text = "<p></p>";
        myDiv2.innerHTML = text;
        myDiv.innerHTML = text;
        myDiv3.innerHTML = text;
        const filterArray2 = tools.filter(
          (tool) =>
            (tool.security === "true") &
            (tool.performance === "true") &
            (tool.functioneel === "true")
        );
        addListSec(filterArray2, listsec);
        console.log("ben je misschien tot hier gekomen?");
      } else {
        const filterArray = tools.filter((tool) => tool.security === "true");
        addListSec(filterArray, listsec);
        console.log(filterArray, "Filter security");
      }
    } else if (e === false) {
      if ((functioneel === true) & (performance === true)) {
        const myDiv = document.getElementById("Idsec");
        const myDiv2 = document.getElementById("Idperf");
        console.log("functioneel en security is true, maar perf is false");
        var text12 = "<p></p>";
        myDiv.innerHTML = text12;
        myDiv2.innerHTML = text12;
        const filterArray = tools.filter(
          (tool) =>
            (tool.functioneel === "true") & (tool.performance === "true")
        );
        addListSec(filterArray, listsec);
      } else {
        const GETIDSEC = document.getElementById("Idsec");
        const GETIDFUNC = document.getElementById("IdFunc");
        var NTXT = "<p></p>";
        var newTxt = "<p></p>";
        GETIDSEC.innerHTML = NTXT;
        GETIDFUNC.innerHTML = newTxt;
        console.log("remove everything (security)");
      }
    }
  }

  /////////////////////////////////////////////////////////////// Create list  ///////////////////////////////////////////////////

  // List functioneel
  const listFunc = document.querySelector(".listFunc");

  //List security
  const listsec = document.querySelector(".listSec");

  const addListSec = (array, element) => {
    array.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.title;
      element.appendChild(li);
    });
  };

  // List performance
  const listPerf = document.querySelector(".listPerf");

  const addList3 = (array, element) => {
    array.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.title;
      element.appendChild(li);
    });
  };

  const list5 = document.querySelector(".list5");
  const addList5 = (array, element) => {
    array.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.title;
      element.appendChild(li);
    });
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [HandleRenderScript, setHandleRenderScript] = useState(false);
  localStorage.setItem("renderScript", HandleRenderScript);
  const [HandleJMRenderScript, setHandleJMRenderScript] = useState(false);
  localStorage.setItem("renderJMScript", HandleJMRenderScript);

  const [seleniumTrue, setSeleniumTrue] = useState(false);
  console.log("selenium:" + seleniumTrue);
  localStorage.setItem("RunSeleniumsScript", seleniumTrue);

  // script selenium
  const [inputSelenium, setinputSelenium] = useState({
    title: "",
    chrome: "",
    url: "",
    search: "",
    savefile: "",
    idkey: "",
    btnid:'',
    SearchId:"",
    TextSearch:"",
    BtnText:'',
  });
  ///////////////////////////////////////////cypresss
  // Cypress state of buttons, different scripts
  const [stateCypressBasic, setStateCyppressBasic] = useState(false);
  const [stateCypress, setCypress] = useState(false);
  const [stateCypressA, setCypressA] = useState(false);
  const [cypressTrue, setCypressTrue] = useState(false);

  const [CypBasic, setCypBasic] = useState();
  const [CypAssertion, setCypAssertion] = useState();
  const [CypAll, setCypAll] = useState();
  // local storage to get to next page
  localStorage.setItem("CypBasic", CypBasic);
  localStorage.setItem("CypAssertion", CypAssertion);
  localStorage.setItem("CypAll", CypAll);

  console.log("cypres is :" + cypressTrue);
  localStorage.setItem("RunCypressScript", cypressTrue);

  const [assertionCypressTrue, setAssertionCypressTrue] = useState(false);
  localStorage.setItem("CypressAssertion", assertionCypressTrue);

  const [CypressOneClick, setCypressOneClick] = useState(false);
  localStorage.setItem("CypressBasic", CypressOneClick);

  const [CypressAlls, setCypressAlls] = useState(false);
  localStorage.setItem("CypressAll", CypressAlls);

  const [inputCypress, setinputCypress] = useState({
    title: "",
    commandName: "",
    url: "",
    elementName: "",
    action: "",
    includeUrl: "",
    cssIdInput: "",
    userInput: "",
    expectedInput: "",
  });
  //Handle changes from the user input cypress
  function handleChangeCypress(event) {
    const { name, value } = event.target;

    setinputCypress((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(inputCypress);
  }

  function saveCypress(event) {
    setCypressOneClick(true);
    setCypBasic(
      'describe("' +
        inputCypress.title +
        '", () => {' +
        "\n" +
        'it("' +
        inputCypress.commandName +
        '", () => {' +
        "\n" +
        'cy.visit("' +
        inputCypress.url +
        '")' +
        "\n" +
        'cy.contains("' +
        inputCypress.elementName +
        '").click()' +
        "\n" +
        "   })" +
        "\n" +
        "})"
    );

    console.log(CypBasic);
  }

  function saveCypressAssertion(event) {
    setAssertionCypressTrue(true);
    setCypAssertion(
      'describe("' +
        inputCypress.title +
        '", () => {' +
        "\n" +
        'it("' +
        inputCypress.commandName +
        '", () => {' +
        "\n" +
        'cy.visit("' +
        inputCypress.url +
        '")' +
        "\n" +
        'cy.contains("' +
        inputCypress.elementName +
        '").click()' +
        "\n" +
        'cy.url().should("' +
        inputCypress.action +
        '", "' +
        inputCypress.includeUrl +
        '")' +
        "\n" +
        "})" +
        "\n" +
        "})"
    );

    console.log("cypress Assertion:" + CypAssertion);
  }

  function saveCypressAll(event) {
    setCypressAlls(true);
    setCypAll(
      'describe("' +
        inputCypress.title +
        '", () => {' +
        "\n" +
        'it("' +
        inputCypress.commandName +
        '", () => {' +
        "\n" +
        'cy.visit("' +
        inputCypress.url +
        '")' +
        "\n" +
        "cy.pause()" +
        "\n" +
        'cy.contains("' +
        inputCypress.elementName +
        '").click()' +
        "\n" +
        // Should be on a new URL which includes '/commands/actions'
        'cy.url().should("' +
        inputCypress.action +
        '", "' +
        inputCypress.includeUrl +
        '")' +
        "\n" +
        // Get an input, type into it and verify that the value has been updated
        'cy.get("' +
        inputCypress.cssIdInput +
        '")' +
        "\n" +
        '.type("' +
        inputCypress.userInput +
        '")' +
        "\n" +
        ".should(" +
        "have.value" +
        ', "' +
        inputCypress.expectedInput +
        '")' +
        "\n" +
        "})" +
        "\n" +
        "})"
    );
  }
  ///////////////////////////////////////////////////////cyprus-end
  /////////////////////webdriver

  const [inputWebdriver, setInputWebdriver] = useState({
    description: "",
    descriptionTest:"",
    url:"",
    pageTitle:"",
    checkSearch:"",
    checkSearchBtn:"",
    checkSearchTxt:"",
    idBtn:"",
    titleBtn:"",

  });
  

  function handleChangeWebdriverIO(event) {
    const { name, value } = event.target;

    setInputWebdriver((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(inputWebdriver);
  }
const [WebDriverTrue,setWebDriverTrue] = useState(false)
const [optionDifTool, setOptionDifTool] = useState();
const [checkDifToolURL, setCheckDifToolURL] = useState(false);
const [checkToolBtn,setCheckToolBtn] = useState(false);
const [checkToolTitle,setCheckToolTitle] = useState(false)
const [scriptWeb, setScriptWeb] = useState();
const [checkSearch, setCheckSearch] = useState(false);

localStorage.setItem('scriptWeb', scriptWeb)

function filterCheckToolBtn(e) {
    if (e === true) {
    
    }
}
/////////////////////////////////////////////////////////////// hier is het voorbeeld


function handleDifferentTools(event){
    setOptionDifTool(event.target.value)
    if(!checkToolTitle && !checkToolTitle && !checkToolBtn){
        setScriptWeb('describe("'+inputWebdriver.description+'", () =>{'+'\n'+
        'it("'+inputWebdriver.descriptionTest+'", ()=>{'+'\n'+
        'browser.url("'+inputWebdriver.url+'")'+'\n'+
        '})'+'\n'+'})')
    }
        // only title compare on website 
        if( checkToolTitle && !checkSearch && !checkToolBtn){
            setScriptWeb('describe("'+inputWebdriver.description+'", () =>{'+'\n'+
            'it("'+inputWebdriver.descriptionTest+'", ()=>{'+'\n'+
            'browser.url("'+inputWebdriver.url+'")'+'\n'+
            'expect(browser).toHaveTitle("'+inputWebdriver.pageTitle+'")'
            +'\n'+
            '})'
            +'\n'+'})') 
        }
        if(checkToolBtn &&!checkToolTitle && !checkSearch){
            setScriptWeb('describe("'+inputWebdriver.description+'", () =>{'+'\n'+
            'it("'+inputWebdriver.descriptionTest+'", ()=>{'+'\n'+
            'browser.url("'+inputWebdriver.url+'")'+'\n'+
            'const findBtn = $("#'+inputWebdriver.idBtn+'");'+'\n'+
            'findBtn.click()'+'\n'+
            'expect(browser).toHaveValue("'+inputWebdriver.titleBtn+'")'
            +'\n'+
            '})'
            +'\n'+'})') 
        }
        // only search test on website
        if( checkSearch && !checkToolTitle && !checkToolBtn){
            setScriptWeb('describe("'+inputWebdriver.description+'", () =>{'+'\n'+
            'it("'+inputWebdriver.descriptionTest+'", ()=>{'+'\n'+
            'browser.url("'+inputWebdriver.url+'")'+'\n'+
            'const searchBar = $("#'+inputWebdriver.checkSearch+'");'+'\n'+
            'const searchBarBtn = $("#'+inputWebdriver.checkSearchBtn+'");'
            +'\n'+
            'searchBar.addValue("'+inputWebdriver.checkSearchTxt+'");' +'\n'+
            'searchBarBtn.click();'+'\n'+

            'except(searchBar).toHaveValue("'+inputWebdriver.checkSearchTxt+'")'+'\n'+
            '})'
            +'\n'+'})') 
        }
        // scearch and title compare on website
        if(checkSearch && checkToolTitle &&!checkToolBtn){
            setScriptWeb('describe("'+inputWebdriver.description+'", () =>{'+'\n'+
            'it("'+inputWebdriver.descriptionTest+'", ()=>{'+'\n'+
            'browser.url("'+inputWebdriver.url+'")'+'\n'+
            'const searchBar = $("#'+inputWebdriver.checkSearch+'");'+'\n'+
            'const searchBarBtn = $("#'+inputWebdriver.checkSearchBtn+'");'
            +'\n'+
            'searchBar.addValue("'+inputWebdriver.checkSearchTxt+'");' +'\n'+
            'searchBarBtn.click();'+'\n'+

            'except(searchBar).toHaveValue("'+inputWebdriver.checkSearchTxt+'")'+'\n'+
            'expect(browser).toHaveTitle("'+inputWebdriver.pageTitle+'")'
            +'\n'+
            '})'
            +'\n'+'})') 
        }
        if(checkSearch && !checkToolTitle && checkToolBtn){
            setScriptWeb('describe("'+inputWebdriver.description+'", () =>{'+'\n'+
            'it("'+inputWebdriver.descriptionTest+'", ()=>{'+'\n'+
            'browser.url("'+inputWebdriver.url+'")'+'\n'+
            'const searchBar = $("#'+inputWebdriver.checkSearch+'");'+'\n'+
            'const searchBarBtn = $("#'+inputWebdriver.checkSearchBtn+'");'
            +'\n'+
            'searchBar.addValue("'+inputWebdriver.checkSearchTxt+'");' +'\n'+
            'searchBarBtn.click();'+'\n'+

            'const findBtn = $("#'+inputWebdriver.idBtn+'");'+'\n'+
            'findBtn.click()'+'\n'+
            'expect(browser).toHaveValue("'+inputWebdriver.titleBtn+'")'
            +'\n'+
            '})'
            +'\n'+'})') 
        }

        if(!checkSearch && checkToolTitle &&checkToolBtn){
            setScriptWeb('describe("'+inputWebdriver.description+'", () =>{'+'\n'+
            'it("'+inputWebdriver.descriptionTest+'", ()=>{'+'\n'+
            'browser.url("'+inputWebdriver.url+'")'+'\n'+
            'expect(browser).toHaveTitle("'+inputWebdriver.pageTitle+'")' +'\n'+
            
            'const findBtn = $("#'+inputWebdriver.idBtn+'");'+'\n'+
            'findBtn.click()'+'\n'+
            'expect(browser).toHaveValue("'+inputWebdriver.titleBtn+'")' +'\n'+
            '})'
            +'\n'+'})') 
        }

        if(checkSearch && checkToolTitle &&checkToolBtn){
            setScriptWeb('describe("'+inputWebdriver.description+'", () =>{'+'\n'+
            'it("'+inputWebdriver.descriptionTest+'", ()=>{'+'\n'+
            'browser.url("'+inputWebdriver.url+'")'+'\n'+
            'expect(browser).toHaveTitle("'+inputWebdriver.pageTitle+'")' +'\n'+
            'const searchBar = $("#'+inputWebdriver.checkSearch+'");'+'\n'+
            'const searchBarBtn = $("#'+inputWebdriver.checkSearchBtn+'");'
            +'\n'+
            'searchBar.addValue("'+inputWebdriver.checkSearchTxt+'");' +'\n'+
            'searchBarBtn.click();'+'\n'+

            'const findBtn = $("#'+inputWebdriver.idBtn+'");'+'\n'+
            'findBtn.click()'+'\n'+
            'expect(browser).toHaveValue("'+inputWebdriver.titleBtn+'")'
            +'\n'+
            '})'
            +'\n'+'})') 
        }
        
    
    console.log("this must be a script:" +scriptWeb);
    
}
  ////////////////////end webdriver
  
   

  /////////////////////////////////////Gatling
  // value of script
  const [GatlingBasic, setGatlingBasic] = useState();
  const [GatlinM, setGatlinM] = useState();
  const [GatlinG, setGatlinG] = useState();
  // script is true for second page
  const [GatlingScript1, setGatlingScript1] = useState(false);
  const [GatlingScript2, setGatlingScript2] = useState(false);
  const [GatlingScript3, setGatlingScript3] = useState(false);

  localStorage.setItem("GatlingScript1", GatlingScript1);
  localStorage.setItem("GatlingScript2", GatlingScript2);
  localStorage.setItem("GatlingScript3", GatlingScript3);

  // gatling is true, run
  const [GatlingTrue, setGatlingTrue] = useState(false);

  // buttons choose script
  const [checkOptionGet, setCheckOptionGet] = useState();
  const [checkHTTP, setCheckHTTP] = useState();
  const [checkPause, setCheckPause] = useState();
  const [optionSenario, setOptionSenario] = useState("");
  const [gatlingScriptB, setGatlingScriptB] = useState(false);
  const [gatlingM, setGatlingM] = useState(false);
  const [gatlingG, setGatlingG] = useState(false);
  console.log("gatling buttons script:" + gatlingG, gatlingM, gatlingScriptB);

  const [inputGatling, setinputGatling] = useState({
    className: "",
    nameFunction: "",
    Scenarios:"",
    pageName: "",
    route: "",
    pauseOne: "",
    pauseTwo: "",
    pauseThree: "",
    nameFunction2: "",
    nameFunction3: "",
    route2: "",
    route3: "",
    scenarioName: "",
    scnNameFunction: "",
    baseUrl: "",
    httpfuncName: "",
    rampUser: "",
    rampDuration: "",
  });

  localStorage.setItem("GatlingBasic", GatlingBasic);
  localStorage.setItem("GatlingMe", GatlinM);
  localStorage.setItem("GatlingGe", GatlinG);

  //Handle changes from the user input cypress
  function handleChangeGatling(event) {
    const { name, value } = event.target;

    setinputGatling((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(inputGatling);
  }

  function saveGatlingScriptB(event) {
    setGatlingScript1(true);
    setGatlingBasic(
      "import io.gatling.javaapi.core.*;" +
        "\n" +
        "import io.gatling.javaapi.http.*;" +
        "\n" +
        "import static io.gatling.javaapi.core.CoreDsl.*;" +
        "\n" +
        "import static io.gatling.javaapi.http.HttpDsl.*;" +
        "\n" +
        "class" +
        " " +
        inputGatling.className +
        " " +
        "extends Simulation {" +
        "\n" +
        "val" +
        inputGatling.httpfuncName +
        "= http" +
        "\n" +
        ".baseUrl(" +
        inputGatling.baseUrl +
        ")" +
        "\n" +
        '.acceptHeader("text/html, application/xhtml+xml, application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3")' +
        "\n" +
        '.acceptEncodingHeader("gzip, deflate")' +
        "\n" +
        '.acceptLanguageHeader("en-GB,en-US;q=0.9,en;q=0.8")' +
        "\n" +
        ".upgradeInsecureRequestsHeader(1)" +
        "\n" +
        ".userAgentHeader(Morzilla/5.0 (Macintosh; Intel Mac OS X 10_15_4)AppleWebKit/537.36(KHTML, like Gecko) Chrome/81.0.4044.138 safari/537.36)" +
        "\n" +
        //setUp(PetStoreSimulationBuyer.scn.inject(constantConcurrentUsers(2) during(2 minutes)),PetStoreSimulationVisitor.scn.inject(constantConcurrentUsers(10) during(2 minutes))).protocols(httpProtocol)
        'ScenarioBuilder users = scenario("Users")' +
        "\n" +
        ".exec(search);" +
        "\n" +
        "setUp(" +
        "\n" +
        "users.injectOpen(rampUsers(" +
        inputGatling.rampUser +
        ").during(" +
        inputGatling.rampDuration +
        "))" +
        "\n" +
        ").protocols(" +
        inputGatling.httpfuncName +
        ");" +
        "\n" +
        "ChainBuilder " +
        inputGatling.nameFunction +
        "=" +
        "\n" +
        'exec(http("' +
        inputGatling.pageName +
        '")' +
        "\n" +
        '.get("' +
        inputGatling.route +
        '"))' +
        "\n" +
        ".pause(" +
        inputGatling.pauseOne +
        ")" +
        "\n" +
        '.exec(http("' +
        inputGatling.nameFunction2 +
        '")' +
        "\n" +
        '.get("' +
        inputGatling.route2 +
        '"))' +
        "\n" +
        ".pause(" +
        inputGatling.pauseTwo +
        ")" +
        "\n" +
        '.exec(http("' +
        inputGatling.nameFunction3 +
        '")' +
        "\n" +
        '.get("' +
        inputGatling.route3 +
        '"))' +
        "\n" +
        ".pause(" +
        inputGatling.pauseThree +
        ");" +
        "\n" +
        "ScenarioBuilder " +
        inputGatling.scnNameFunction +
        ' = scenario("' +
        inputGatling.scenarioName +
        '")' +
        "\n" +
        ".exec(" +
        inputGatling.nameFunction +
        ");" +
        "\n" +
        "}"
    );
  }

  function saveGatlingScriptM() {
    setGatlingScript2(true);
    setGatlinM(
      "import io.gatling.javaapi.core.*;" +
        "\n" +
        "import io.gatling.javaapi.http.*;" +
        "\n" +
        "import static io.gatling.javaapi.core.CoreDsl.*;" +
        "\n" +
        "import static io.gatling.javaapi.http.HttpDsl.*;" +
        "\n" +
        "class " +
        inputGatling.className +
        " extends Simulation {" +
        "\n" +
        "}"
    );
  }

  function saveGatlingScriptG() {
    setGatlingScript3(true);
    setGatlinG(
      "import io.gatling.javaapi.core.*;" +
        "\n" +
        "import io.gatling.javaapi.http.*;" +
        "\n" +
        "import static io.gatling.javaapi.core.CoreDsl.*;" +
        "\n" +
        "import static io.gatling.javaapi.http.HttpDsl.*;" +
        "\n" +
        "class " +
        inputGatling.className +
        " extends Simulation {" +
        "\n" +
        "}"
    );
  }

  //////////////////////////////////////

  // Handle changes from the user input Selenium
  const [selenBasic, setselenBasic] = useState();
  localStorage.setItem("selenBasic", selenBasic);
  function handleChangeSelenium(event) {
    const { name, value } = event.target;

    setinputSelenium((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(inputSelenium);
  }

  const [checkSeleniumBtnId,setcheckSeleniumBtnId] = useState(false)
  const [checkSeleniumBtnSearch,setcheckSeleniumBtnSearch] = useState(false)
  const [checkSeleniumBtnText,setcheckSeleniumBtnText] = useState(false)

  function save(event) {
    setRenderSelenium(event.target.value);////////////////////////////////// hier is het script
    // Text for the basic script
    
    if(checkSeleniumBtnId && !checkSeleniumBtnSearch && !checkSeleniumBtnText){
      setselenBasic(
        'const {Builder, By, Key, util} = require("selenium-webdriver");' +"\n" +
        'require("' +inputSelenium.title + '");' +"\n" +
       "async function example(){" +"\n" +
       'let driver = await new Builder().forBrowser("' + inputSelenium.chrome +'").build();' + "\n" +
       'await driver.get("' +inputSelenium.url +'");' + "\n" +
        'await driver.findElement(By.id("'+inputSelenium.btnid+'")).click();'+ "\n" +
        
        'await driver.quit();'+ "\n" +
       ' }'+ "\n" +
        'example();'
      )}
      if(checkSeleniumBtnSearch && !checkSeleniumBtnId && !checkSeleniumBtnText){
        setselenBasic(
        'const {Builder, By, Key, util} = require("selenium-webdriver");' +"\n" +
        'require("' +inputSelenium.title + '");' +"\n" +
       "async function example(){" +"\n" +
       'let driver = await new Builder().forBrowser("' + inputSelenium.chrome +'").build();' + "\n" +
       'await driver.get("' +inputSelenium.url +'");' + "\n" +
        'await driver.findElement(By.id("'+inputSelenium.SearchId+'")).sendKeys("'+inputSelenium.TextSearch+'");'+ "\n" +
        'await driver.quit();'+ "\n" +
       ' }'+ "\n" +
        'example();'
        )
      }

      if(checkSeleniumBtnText && !checkSeleniumBtnSearch && !checkSeleniumBtnId){
        setselenBasic(
        'const {Builder, By, Key, util} = require("selenium-webdriver");' +"\n" +
        'require("' +inputSelenium.title + '");' +"\n" +
       "async function example(){" +"\n" +
       'let driver = await new Builder().forBrowser("' + inputSelenium.chrome +'").build();' + "\n" +
       'await driver.get("' +inputSelenium.url +'");' + "\n" +
       'let data = await driver.findElement(By.id("'+inputSelenium.BtnText+'")).getText();' +'\n'+
       'console.log("Result is:"+ data);'+ "\n" +
       'await driver.quit();'+ "\n" +
       
       ' }'+ "\n" +
        'example();'
        )
      }
      if(checkSeleniumBtnText && checkSeleniumBtnSearch && !checkSeleniumBtnId){
        setselenBasic(
        'const {Builder, By, Key, util} = require("selenium-webdriver");' +"\n" +
        'require("' +inputSelenium.title + '");' +"\n" +
       "async function example(){" +"\n" +
       'let driver = await new Builder().forBrowser("' + inputSelenium.chrome +'").build();' + "\n" +
       'await driver.get("' +inputSelenium.url +'");' + "\n" +
       'let data = await driver.findElement(By.id("'+inputSelenium.BtnText+'")).getText();' +'\n'+
       'await driver.findElement(By.id("'+inputSelenium.SearchId+'")).sendKeys("'+inputSelenium.TextSearch+'");'+ "\n" +
       'console.log("Result is:"+ data);'+ "\n" +
       'await driver.quit();'+ "\n" +
       
       ' }'+ "\n" +
        'example();'
        )
      }
      if(checkSeleniumBtnText && !checkSeleniumBtnSearch && checkSeleniumBtnId){
        setselenBasic(
        'const {Builder, By, Key, util} = require("selenium-webdriver");' +"\n" +
        'require("' +inputSelenium.title + '");' +"\n" +
       "async function example(){" +"\n" +
       'let driver = await new Builder().forBrowser("' + inputSelenium.chrome +'").build();' + "\n" +
       'await driver.get("' +inputSelenium.url +'");' + "\n" +
       'let data = await driver.findElement(By.id("'+inputSelenium.BtnText+'")).getText();' +'\n'+
       'await driver.findElement(By.id("'+inputSelenium.btnid+'")).click();'+ "\n" +
       'console.log("Result is:"+ data);'+ "\n" +
       'await driver.quit();'+ "\n" +
       
       ' }'+ "\n" +
        'example();'
        )
      }
      if(!checkSeleniumBtnText && checkSeleniumBtnSearch && checkSeleniumBtnId){
        setselenBasic(
        'const {Builder, By, Key, util} = require("selenium-webdriver");' +"\n" +
        'require("' +inputSelenium.title + '");' +"\n" +
       "async function example(){" +"\n" +
       'let driver = await new Builder().forBrowser("' + inputSelenium.chrome +'").build();' + "\n" +
       'await driver.get("' +inputSelenium.url +'");' + "\n" +
       'await driver.findElement(By.id("'+inputSelenium.SearchId+'")).sendKeys("'+inputSelenium.TextSearch+'");'+ "\n" +
       'let data = await driver.findElement(By.id("'+inputSelenium.BtnText+'")).getText();' +'\n'+
       'console.log("Result is:"+ data);' + "\n" +
       'await driver.quit();'+ "\n" +
       
       ' }'+ "\n" +
        'example();'
        )
      }
      if(checkSeleniumBtnText && checkSeleniumBtnSearch && checkSeleniumBtnId){
        setselenBasic(
        'const {Builder, By, Key, util} = require("selenium-webdriver");' +"\n" +
        'require("' +inputSelenium.title + '");' +"\n" +
       "async function example(){" +"\n" +
       'let driver = await new Builder().forBrowser("' + inputSelenium.chrome +'").build();' + "\n" +
       'await driver.get("' +inputSelenium.url +'");' + "\n" +
       'await driver.findElement(By.id("'+inputSelenium.btnid+'")).click();'+ "\n" +
       'let data = await driver.findElement(By.id("'+inputSelenium.BtnText+'")).getText();' +'\n'+
       'await driver.findElement(By.id("'+inputSelenium.SearchId+'")).sendKeys("'+inputSelenium.TextSearch+'");'+ "\n" +
       'console.log("Result is:"+ data);' + "\n" +
       'await driver.quit();'+ "\n" +
       
       ' }'+ "\n" +
        'example();'
        )
      }
      if(!checkSeleniumBtnText && !checkSeleniumBtnSearch && !checkSeleniumBtnId){
        setselenBasic(
        'const {Builder, By, Key, util} = require("selenium-webdriver");' +"\n" +
        'require("' +inputSelenium.title + '");' +"\n" +
       "async function example(){" +"\n" +
       'let driver = await new Builder().forBrowser("' + inputSelenium.chrome +'").build();' + "\n" +
       'await driver.get("' +inputSelenium.url +'");' + "\n" +
       'await driver.quit();'+ "\n" +
       
       ' }'+ "\n" +
        'example();'
        )
      
  }

    // stores the item in an object to get it on the next page
    localStorage.setItem("Url", inputSelenium.url);
    console.log("works with code:" + selenBasic);
  }

  // JMeter script
  const [jmeterTrue, setJmeterTrue] = useState(false);
  console.log(jmeterTrue);
  localStorage.setItem("RunJMeterScript", jmeterTrue);

  // the states JMeter
  const [inputJMeter, setinputJMeter] = useState({
    title: "",
    threathG: "",
    url: "",
    search: "",
    savefile: "",
    aantalUsers: "",
    rampup: "",
  });
  const [ChooseScript, setChooseScript] = useState();
  const [threathG, setThreathG] = useState();

  const [isToggled, setIsToggled] = useState(false);
  const [isToggledHttp, setIsToggledHttp] = useState(false);
  const [isToogledAll, setisToogledAll] = useState(false);
  const [HTTPqest, setHTTPqest] = useState();
  const [Allqest, setAllqest] = useState();
  const [Threaths, setThreaths] = useState();

  function handleChangeJM(event) {
    const { name, value } = event.target;

    setinputJMeter((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(inputJMeter);
  }

  // local storage to get to next page
  localStorage.setItem("ThreathsBasic", Threaths);
  localStorage.setItem("Httpqest", HTTPqest);
  localStorage.setItem("allquest", Allqest);

  // Function to get the script
  function handleThreathGroup(event) {
    setThreathG(event.target.value);
    if (event.target.value === "1") {
      setThreaths(
        '<?xml version="1.0" encoding="UTF-8"?>' +
          "\n" +
          '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">' +
          "\n" +
          "<hashTree>" +
          "\n" +
          '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="' +
          inputJMeter.title +
          '" enabled="true">' +
          "\n" +
          '<stringProp name="TestPlan.comments"></stringProp>' +
          "\n" +
          '<boolProp name="TestPlan.functional_mode">' +
          "false" +
          "</boolProp>" +
          "\n" +
          '<boolProp name="TestPlan.tearDown_on_shutdown">' +
          "true" +
          "</boolProp>" +
          "\n" +
          '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>' +
          "\n" +
          '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">' +
          "\n" +
          '<collectionProp name="Arguments.arguments"/>' +
          "\n" +
          "</elementProp>" +
          "\n" +
          '<stringProp name="TestPlan.user_define_classpath"></stringProp>' +
          "\n" +
          "</TestPlan>" +
          "\n" +
          "<hashTree/>" +
          "\n" +
          '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">' +
          "\n" +
          '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>' +
          "\n" +
          '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">' +
          "\n" +
          '<boolProp name="LoopController.continue_forever">false</boolProp>' +
          "\n" +
          '<stringProp name="LoopController.loops">1</stringProp>' +
          "\n" +
          "</elementProp>" +
          "\n" +
          '<stringProp name="ThreadGroup.num_threads">' +
          inputJMeter.aantalUsers +
          "</stringProp>" +
          "\n" +
          '<stringProp name="ThreadGroup.ramp_time">1</stringProp>' +
          "\n" +
          '<boolProp name="ThreadGroup.scheduler">false</boolProp>' +
          "\n" +
          '<stringProp name="ThreadGroup.duration"></stringProp>' +
          "\n" +
          '<stringProp name="ThreadGroup.delay"></stringProp>' +
          "\n" +
          "</ThreadGroup>" +
          "\n" +
          "<hashTree/>" +
          "\n" +
          "</hashTree>"
      );
      console.log("1");
    }
    if (event.target.value === "2") {
      setThreaths(
        '<?xml version="1.0" encoding="UTF-8"?>' +
          "\n" +
          '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">' +
          "\n" +
          "<hashTree>" +
          "\n" +
          '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="' +
          inputJMeter.title +
          '" enabled="true">' +
          "\n" +
          '<stringProp name="TestPlan.comments"></stringProp>' +
          "\n" +
          '<boolProp name="TestPlan.functional_mode">false</boolProp>' +
          "\n" +
          '<boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>' +
          "\n" +
          '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>' +
          "\n" +
          '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">' +
          "\n" +
          '<collectionProp name="Arguments.arguments"/>' +
          "\n" +
          "</elementProp>" +
          "\n" +
          '<stringProp name="TestPlan.user_define_classpath"></stringProp>' +
          "\n" +
          "</TestPlan>" +
          "\n" +
          "<hashTree>" +
          "\n" +
          '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">' +
          "\n" +
          '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>' +
          "\n" +
          '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">' +
          "\n" +
          '<boolProp name="LoopController.continue_forever">false</boolProp>' +
          "\n" +
          '<stringProp name="LoopController.loops">1</stringProp>' +
          "\n" +
          "</elementProp>" +
          "\n" +
          '<stringProp name="ThreadGroup.num_threads">' +
          inputJMeter.aantalUsers +
          "</stringProp>" +
          "\n" +
          '<stringProp name="ThreadGroup.ramp_time">1</stringProp>' +
          "\n" +
          '<boolProp name="ThreadGroup.scheduler">false</boolProp>' +
          "\n" +
          '<stringProp name="ThreadGroup.duration"></stringProp>' +
          "\n" +
          '<stringProp name="ThreadGroup.delay"></stringProp>' +
          "\n" +
          "</ThreadGroup>" +
          "\n" +
          "<hashTree/>" +
          "\n" +
          "</hashTree>" +
          "\n" +
          '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">' +
          "\n" +
          '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>' +
          "\n" +
          '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">' +
          "\n" +
          '<boolProp name="LoopController.continue_forever">false</boolProp>' +
          "\n" +
          '<stringProp name="LoopController.loops">1</stringProp>' +
          "\n" +
          "</elementProp>" +
          "\n" +
          '<stringProp name="ThreadGroup.num_threads">' +
          inputJMeter.aantalUsers +
          "</stringProp>" +
          "\n" +
          '<stringProp name="ThreadGroup.ramp_time">1</stringProp>' +
          "\n" +
          '<boolProp name="ThreadGroup.scheduler">false</boolProp>' +
          "\n" +
          '<stringProp name="ThreadGroup.duration"></stringProp>' +
          "\n" +
          '<stringProp name="ThreadGroup.delay"></stringProp>' +
          "\n" +
          "</ThreadGroup>" +
          "\n" +
          "<hashTree/>" +
          "\n" +
          "</hashTree>" +
          "\n" +
          "</hashTree>" +
          "\n" +
          "</jmeterTestPlan>"
      );
      console.log("2");
    }
  }

  // Render selenium questions
  const [RenderSelenium, setRenderSelenium] = useState();
  localStorage.setItem("RenderSelenium", RenderSelenium);

  // JMeter quetion settings/scripts
  const [basicJM, setBasicJM] = useState();
  const [renderHttp, setRenderHttp] = useState();
  const [renderAll, setRenderAll] = useState();
  localStorage.setItem("BasicJM", basicJM);
  localStorage.setItem("renderHttp", renderHttp);
  localStorage.setItem("renderAll", renderAll);

  function saveJM() {
    setBasicJM(true);
    // Text for the basic script with nothing in it exect the test plan
    // setClickRender(true)
    setChooseScript(
      '<?xml version="1.0" encoding="UTF-8"?>' + "\n" +
        '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">' + "\n" +
        "<hashTree>" + "\n" +
        '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Test Plan" enabled="true">' + "\n" +
        '<stringProp name="TestPlan.comments"></stringProp>' + "\n" +
        '<boolProp name="TestPlan.functional_mode">' + "false" +"</boolProp>" + "\n" +
        '<boolProp name="TestPlan.tearDown_on_shutdown">' + "true" + "</boolProp>" + "\n" +
        '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>' +"\n" +
        '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">' + "\n" +
        '<collectionProp name="Arguments.arguments"/>' + "\n" +
        "</elementProp>" + "\n" + 
        '<stringProp name="TestPlan.user_define_classpath"></stringProp>' + "\n" +
        "</TestPlan>" + "\n" +
        "<hashTree/>" + "\n" + Threaths + "\n" +
        "</hashTree>" + "\n" + "</jmeterTestPlan>"
    );

    console.log("works JM with 1 thread");
  }

  function handleHTTPGroup() {
    setRenderHttp(true);
    setHTTPqest(
      '<?xml version="1.0" encoding="UTF-8"?>' + "\n" +
        '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">' + "\n" +
        "<hashTree>" + "\n" +
        '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="' + inputJMeter.title + '" enabled="true">' + "\n" +
        '<stringProp name="TestPlan.comments"></stringProp>' + "\n" +
        '<boolProp name="TestPlan.functional_mode">false</boolProp>' + "\n" +
        '<boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>' + "\n" +
        '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>' + "\n" +
        '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">' + "\n" +
        '<collectionProp name="Arguments.arguments"/>' + "\n" +
        "</elementProp>" + "\n" +
        '<stringProp name="TestPlan.user_define_classpath"></stringProp>' + "\n" +
        "</TestPlan>" + "\n" +
        "<hashTree>" + "\n" +
        '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">' + "\n" +
        '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>' + "\n" +
        '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">' + "\n" +
        '<boolProp name="LoopController.continue_forever">false</boolProp>' + "\n" +
        '<stringProp name="LoopController.loops">1</stringProp>' + "\n" +
        "</elementProp>" + "\n" +
        '<stringProp name="ThreadGroup.num_threads">' + inputJMeter.aantalUsers +
        "</stringProp>" + "\n" +
        '<stringProp name="ThreadGroup.ramp_time">1</stringProp>' + "\n" +
        '<boolProp name="ThreadGroup.scheduler">false</boolProp>' + "\n" +
        '<stringProp name="ThreadGroup.duration"></stringProp>' + "\n" +
        '<stringProp name="ThreadGroup.delay"></stringProp>' + "\n" +
        "</ThreadGroup>" + "\n" +
        "<hashTree>" + "\n" +
        '<HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="HTTP Request" enabled="true">' + "\n" +
        '<elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">' + "\n" +
        '<collectionProp name="Arguments.arguments"/>' + "\n" +
        "</elementProp>" + "\n" +
        '<stringProp name="HTTPSampler.domain"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.port"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.protocol"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.contentEncoding"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.path">' + inputJMeter.url + " " + "</stringProp>" + "\n" +
        '<stringProp name="HTTPSampler.method">' + method + "</stringProp>" + "\n" +
        '<boolProp name="HTTPSampler.follow_redirects">true</boolProp>' + "\n" +
        '<boolProp name="HTTPSampler.auto_redirects">false</boolProp>' + "\n" +
        '<boolProp name="HTTPSampler.use_keepalive">true</boolProp>' + "\n" +
        '<boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>' + "\n" +
        '<stringProp name="HTTPSampler.embedded_url_re"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.connect_timeout"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.response_timeout"></stringProp>' + "\n" +
        "</HTTPSamplerProxy>" + "\n" +
        "<hashTree/>" + "\n" +
        "</hashTree>" + "\n" +
        "</hashTree>" + "\n" +
        "</hashTree>" + "\n" +
        "</jmeterTestPlan>"
    );
  }

  // Handle changes from the user input

  function handleInput(event) {
    const { name, value } = event.target;
    setinputJMeter((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(inputJMeter);
  }

  function saveEverthing() {
    setRenderAll(true);
    setAllqest(
      '<?xml version="1.0" encoding="UTF-8"?>' + "\n" +
        '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">' + "\n" +
        "<hashTree>" + "\n" +
        '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="' + inputJMeter.title +'" enabled="true">' + "\n" +
        '<stringProp name="TestPlan.comments"></stringProp>' + "\n" +
        '<boolProp name="TestPlan.functional_mode">false</boolProp>' + "\n" +
        '<boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>' + "\n" +
        '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>' + "\n" +
        '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">' + "\n" +
        '<collectionProp name="Arguments.arguments"/>' + "\n" +
        "</elementProp>" + "\n" +
        '<stringProp name="TestPlan.user_define_classpath"></stringProp>' + "\n" +
        "</TestPlan>" + "\n" + "<hashTree>" + "\n" +
        '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">' + "\n" +
        '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>' + "\n" +
        '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">' + "\n" +
        '<boolProp name="LoopController.continue_forever">false</boolProp>' + "\n" +
        '<stringProp name="LoopController.loops">1</stringProp>' + "\n" +
        "</elementProp>" + "\n" +
        '<stringProp name="ThreadGroup.num_threads">' + inputJMeter.aantalUsers + "</stringProp>" + "\n" +
        '<stringProp name="ThreadGroup.ramp_time">' + inputJMeter.rampup + "</stringProp>" + "\n" +
        '<boolProp name="ThreadGroup.scheduler">' + schedule + "</boolProp>" + "\n" +
        '<stringProp name="ThreadGroup.duration">30</stringProp>' + "\n" +
        '<stringProp name="ThreadGroup.delay"></stringProp>' + "\n" +
        "</ThreadGroup>" + "\n" +
        "<hashTree>" + "\n" +
        '<LoopController guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">' + "\n" +
        '<boolProp name="LoopController.continue_forever">true</boolProp>' + "\n" +
        '<intProp name="LoopController.loops">-1</intProp>' + "\n" +
        "</LoopController>" + "\n" +
        "<hashTree>" + "\n" +
        '<HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="HTTP Request" enabled="true">' + "\n" +
        '<elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">' + "\n" +
        '<collectionProp name="Arguments.arguments"/>' + "\n" +
        "</elementProp>" + "\n" +
        '<stringProp name="HTTPSampler.domain"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.port"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.protocol"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.contentEncoding"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.path">' + inputJMeter.url + "</stringProp>" + "\n" +
        '<stringProp name="HTTPSampler.method">' + method +
        "</stringProp>" + "\n" +
        '<boolProp name="HTTPSampler.follow_redirects">true</boolProp>' + "\n" +
        '<boolProp name="HTTPSampler.auto_redirects">false</boolProp>' + "\n" +
        '<boolProp name="HTTPSampler.use_keepalive">true</boolProp>' + "\n" +
        '<boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>' + "\n" +
        '<stringProp name="HTTPSampler.embedded_url_re"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.connect_timeout"></stringProp>' + "\n" +
        '<stringProp name="HTTPSampler.response_timeout"></stringProp>' + "\n" +
        "</HTTPSamplerProxy>" + "\n" +
        "<hashTree/>" + "\n" +
        "</hashTree>" + "\n" +
        "</hashTree>" + "\n" +
        "</hashTree>" + "\n" +
        "</hashTree>" + "\n" +
        "</jmeterTestPlan>"
    );
  }
  const [schedule, setSchedulde] = useState();
  function handleSchedularGroup(event) {
    setSchedulde(event.target.value);
    if (event.target.value === "True") {
      setSchedulde("true");
    } else {
      setSchedulde("false");
    }
    console.log(event.target.value);
  }
  const [method, setMethod] = useState();
  function handleMethodGroup(event) {
    setMethod(event.target.value);
    if (event.target.value === "GET") {
      setMethod("GET");
    }
    if (event.target.value === "POST") {
      setMethod("POST");
    }
    if (event.target.value === "HEAD") {
      setMethod("HEAD");
    }
    if (event.target.value === "PUT") {
      setMethod("PUT");
    }
    if (event.target.value === "OPTION") {
      setMethod("OPTION");
    }
    if (event.target.value === "TRACE") {
      setMethod("TRACE");
    }
    if (event.target.value === "DELETE") {
      setMethod("DELETE");
    }
    if (event.target.value === "PATCH") {
      setMethod("PATCH");
    }
    if (event.target.value === "PROPFIND") {
      setMethod("PROPFIND");
    }
    if (event.target.value === "PROPPATCH") {
      setMethod("PROPPATCH");
    }
    if (event.target.value === "MKCOL") {
      setMethod("MKCOL");
    }
    if (event.target.value === "COPY") {
      setMethod("COPY");
    }
    if (event.target.value === "LOCKE") {
      setMethod("LOCKE");
    }
    if (event.target.value === "MOVE") {
      setMethod("MOVE");
    }
    if (event.target.value === "UNLOCKE") {
      setMethod("UNLOCKE");
    }
    if (event.target.value === "REPORT") {
      setMethod("REPORT");
    }
    if (event.target.value === "SEARCH") {
      setMethod("SEARCH");
    }
    if (event.target.value === "MKCALENDAR") {
      setMethod("MKCALENDAR");
    }
    console.log(event.target.value);
  }

  // This is where the HTML begins
  return (
    <div className="contain">
      <div className="greenArray"> 
        {/* Title of the page */}
        <div>
          <h1 className="TitleQ" id='TitleQ'>Testen. Testen. Testen.</h1>
        </div>
      </div>
      <div className='body'>
      {/* Subtitle of the page */}
      <p className="subTextH">Vul de vragenlijst in, om een testscript aan te maken.</p>

      <div className="form-groups">
        <h3 className="subtitleQest">Filteren testtools</h3>

        {/* Question 1 */}
        <p className="subtitleQest">
          Wat voor soort test wil je uitvoeren?
        </p>
        <input
        id="checkFunctioneel"
          type="checkbox"
          className="Chechbtns"
          value={functioneel}
          onClick={(e) => filterFunc(e.target.checked)}
          onChange={(e) => setfunctioneel(e.target.checked)}
          name="testtype"
        ></input>
        <span className="subtitleQest">Functioneel testen</span>
        <input
        id="chechPerformance"
          type="checkbox"
          className="Chechbtns"
          onClick={(e) => filterPerform(e.target.checked)}
          onChange={(e) => setperformance(e.target.checked)}
          name="testtype"
        ></input>
        <span className="subtitleQest">Performance testen</span>
        <input
        id="checkSecurity"
          type="checkbox"
          className="Chechbtns"
          onClick={(e) => filterSecurity(e.target.checked)}
          onChange={(e) => setsecurity(e.target.checked)}
          name="testtype"
        ></input>
        <span className="subtitleQest">Security testen</span>

        {/* Question 2 */}
        <div>
          <p test-id="Q2Title"className="subtitleQest">Mag de testtool geld kosten?</p>
          <select className="optionMoney" onChange={handleChange2}>
            <option value="Kosten">Kosten</option>
            <option className="subtitleQest" value="Ja">
              Ja
            </option>
            <option className="subtitleQest" value="Nee">
              Nee
            </option>
          </select>
        </div>
        {/* filter */}
        <div>
          <h4 className="filterTitle">Resultaat:</h4>
          <div id="IdFunc" className="listFunc"></div>
          <div id="Idsec" className="listSec"></div>
          <div id="Idperf" className="listPerf"></div>
          <div id="myId4" className="list4"></div>
          <div id="myId5" className="list5"></div>
        </div>
        {/* question 3 */}
        <p className="subtitleQest">
          Welke tool wil je gebruiken voor de test?
        </p>
        <button
        id="SeleniumBtn"
          type="button"
          onClick={() => setSeleniumTrue(!seleniumTrue)}
          className="btnSeleniumTestscript"
          name="testtype"
          id='SeleniumBtn'
        >
          Selenium
        </button>
        <button
          type="button"
          onClick={() => setJmeterTrue(!jmeterTrue)}
          className="btnJMeterTestscript"
          name="testtype"
          id='JmeterBtn'
        >
          JMeter
        </button>
        <button
          type="button"
          onClick={() => setCypressTrue(!cypressTrue)}
          className="btnCypressScript"
          name="testtype"
        >
          Cypress
        </button>
        <button
          type="button"
          onClick={() => setGatlingTrue(!GatlingTrue)}
          className="btnGatlingScript"
          name="testtype"
        >
          Gatling
        </button>

        <button
          type="button"
          onClick={() => setWebDriverTrue(!WebDriverTrue)}
          className="btnWebDriverScript"
          name="testtype">
          WebDriverIO 
        </button>

        {seleniumTrue && (
          <div className="seleniumscript">
            <h4 className="QScripts">Selenium</h4>
            <h3 className="createScript">Maak een script:</h3>
            
            <div className="script">
              <p className="QuestScript" id='SeleniumQ1'>Welke browser zou je willen gebruiken? (chromedriver)</p>
              <form action="uitvoerenScript">
                {/* Input fields for the changes on a script */}
                <input
                  onChange={handleChangeSelenium}
                  id="InputSeleniumQ1"
                  name="title"
                  value={inputSelenium.title}
                  type="text">
                </input>

                <p className="QuestScript">Welke browser zou je willen gebruiken? (chrome)</p>
                <input
                  onChange={handleChangeSelenium}
                  id="InputSeleniumQ2"
                  name="chrome"
                  value={inputSelenium.chrome}
                  type="text">
                </input>
                
                <p className="QuestScript">Welke URL-link zou je willen gebruiken? (http://example.nl)</p>
                <input
                  onChange={handleChangeSelenium}
                  id="InputSeleniumQ3"
                  name="url"
                  value={inputSelenium.url}
                  type="text">
                </input>

                <p className="QuestScript">Wat zou je willen testen?</p>
                
                <input
          id="btnid"
          type="checkbox"
          className="CheckTitle"
          value={checkSeleniumBtnId}
          onChange={(e) => setcheckSeleniumBtnId(e.target.checked)}
          name="btnid"
          >
          </input> 
         <span className="subtitleQest">knop klikken</span>
            {checkSeleniumBtnId && <div>
              <p className="QuestScript">Wat is het id van de knop?</p>
                <input onChange={handleChangeSelenium} id="btnid" name="btnid" value={inputSelenium.btnid} type="text"></input>
                </div>}

                <input
          id="CheckTitle"
          type="checkbox"
          className="CheckTitle"
          value={checkSeleniumBtnSearch}
          onChange={(e) => setcheckSeleniumBtnSearch(e.target.checked)}
          name="testtitle">
          </input> 
         <span className="subtitleQest">Input veld invullen</span>
            {checkSeleniumBtnSearch && <div>
              <p className="QuestScript">Wat is het id van de input veld?</p>
                <input onChange={handleChangeSelenium} id="SearchId" name="SearchId" value={inputSelenium.SearchId} type="text"></input>
                <p className="QuestScript">Wat wil je in de inputveld schrijven?</p>
                <input onChange={handleChangeSelenium} id="TextSearch" name="TextSearch" value={inputSelenium.TextSearch} type="text"></input>
                </div>}


                <input
          id="CheckTitle"
          type="checkbox"
          className="CheckTitle"
          value={checkSeleniumBtnText}
          onChange={(e) => setcheckSeleniumBtnText(e.target.checked)}
          name="testtitle">
          </input> 
         <span className="subtitleQest">Tekst op pagina</span>
            {checkSeleniumBtnText && <div>
              <p className="QuestScript">Wat is het id van de tekst?</p>
                <input onChange={handleChangeSelenium} id="BtnText" name="BtnText" value={inputSelenium.BtnText} type="text"></input>
                </div>}
                <br />
                <br />

                {/* save button and go to next page */}
                <button id="CreateScriptBtn" className="CreateScritbtn" onClick={save}>Maak script aan</button>
              </form>
            </div>
          </div>
        )}

        {/* JMeter script  */}
        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!JMeter!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        {jmeterTrue && (
            <div className="containers">
              <h4 className="QScripts">JMeter</h4>
              <p className="QScriptsQ" id="JmeterParamChoice">Kies wat voor soort script zou je willen maken?</p>
             
              {/* three buttons to choose from */}
              <button className="CreateJMScript" onClick={() => setIsToggled(!isToggled)}>Thread</button>
              <button className="CreateScriptHTTP" onClick={() => setIsToggledHttp(!isToggledHttp)}>HTTP</button>
              <button className="CreateScriptAll" onClick={() => setisToogledAll(!isToogledAll)}>All</button>

              {/* Render the basic script JMeter with questions */}
              {isToggled && (
                <div className="basicScriptJM">
                  <form action="uitvoerenScript">
                    
                    {/* Q1 */}
                    <p className="QuestScript">Hoe moet je testplan heten?</p>
                    {/* Input fields for the changes on a script */}
                    <input
                      onChange={handleInput}
                      id="txt"
                      name="title"
                      value={inputJMeter.title}
                      type="text">
                    </input>

                    {/* Q2 */}
                    <p className="QuestScript">Hoeveel user per thread zou je willen? (vul een getal in)</p>
                    <input
                      onChange={handleChangeJM}
                      id="txt"
                      name="aantalUsers"
                      value={inputJMeter.aantalUsers}
                      type="text">
                    </input>

                    {/* Q3 */}
                    <p className="QuestScript">Hoeveel thread groepen moeten in het testscript komen?</p>
                    <select className="optionThreathGroup" onChange={handleThreathGroup}>
                      <option value="Hoeveel">Hoeveel</option>
                      <option className="subtitleQest" value="1">1</option>
                      <option className="subtitleQest" value="2">2</option>
                    </select>
                    <br />
                    <br />

                    {/* save button and go to next page */}
                    <button className="CreateJMScript" onClick={saveJM}>Maak script aan</button>
                  </form>
                </div>
              )}
              
              {isToggledHttp && !isToggled && (
                <form action="uitvoerenScript">
                  
                  {/* Input fields for the changes on a script */}
                  <p className="QuestScript">Hoe moet je testplan heten?</p>
                  <input
                    onChange={handleInput}
                    id="txt"
                    name="title"
                    value={inputJMeter.title}
                    type="text">
                    </input>
                  
                  <p className="QuestScript">Hoeveel user per thread zou je willen?(vul een getal in)</p>
                  <input
                    onChange={handleChangeJM}
                    id="txt"
                    name="aantalUsers"
                    value={inputJMeter.aantalUsers}
                    type="text">
                  </input>
                  
                  <p className="QuestScript">Welke URL-link zou je willen gebruiken? (http://example.nl)</p>
                  <input
                    onChange={handleInput}
                    name="url"
                    value={inputJMeter.url}
                    type="text">
                  </input>
                  <p className="QuestScript">Welke methode zou je willen gebruiken? (GET,POST,DELETE)</p>
                  <select className="optionSchedularGroup" onChange={handleMethodGroup}>
                    <option value="method">Methode</option>
                    <option className="subtitleQest" value="GET">GET</option>
                    <option className="subtitleQest" value="POST">POST</option>
                    <option className="subtitleQest" value="HEAD">HEAD</option>
                    <option className="subtitleQest" value="PUT">PUT</option>
                    <option className="subtitleQest" value="OPTION">OPTION</option>
                    <option className="subtitleQest" value="TRACE">TRACE</option>
                    <option className="subtitleQest" value="DELETE">DELETE</option>
                    <option className="subtitleQest" value="PATCH">PATCH</option>
                    <option className="subtitleQest" value="PROPFIND">PROPFIND</option>
                    <option className="subtitleQest" value="PROPPATCH">PROPPATCH</option>
                    <option className="subtitleQest" value="MKCOL">MKCOL</option>
                    <option className="subtitleQest" value="COPY">COPY</option>
                    <option className="subtitleQest" value="LOCKE">LOCKE</option>
                    <option className="subtitleQest" value="MOVE">MOVE</option>
                    <option className="subtitleQest" value="UNLOCKE">UNLOCKE</option>
                    <option className="subtitleQest" value="REPORT">REPORT</option>
                    <option className="subtitleQest" value="SEARCH">SEARCH</option>
                    <option className="subtitleQest" value="MKCALENDAR">MKCALENDAR</option>
                  </select>
                  <br />
                  <br />

                  {/* save button and go to next page */}
                  <button className="CreateScriptHTTP" onClick={handleHTTPGroup}>Maak script aan</button>
                </form>

              )}
              {isToogledAll && (
                <form action="uitvoerenScript">
                  {/* Input fields for the changes on a script */}
                  <p className="QuestScript">Hoe moet je script heten?</p>
                  <input
                    onChange={handleInput}
                    id="txt"
                    name="title"
                    value={inputJMeter.title}
                    type="text">
                  </input>

                  <p className="QuestScript">Hoeveel user per thread zou je willen?(vul een getal in, 1)</p>
                  <input
                    onChange={handleChangeJM}
                    id="txt"
                    name="aantalUsers"
                    value={inputJMeter.aantalUsers}
                    type="integer">
                  </input>

                  <p className="QuestScript">Welke URL-link zou je willen gebruiken? (http://example.nl)</p>
                  <input
                    onChange={handleInput}
                    name="url"
                    value={inputJMeter.url}
                    type="text">
                  </input>

                  <p className="QuestScript">Wilt u een schedular aanzetten?</p>
                  <select className="optionSchedularGroup" onChange={handleSchedularGroup}>
                    <option value="schedular">schema</option>
                    <option className="subtitleQest" value="True">Ja</option>
                    <option className="subtitleQest" value="False">Nee</option>
                  </select>
                  <p className="QuestScript">Welke methode zou je willen gebruiken? (GET,POST,DELETE)</p>
                  <select className="optionSchedularGroup" onChange={handleMethodGroup}>
                    <option value="method">Methode</option>
                    <option className="subtitleQest" value="GET">GET</option>
                    <option className="subtitleQest" value="POST">POST</option>
                    <option className="subtitleQest" value="HEAD">HEAD</option>
                    <option className="subtitleQest" value="PUT">PUT</option>
                    <option className="subtitleQest" value="OPTION">OPTION</option>
                    <option className="subtitleQest" value="TRACE">TRACE</option>
                    <option className="subtitleQest" value="DELETE">DELETE</option>
                    <option className="subtitleQest" value="PATCH">PATCH</option>
                    <option className="subtitleQest" value="PROPFIND">PROPFIND</option>
                    <option className="subtitleQest" value="PROPPATCH">PROPPATCH</option>
                    <option className="subtitleQest" value="MKCOL">MKCOL</option>
                    <option className="subtitleQest" value="COPY">COPY</option>
                    <option className="subtitleQest" value="LOCKE">LOCKE</option>
                    <option className="subtitleQest" value="MOVE">MOVE</option>
                    <option className="subtitleQest" value="UNLOCKE">UNLOCKE</option>
                    <option className="subtitleQest" value="REPORT">REPORT</option>
                    <option className="subtitleQest" value="SEARCH">SEARCH</option>
                    <option className="subtitleQest" value="MKCALENDAR">MKCALENDAR
                    </option>
                  </select>

                  <p className="QuestScript">Wat is de Ramp-up periode?</p>
                  <input
                    onChange={handleChangeJM}
                    id="rampup"
                    name="rampup"
                    value={inputJMeter.rampup}
                    type="text">
                  </input>
                  <br />
                  <br />

                  {/* save button and go to next page */}
                  <button className="CreateScriptAll" onClick={saveEverthing}>
                    Maak script aan
                  </button>
                </form>
              )}
            </div>
          )
          // end of JMeter
        }

        {cypressTrue && (
          <div className="containers">
            <h4 className="QScripts">Cypress</h4>
            <p className="QScriptsQ">Kies wat voor soort script zou je willen maken?</p>
            {/* three buttons to choose from */}
            <button className="CreateJMScript" onClick={() => setStateCyppressBasic(!stateCypressBasic)}>Eén klik op website script</button>
            <button className="CreateScriptHTTP" onClick={() => setCypress(!stateCypress)}>Assertion</button>
            <button className="CreateScriptAll" onClick={() => setCypressA(!stateCypressA)}>All</button>

            {stateCypressBasic && (
              <div>
                <h1 className="title-script">
                  Script met één klik op de pagina
                </h1>
                <h3 className="createScript">Maak een script:</h3>
                <div className="script">
                  <p className="QuestScript">Hoe moet je script heten?</p>
                  <form action="uitvoerenScript">
                    {/* Input fields for the changes on a script */}
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="title"
                      value={inputCypress.title}
                      type="text">
                    </input>

                    <p className="QuestScript">Hoe moet het command heten?</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="commandName"
                      value={inputCypress.commandName}
                      type="text">
                    </input>

                    <p className="QuestScript">Welke URL-link zou je willen gebruiken? (http://example.nl)</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="url"
                      value={inputCypress.url}
                      type="text">
                    </input>

                    <p className="QuestScript">Wat is het id van het object dat moet worden aangeklikt?</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="elementName"
                      value={inputCypress.elementName}
                      type="text">
                    </input>
                    <button className="CreateScritbtn" onClick={saveCypress}>Maak script aan</button>
                  </form>
                </div>
              </div>
            )}
            {stateCypress && (
              <div>
                <h1 className="title-script">Assertion</h1>
                <h3 className="createScript">Maak een script:</h3>
                <div className="script">
                  <p className="QuestScript">Hoe moet je script heten?</p>
                  <form action="uitvoerenScript">
                    {/* Input fields for the changes on a script */}
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="title"
                      value={inputCypress.title}
                      type="text">
                    </input>
                    
                    <p className="QuestScript">Hoe moet command heten?</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="commandName"
                      value={inputCypress.commandName}
                      type="text">
                    </input>

                    <p className="QuestScript">Welke URL-link zou je willen gebruiken? (http://example.nl)</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="url"
                      value={inputCypress.url}
                      type="text">
                    </input>
                    <p className="QuestScript">Wat is het id van het object dat moet worden aangeklikt?</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="elementName"
                      value={inputCypress.elementName}
                      type="text"
                    ></input>
                    <p className="QuestScript">
                      Welke actie zou je willen doen? (include)
                    </p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="action"
                      value={inputCypress.action}
                      type="text"
                    ></input>
                    <p className="QuestScript">
                      Welke Url is het gewensde resultaat?
                    </p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="includeUrl"
                      value={inputCypress.includeUrl}
                      type="text"
                    ></input>
                    <button
                      className="CreateScritbtn"
                      onClick={saveCypressAssertion}
                    >
                      Maak script aan
                    </button>
                  </form>
                </div>
              </div>
            )}

            {stateCypressA && (
              <div>
                <h1 className="title-script"> script</h1>
                <h3 className="createScript">Maak een script:</h3>
                <div className="script">
                  <p className="QuestScript">Hoe moet je script heten?</p>
                  <form action="uitvoerenScript">
                    {/* Input fields for the changes on a script */}
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="title"
                      value={inputCypress.title}
                      type="text">
                    </input>
                    <p className="QuestScript">Hoe moet command heten?</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="commandName"
                      value={inputCypress.commandName}
                      type="text">
                    </input>
                    
                    <p className="QuestScript">Welke Url zou je willen gebruiken om een test op uit te voeren? (http://example.nl)</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="url"
                      value={inputCypress.url}
                      type="text">
                    </input>

                    <p className="QuestScript">Wat is het id van het object dat moet worden aangeklikt?</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="elementName"
                      value={inputCypress.elementName}
                      type="text">
                    </input>

                    <p className="QuestScript">Welke actie zou je willen doen? (include)</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="action"
                      value={inputCypress.action}
                      type="text">
                    </input>

                    <p className="QuestScript">Welke Url is het gewensde resultaat?</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="includeUrl"
                      value={inputCypress.includeUrl}
                      type="text">
                    </input>

                    <p className="QuestScript">Wat is de css classname/id van het geteste object?</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="cssIdInput"
                      value={inputCypress.cssIdInput}
                      type="text">
                    </input>

                    <p className="QuestScript">Welke tekst moet er worden geschreven in de input field?</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="userInput"
                      value={inputCypress.userInput}
                      type="text">
                    </input>

                    <p className="QuestScript">Wat is het van het object dat moet worden aangeklikt?</p>
                    <input
                      onChange={handleChangeCypress}
                      id="txt"
                      name="expectedInput"
                      value={inputCypress.expectedInput}
                      type="text">
                    </input>

                    <button className="CreateScritbtn" onClick={saveCypressAll}>Maak script aan</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
        {/* end of cypress */}

         {/* {webdriver io} ///////////////////////////////////////////////////////////////webdriver*/}
        {WebDriverTrue && (
          <div className="containers">
            <h4 className="QScripts">WebDriver</h4>
            {/* description */}
            
            <p className="QScriptsQ">Hoe moet de test heten?</p>
            <form action="uitvoerenScript">
            <input onChange={handleChangeWebdriverIO} id="description" name="description" value={inputWebdriver.description} type="text"></input>
          
          <div>
            <p className="QScriptsQ">Vul de beschrijving in van de test:</p>
            <input onChange={handleChangeWebdriverIO} id="descriptionTest" name="descriptionTest" value={inputWebdriver.descriptionTest} type="text"></input>
            <p className="QScriptsQ">Welke URL-link zou je willen gebruiken? (http://example.nl)</p>
            <input onChange={handleChangeWebdriverIO} id="url" name="url" value={inputWebdriver.url} type="text"></input>
            <p className="QScriptsQ">Wat wil je testen?</p>
            
            <input 
            id="checkSearch"
            type="checkbox"
            className="checkSearch"
            value={checkSearch}
            onChange={(e) => setCheckSearch(e.target.checked)}
            name="checkSearch">
        </input>
        <span className="subtitleQest">Zoek resultaat</span>
            {checkSearch && <div>
                <p className="QScriptsQ">Wat is het id van de zoekbar?</p>
                <input onChange={handleChangeWebdriverIO} id="checkSearch" name="checkSearch" value={inputWebdriver.checkSearch} type="text"></input>
                <p className="QScriptsQ">Wat is het id van de zoekbar knop?</p>
                <input onChange={handleChangeWebdriverIO} id="checkSearchBtn" name="checkSearchBtn" value={inputWebdriver.checkSearchBtn} type="text"></input>
                <p className="QScriptsQ">Welke zoekopdracht zou je in willen vullen?</p>
                <input onChange={handleChangeWebdriverIO} id="checkSearchTxt" name="checkSearchTxt" value={inputWebdriver.checkSearchTxt} type="text"></input>
                </div>
                }

         <input
          id="CheckTitle"
          type="checkbox"
          className="CheckTitle"
          value={checkToolTitle}
          onChange={(e) => setCheckToolTitle(e.target.checked)}
          name="testtitle">
          </input> 
         <span className="subtitleQest">Titel op pagina</span>
            {checkToolTitle && <div>
                <p className="QScriptsQ">Wat is de titel van de pagina?</p>
                <input onChange={handleChangeWebdriverIO} id="pageTitle" name="pageTitle" value={inputWebdriver.pageTitle} type="text"></input>
                </div>}
            
            <input
            id="checkDifTool2"
            type="checkbox"
            className="Checkbtns"
            value={checkToolBtn}
            onClick={(e) => filterCheckToolBtn(e.target.checked)}
            onChange={(e) => setCheckToolBtn(e.target.checked)}
            name="testtype">
        </input>

        <span className="subtitleQest">Werking knop</span>
        {checkToolBtn && <div>
            <p className="QScriptsQ">Wat is het id van de knop?</p>
            <input onChange={handleChangeWebdriverIO} id="idBtn" name="idBtn" value={inputWebdriver.idBtn} type="text"></input>
            <p className="QScriptsQ">Wat moet er op de website staan, na de op de knop te hebben geklikt?</p>
            <input onChange={handleChangeWebdriverIO} id="titleBtn" name="titleBtn" value={inputWebdriver.titleBtn} type="text"></input>
            </div>
            } 
          <br/>
        <button onClick={handleDifferentTools} className="saveWebDriverScript">Maak script</button>
          </div>
          </form>
          </div>
        )} 

        {GatlingTrue && (
          <div className="containers">
            <h4 className="QScripts">Gatling</h4>
            <p className="QuestScript">Wat is de basis URL?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="baseUrl"
                      value={inputGatling.baseUrl}
                      type="text">
                    </input>

                    <p className="QuestScript">Hoe moet de class heten?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="className"
                      value={inputGatling.className}
                      type="text">
                    </input>

                    <p className="QuestScript">Hoeveel scenario's zou je willen gebruiken?</p>
                    <select className="AnswerUpl" name='option' onChange={(e) => setOptionSenario(e.target.value)}>
                                <option className="AnswerUpl" value="Senario">Senario: </option>
                                <option className="AnswerUpl" value="1">1</option>
                                <option className="AnswerUpl" value="2">2</option>
                                <option className="AnswerUpl" value="2">3</option>
                            </select>
                            {optionSenario === "1" && <div>
                                <p className="QScriptsQ">Hoe moet de senario heten?</p>
                                <input></input>
                                <p className="QScriptsQ">Wat moet er in het script staan?</p>
                                <input
                                id="checkOptionGet"
                                type="checkbox"
                                className="Chechbtns"
                                value={checkOptionGet}
                                onChange={(e) => setCheckOptionGet(e.target.checked)}
                                name="testtype">
                                </input>

                                <span className="subtitleQest">GET</span>
                                <input
                                id="checkHTTP"
                                type="checkbox"
                                className="Chechbtns"
                                value={checkHTTP}
                                onChange={(e) => setCheckHTTP(e.target.checked)}
                                name="testtype">
                                </input>

                                <span className="subtitleQest">HTTP</span>
                                {checkHTTP && <div>
                                    <p className="QScriptsQ">Wat is de route naar de pagina?</p>
                                    <input
                                    onChange={handleChangeGatling}
                                    id="txt"
                                    name="pageName"
                                    value={inputGatling.pageName}
                                    type="text">
                                    </input>
                                    </div>
                                    }
                                <input
                                id="checkFunctioneel"
                                type="checkbox"
                                className="CheckPause"
                                value={checkPause}
                                onChange={(e) => setCheckPause(e.target.checked)}
                                name="testtype">
                                </input>

                                <span className="subtitleQest">Pause</span>
                                {checkPause &&<div>
                                    <p className="QScriptsQ">Hoelang mag de pauze duren?</p>
                                <input></input>
                                </div>}

                                <input
                                id="checkStatus"
                                type="checkbox"
                                className="CheckStatus"
                                name="testtype">
                                </input>
                                <span className="subtitleQest">Status</span>
                                {/* //////////////////////////////////////////////////////////// */}
                                </div>
                                }
          
              <div className="script">
                  <form action="uitvoerenScript">
                    {/* Input fields for the changes on a script */}
                    
                    <p className="QuestScript">Hoeveel CPU users zou je willen?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="rampUser"
                      value={inputGatling.rampUser}
                      type="text">
                    </input>

                    <p className="QuestScript">Hoeveel tijd moet er tussen de users zitten?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="rampDuration"
                      value={inputGatling.rampDuration}
                      type="text">
                    </input>

                    <p className="QuestScript">Hoe moet de functie waar de basis elementen worden opgeslagen heten?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="httpfuncName"
                      value={inputGatling.httpfuncName}
                      type="text">
                    </input>

                    <p className="QuestScript">Hoe moet de functie heten, waarbij je de route gaat testen?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="nameFunction"
                      value={inputGatling.nameFunction}
                      type="text">
                    </input>

                    <p className="QuestScript">Hoe heet de eerste pagina die je wilt testen?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="pageName"
                      value={inputGatling.pageName}
                      type="text">
                    </input>

                    <p className="QuestScript">
                      Wat is de route naar deze pagina?
                    </p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="route"
                      value={inputGatling.route}
                      type="text"
                    ></input>
                    <p className="QuestScript">Hoelang wil je dat de eerste pause duurt?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="pauseOne"
                      value={inputGatling.pauseOne}
                      type="text">
                    </input>
                    <br></br>

                    <p className="titleGet">2e get</p>
                    <p className="QuestScript">Hoe heet de tweede pagina die je wilt testen?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="nameFunction2"
                      value={inputGatling.nameFunction2}
                      type="text">
                    </input>

                    <p className="QuestScript">Wat is de route naar deze pagina?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="route2"
                      value={inputGatling.route2}
                      type="text">
                    </input>

                    <p className="QuestScript">Hoelang wil je dat de tweede pause duurt?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="pauseTwo"
                      value={inputGatling.pauseTwo}
                      type="text">
                    </input>
                    <br></br>

                    <p className="titleGet">3e get</p>
                    <p className="QuestScript">Hoe heet de derde pagina die je wilt testen?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="nameFunction3"
                      value={inputGatling.nameFunction3}
                      type="text">
                    </input>

                    <p className="QuestScript">Wat is de route naar deze pagina?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="route3"
                      value={inputGatling.route3}
                      type="text">
                    </input>

                    <p className="QuestScript">Hoelang wil je dat de derde pause duurt?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="pauseThree"
                      value={inputGatling.pauseThree}
                      type="text">
                    </input>
                    <br></br>

                    <p className="titleGet">Functie aanroepen</p>
                    <p className="QuestScript">Hoe moet de functie van de scenario heten?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="scnNameFunction"
                      value={inputGatling.scnNameFunction}
                      type="text">
                    </input>
                    <p className="QuestScript">
                      Hoe moet de scenario zelf heten?
                    </p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="scenarioName"
                      value={inputGatling.scenarioName}
                      type="text">
                    </input>

                    <button className="CreateScritbtn" onClick={saveGatlingScriptB}>Maak script aan</button>
                  </form>
                </div>
           
            {gatlingM && (
              <div>
                <h1 className="title-script">script</h1>
                <h3 className="createScript">Maak een script:</h3>
                <div className="script">
                  <form action="uitvoerenScript">
                    {/* Input fields for the changes on a script */}
                    
                    <p className="QuestScript">Hoe moet je script heten?</p>
                    <input
                      onChange={handleChangeGatling}
                      id="txt"
                      name="title"
                      value={inputGatling.title}
                      type="text">
                    </input>

                    <button className="CreateScritbtn" onClick={saveGatlingScriptM}>Maak script aan</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div>
        <h3 className="filterTitle">Alle tools in de database:</h3>
      </div>
      <div className="gridContainer">
        {tools.map((to) => (
          <div key={to._id}>
            <h3 className="titleTools">{to.title}</h3>
            <p className="titelAnswere">Ondersteunt functioneel: {to.functioneel}</p>
            <p className="titelAnswere">Ondersteunt performance: {to.performance}</p>
            <p className="titelAnswere">Ondersteunt security: {to.security}</p>
            <p className="titelAnswere">Kost geld: {to.option}</p>
            <p className="titelAnswere">Ondersteunt mac: {to.optionMac}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default QuestionPage;

import React, { useState , useEffect} from "react";
import axios from "axios";

// Renders the questionpage. The function hold nothing, when user types something then it fills in
function QuestionPage(){
    const[tools,setTools] = useState([]);
    const[Toolop, setToolop] = useState([])
    const [input, setInput] = useState({
        title: '',
        url:'',
        functioneel: '',
        performance: '',
        sercurity: '',
        option: '',
        optionMac:''
    })

    useEffect(()=>{
        axios.get('http://localhost:3001/read').then((response) =>{
            setTools(response.data)
        });
    },[])


    const [functioneel,setfunctioneel] = useState(false);
    const [performance,setperformance] = useState(false);
    const [security,setsecurity] = useState(false);
    
    // Handel the options for money
    const [option,setOption] = useState()
    const [optionMac,setOptionMac] = useState()

    function handleClick(event){
        alert("De vragenlijst is opgeslagen")
        event.preventDefault();
        const newNote ={
            title: input.title,
            url: input.url,
            functioneel: functioneel,
            performance: performance,
            security: security,
            option: option,
            optionMac: optionMac
        }
        
        axios.post('http://localhost:3001/create', newNote)
    }

    function handleChange2(event){
        setOption(event.target.value)
        if(event.target.value === "Ja"){
            if(functioneel === true & performance === false & security=== false){
                const getIdFunc = document.getElementById("IdFunc");
                const getIdSec = document.getElementById("Idsec");
                var ChangeText = "<p></p>";
                getIdFunc.innerHTML = ChangeText
                getIdSec.innerHTML = ChangeText
                const filterArray = tools.filter(tool => tool.option === 'Ja')
                const filterArray2 = tools.filter(tool => tool.option === 'Ja' &tool.functioneel === 'true' & tool.title!==  filterArray.title)
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter func met ja kosten")
            }

            else if(functioneel === false & performance === true & security=== false){
                const getIdperf = document.getElementById("Idperf");
                const getIdsec = document.getElementById("Idsec");
                var text99 = "<p></p>";
                getIdperf.innerHTML = text99
                getIdsec.innerHTML = text99
                const filterArray = tools.filter(tool => tool.option === 'Ja')
                const filterArray2 = tools.filter(tool => tool.option === 'Ja' &tool.performance === 'true' & tool.title!==  filterArray.title)
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter perf met ja kosten")
            }

            else if(functioneel === false & performance === false & security=== true){
                const getIdFunc = document.getElementById("IdFunc");
                const getIdperf = document.getElementById("Idperf");
                const getIdSec = document.getElementById("Idsec");
                var ChangeNewText = "<p></p>";
                getIdFunc.innerHTML = ChangeNewText;
                getIdperf.innerHTML = ChangeNewText;
                getIdSec.innerHTML = ChangeNewText;
                const filterArray = tools.filter(tool => tool.option === 'Ja')
                const filterArray2 = tools.filter(tool => tool.option === 'Ja' &tool.security === 'true' & tool.title!==  filterArray.title)
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter sec met ja kosten")
            }

            else if(functioneel === false & performance === true & security=== true){
                const GetIdFunc = document.getElementById("IdFunc");
                const GetIdPerf = document.getElementById("Idperf");
                const GetIdSec = document.getElementById("Idsec");
                var NewText = "<p></p>";
                GetIdFunc.innerHTML = NewText
                GetIdPerf.innerHTML = NewText
                GetIdSec.innerHTML = NewText
                const filterArray = tools.filter(tool => tool.option === 'Ja')
                const filterArray2 = tools.filter(tool => tool.option === 'Ja' &tool.security === 'true' & tool.performance==='true' &tool.title!==  filterArray.title)
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter sec  en perf met ja kosten")
            }

            else if(functioneel === true & performance === true & security=== false){
                const myDiv = document.getElementById("IdFunc");
                const myDiv2 = document.getElementById("Idperf");
                const myDiv3 = document.getElementById("Idsec");
                var text66 = "<p></p>";
                myDiv.innerHTML = text66
                myDiv2.innerHTML = text66
                myDiv3.innerHTML = text66
                const filterArray = tools.filter(tool => tool.option === 'Ja')
                const filterArray2 = tools.filter(tool => tool.option === 'Ja' &tool.functioneel === 'true' & tool.performance==='true' &tool.title!==  filterArray.title)
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter func en perf met ja kosten")
            }

            else if(functioneel === true & performance === false & security=== true){
                const myDiv = document.getElementById("IdFunc");
                const myDiv2 = document.getElementById("Idperf");
                const myDiv3 = document.getElementById("Idsec");
                var text55 = "<p></p>";
                myDiv.innerHTML = text55
                myDiv2.innerHTML = text55
                myDiv3.innerHTML = text55
                const filterArray = tools.filter(tool => tool.option === 'Ja')
                const filterArray2 = tools.filter(tool => tool.option === 'Ja' &tool.functioneel === 'true' & tool.security==='true' &tool.title!==  filterArray.title)
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter func en sec met ja kosten")
            }
            
            else if(functioneel === true & performance === true & security=== true){
                const myDiv = document.getElementById("IdFunc");
                const myDiv2 = document.getElementById("Idperf");
                const myDiv3 = document.getElementById("Idsec");
                var text44 = "<p></p>";
                myDiv.innerHTML = text44
                myDiv2.innerHTML = text44
                myDiv3.innerHTML = text44
                const filterArray = tools.filter(tool => tool.option === 'Ja')
                const filterArray2 = tools.filter(tool => tool.option === 'Ja'& tool.performance ==='true' &tool.functioneel === 'true' & tool.security==='true' &tool.title!==  filterArray.title)
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter func en sec met ja kosten")
            }

            else{
                const myDiv = document.getElementById("myId5");
                const myDiv2 = document.getElementById("IdFunc");
                const myDiv3 = document.getElementById("Idsec");
                const myDiv4 = document.getElementById("Idperf");
                var text33 = "<p></p>";
                myDiv.innerHTML = text33
                myDiv2.innerHTML = text33
                myDiv3.innerHTML = text33
                myDiv4.innerHTML = text33
            console.log("alles zou moeten zijn verwijdert")
            var text2 = "<p></p>";
            myDiv.innerHTML = text2

            const filterArray = tools.filter(tool => tool.option === 'Ja')
            addList5(filterArray, list5)
            console.log("hoihoi2")
            }
            
        }
        else if(event.target.value === 'Nee'){
            if(functioneel === true & performance === false & security=== false){

                const myDiv = document.getElementById("IdFunc");
                const myDiv2 = document.getElementById("Idsec");
                const myDiv3 = document.getElementById("Idperf");
                var text22 = "<p></p>";
                myDiv.innerHTML = text22
                myDiv2.innerHTML = text22
                myDiv3.innerHTML = text22
                const filterArray = tools.filter(tool => tool.option === 'Nee')
                const filterArray2 = tools.filter(tool => tool.option === 'Nee' &tool.functioneel === 'true' & tool.title!==  filterArray.title)
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter func met nee kosten")
            }
            else if(functioneel === false & performance === true & security=== false){

                const myDiv = document.getElementById("Idperf");
                const myDiv2 = document.getElementById("Idsec");
                var text11 = "<p></p>";
                myDiv.innerHTML = text11
                myDiv2.innerHTML = text11
                const filterArray = tools.filter(tool => tool.option === 'Nee')
                const filterArray2 = tools.filter(tool => tool.option === 'Nee' &tool.performance === 'true' & tool.title!==  filterArray.title)
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter perf met nee kosten")
            }
            else if(functioneel === false & performance === false & security=== true){

                const myDiv = document.getElementById("Idperf");
                const myDiv2 = document.getElementById("Idsec");
                var texts = "<p></p>";
                myDiv.innerHTML = texts
                myDiv2.innerHTML = texts
                const filterArray = tools.filter(tool => tool.option === 'Nee')
                const filterArray2 = tools.filter(tool => tool.option === 'Nee' &tool.security === 'true' & tool.title!==  filterArray.title)
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter sec met nee kosten")
            }
            else if(functioneel === true & performance === false & security=== true){

                const myDiv = document.getElementById("Idperf");
                const myDiv2 = document.getElementById("Idsec");
                var texte = "<p></p>";
                myDiv.innerHTML = texte
                myDiv2.innerHTML = texte
                const filterArray = tools.filter(tool => tool.option === 'Nee')
                const filterArray2 = tools.filter(tool => tool.option === 'Nee'& tool.functioneel==='true' &tool.security === 'true' & tool.title!==  filterArray.title)
                if(filterArray2.title !==""){

                const myDiv4 = document.getElementById("IdFunc");
                const myDiv3 = document.getElementById("Idsec");
                var text91 = "<p></p>";
                var text90 = "<p>Geen tool gevonden</p>";
                myDiv3.innerHTML = text91
                myDiv4.innerHTML = text90
                }
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter func en sec met nee kosten")
            }
            else if(functioneel === true & performance === true & security=== false){

                const myDiv = document.getElementById("Idperf");
                const myDiv2 = document.getElementById("Idsec");
                var textr = "<p></p>";
                myDiv.innerHTML = textr
                myDiv2.innerHTML = textr
                const filterArray = tools.filter(tool => tool.option === 'Nee')
                const filterArray2 = tools.filter(tool => tool.option === 'Nee'& tool.functioneel==='true' &tool.performance === 'true' & tool.title!==  filterArray.title)
                if(filterArray2.title !==""){

                const myDiv4 = document.getElementById("IdFunc");
                const myDiv3 = document.getElementById("Idsec");
                var text911 = "<p></p>";
                var text900 = "<p>Geen tool gevonden</p>";
                myDiv3.innerHTML = text911
                myDiv4.innerHTML = text900
                }
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter func en perf met nee kosten")
            }
            else if(functioneel === false& performance === true & security=== true){

                const myDiv = document.getElementById("Idperf");
                const myDiv2 = document.getElementById("Idsec");
                var textm = "<p></p>";
                myDiv.innerHTML = textm
                myDiv2.innerHTML = textm
                const filterArray = tools.filter(tool => tool.option === 'Nee')
                const filterArray2 = tools.filter(tool => tool.option === 'Nee'& tool.performance==='true' &tool.security === 'true' & tool.title!==  filterArray.title)
                if(filterArray2.title !==""){

                const myDiv4 = document.getElementById("IdFunc");
                const myDiv3 = document.getElementById("Idsec");
                var text915 = "<p></p>";
                var text905 = "<p>Geen tool gevonden</p>";
                myDiv3.innerHTML = text915
                myDiv4.innerHTML = text905
                }
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter perf en sec met nee kosten")
            }
            else if(functioneel === true & performance === true & security=== true){

                const myDiv = document.getElementById("IdFunc");
                const myDiv2 = document.getElementById("Idperf");
                const myDiv3 = document.getElementById("Idsec");
                var text67 = "<p></p>";
                myDiv.innerHTML = text67
                myDiv2.innerHTML = text67
                myDiv3.innerHTML = text67
                const filterArray = tools.filter(tool => tool.option === 'Nee')
                const filterArray2 = tools.filter(tool => tool.option === 'Nee'& tool.performance ==='true' &tool.functioneel === 'true' & tool.security==='true' &tool.title!==  filterArray.title)
                addList3(filterArray2,listPerf)
                console.log(filterArray2, "filter func en sec met ja kosten")
            }


            else{
                const myDiv = document.getElementById("myId5");
            console.log("shoild removed")
            var text = "<p></p>";
            myDiv.innerHTML = text

            const filterArray = tools.filter(tool => tool.option=== 'Nee')
            addList5(filterArray, list5)
            
            console.log("dagdag2")
            }
            
        }
    }

    // function handleChange3(event){
    //     setOptionMac(event.target.value)

    //     if(event.target.value === "Ja"){
    //         const myDiv = document.getElementById("myId4");
    //         console.log("shoild removed")
    //         var text2 = "<p></p>";
    //         myDiv.innerHTML = text2

    //         const filterArray = tools.filter(tool => tool.option === 'Ja')
    //         addList4(filterArray, list4)
    //         console.log("hoihoi2")
    //     }
    //     else if((event.target.value === "Nee")){
    //         const myDiv = document.getElementById("myId4");
    //         console.log("shoild removed")
    //         var text = "<p></p>";
    //         myDiv.innerHTML = text

    //         const filterArray = tools.filter(tool => tool.option === 'Nee')
    //         addList4(filterArray, list4)
            
    //         console.log("dagdag2")
    //     }
    // }
    // Handle the change
    function handleChange(event){
        const{name,value} = event.target;

        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    /////////////////////////////////////////////////////////////// filter functioneel ///////////////////////////////////////////////////

function filterFunc (e) {
    if(e === true)
    {
        if(performance === true & security === false){
        const myDiv = document.getElementById("Idperf");
        var text6p = "<p></p>";
        myDiv.innerHTML = text6p
        const filterArray = tools.filter(tool => tool.functioneel === 'true')
        const filterArray2 = tools.filter(tool => tool.performance === 'true' &tool.functioneel === 'true' & tool.title!==  filterArray.title)

        addList3(filterArray2,listFunc)
        console.log(filterArray2, "filter functioneel en performance")
    }

        else if(security === true & performance ===false){
            // const myDiv = document.getElementById("Idperf");
            const myDiv2 = document.getElementById("Idsec");
            // const myDiv3 = document.getElementById("Idperf");
            // console.log("shoild removed")
            var text7 = "<p></p>";
            // myDiv.innerHTML = text7
            // myDiv3.innerHTML = text7
            myDiv2.innerHTML = text7
            const filterArray = tools.filter(tool => tool.functioneel === 'true')
            const filterArray2 = tools.filter(tool => tool.functioneel === 'true' &tool.security === 'true' & tool.title!==  filterArray.title)
console.log("hello you went here")
            addList3(filterArray2,listsec)
            // console.log(filterArray2, "filter functioneel en security by fync")
    }
    else if(security ===true & performance ===true){
        const GetidSec = document.getElementById("Idsec");////////////////////////////////////////////////////////////////////////////////////////////////////
            const GetidFunc = document.getElementById("IdFunc");
            const GetidPerf = document.getElementById("Idperf");
            console.log("remove lijsten func en perf")
            var NewLineText = "<p></p>";
            GetidSec.innerHTML = NewLineText
            GetidFunc.innerHTML = NewLineText
            GetidPerf.innerHTML = NewLineText
            // const filterArray = tools.filter(tool => tool.performance === 'true')
            const filterArray2 = tools.filter(tool => tool.performance === 'true' &tool.security === 'true'& tool.functioneel === 'true')

            addList3(filterArray2,listsec)
            console.log(filterArray2, "filter functioneel en security en performance")
        console.log("hello world")
    }

    else{
        const filterArray = tools.filter(tool => tool.functioneel === 'true')
        addList3(filterArray, listFunc)
        console.log(e + "filter functioneel");
        }
    }

    else if(e === false){
        if(performance === true & security ===true){
            const myDiv = document.getElementById("Idperf");
            const myDiv2 = document.getElementById("Idsec");
            var text14 = "<p></p>";
            myDiv.innerHTML = text14
            myDiv2.innerHTML = text14
            const filterArray = tools.filter(tool => tool.performance === 'true' &tool.security === 'true')
        console.log(e+ "filter performance en security, maar functioneel is false");

        addList3(filterArray,listPerf)
        }

        else{
            
        const myDiv = document.getElementById("IdFunc");
        console.log("remove everything (functioneel)")
        var text = "<p></p>";
        myDiv.innerHTML = text
        }
    }
}

/////////////////////////////////////////////////////////////// filter performance ///////////////////////////////////////////////////

function filterPerform (e) {
    if(e === true ){
         if(functioneel === true){
            const myDiv = document.getElementById("IdFunc");
            const myDiv2 = document.getElementById("Idsec");
            var text6 = "<p></p>";
            myDiv.innerHTML = text6
            myDiv2.innerHTML = text6
            const filterArray = tools.filter(tool => tool.performance === 'true')
            const filterArray2 = tools.filter(tool => tool.performance === 'true' &tool.functioneel === 'true' & tool.title!==  filterArray.title)
            addList3(filterArray2,listPerf)
            console.log(filterArray2, "filter func and perf")
        }

         else if(security === true){
            const myDiv = document.getElementById("Idsec");
            console.log("should remove security items")
            var text7 = "<p></p>";
            myDiv.innerHTML = text7
            const filterArray = tools.filter(tool => tool.performance === 'true')
            const filterArray2 = tools.filter(tool => tool.performance === 'true' &tool.security === 'true' & tool.title!==  filterArray.title)

            addList3(filterArray2,listPerf)
            console.log(filterArray2)
        }
        else if(security ===true & functioneel ===true){
            // const myDiv = document.getElementById("Idperf");////////////////////////////////////////////////////////////////////////////////////////////////////
            //     // const myDiv = document.getElementById("Idperf");
            //     console.log("remove lijsten func en sec")
            //     var text2 = "<p></p>";
            //     myDiv.innerHTML = text2
            //     // const filterArray = tools.filter(tool => tool.performance === 'true')
            //     const filterArray2 = tools.filter(tool => tool.performance === 'true' &tool.security === 'true'& tool.functioneel === 'true')
    
            //     addList3(filterArray2,listsec)
            //     console.log(filterArray2, "ben je hier?")
            console.log("hello world2")
        }

        else{
            const myDiv = document.getElementById("Idperf");
            var text3 = "<p></p>";
                myDiv.innerHTML = text3
                const filterArray = tools.filter(tool => tool.performance === 'true')
                addList3(filterArray,listPerf)
                console.log(filterArray, "Filter performance")
        }
    }

    else if(e === false){
        if(functioneel === true & security === true){
                const GEtIdPerf = document.getElementById("Idperf");
                const GEtIdSec = document.getElementById("Idsec");
                const GEtIdFunc = document.getElementById("IdFunc");
                console.log("functioneel en security is true, maar perf is false")
                var NewcodeText = "<p></p>";
                var NewtextCode = "<p></p>";
                GEtIdPerf.innerHTML = NewcodeText
                GEtIdSec.innerHTML = NewtextCode
                GEtIdFunc.innerHTML = NewtextCode
                const filterArray = tools.filter(tool => tool.functioneel === 'true' & tool.security === 'true')
                addList3(filterArray,listFunc)
                console.log('perform is false, sec en func zijn true')
        }

        else{
            const GETidperf = document.getElementById("Idperf");
            const GETidsec = document.getElementById("Idsec");
            const GETidfunc = document.getElementById("IdFunc");
            var NewText = "<p></p>";
            var NeWTxt = "<p></p>";
            GETidperf.innerHTML = NewText
            GETidsec.innerHTML = NeWTxt
            GETidfunc.innerHTML = NeWTxt
            console.log("remove everything (performance)")
            var Ntext = "<p></p>";
            GETidperf.innerHTML = Ntext
        
        }
        }
    }
    ////

    function filterSecurity(e){
              if(e ===true){
                if(functioneel === true & performance === false){
                    const myDiv = document.getElementById("IdFunc");
                    // const myDiv2 = document.getElementById("Idsec");
                    // const myDiv3 = document.getElementById("Idpref");
                    var text6 = "<p></p>";
                    myDiv.innerHTML = text6
                    // myDiv2.innerHTML = text6
                    // myDiv3.innerHTML = text6
                    const filterArray = tools.filter(tool => tool.security === 'true')
                    const filterArray2 = tools.filter(tool => tool.security === 'true' &tool.functioneel === 'true' & tool.title!==  filterArray.title)
                    addListSec(filterArray2,listFunc)
                    console.log(filterArray2, "filter func and sec")
                    console.log("dagaga youre here huh")
                }
                else if(performance === true & functioneel === false){
                    const myDiv = document.getElementById("Idperf");
                    var text11 = "<p></p>";
                    myDiv.innerHTML = text11;
                    const filterArray = tools.filter(tool => tool.security === 'true')
                    const filterArray2 = tools.filter(tool => tool.security === 'true' &tool.performance === 'true' & tool.title!==  filterArray.title)
                    addListSec(filterArray2,listsec)
                    console.log(filterArray2, "filter sec en perform")
                }
                else if(performance === true & functioneel === true){
                    const myDiv = document.getElementById("Idperf");
                    const myDiv2 = document.getElementById("IdFunc");
                    const myDiv3 = document.getElementById("Idsec");
                    var text = "<p></p>";
                    myDiv2.innerHTML = text;
                    myDiv.innerHTML = text;
                    myDiv3.innerHTML = text;
                    // const filterArray = tools.filter(tool => tool.security === 'true')
                    const filterArray2 = tools.filter(tool => tool.security === 'true' &tool.performance === 'true'& tool.functioneel === 'true')
                    addListSec(filterArray2,listsec)
                    console.log( "ben je misschien tot hier gekomen?")
                }
                else{
                    const filterArray = tools.filter(tool => tool.security === 'true')
                    addListSec(filterArray,listsec)
                    console.log(filterArray, "Filter security")
            }
              }
              else if(e === false){
                if(functioneel === true & performance === true){
                    const myDiv = document.getElementById("Idsec");
                    const myDiv2 = document.getElementById("Idperf");
                    console.log("functioneel en security is true, maar perf is false")
                    var text12 = "<p></p>";
                    myDiv.innerHTML = text12
                    myDiv2.innerHTML = text12
                    const filterArray = tools.filter(tool => tool.functioneel === 'true' & tool.performance === 'true')
                    addListSec(filterArray,listsec)
                
            }
                else{
                const GETIDSEC = document.getElementById("Idsec");
                const GETIDFUNC = document.getElementById("IdFunc");
                var NTXT = "<p></p>";
                var newTxt = "<p></p>";
                GETIDSEC.innerHTML = NTXT
                GETIDFUNC.innerHTML = newTxt
                console.log("remove everything (security)")
                }
              }
          }
    
/////////////////////////////////////////////////////////////// Create list  ///////////////////////////////////////////////////

// List functioneel
 const listFunc = document.querySelector('.listFunc')

 //List security
 const listsec = document.querySelector('.listSec')

 const addListSec = (array, element) =>{
     array.forEach(item =>{
        const li = document.createElement('li')
        li.textContent = item.title
        element.appendChild(li)
     });
 }

 // List performance
 const listPerf = document.querySelector('.listPerf')

 const addList3 = (array, element) =>{
     array.forEach(item =>{
        const li = document.createElement('li')
        li.textContent = item.title
        element.appendChild(li)
     });
 }

 const list5 = document.querySelector('.list5')
 

 const addList5 = (array, element) =>{
     array.forEach(item =>{
        const li = document.createElement('li')
        li.textContent = item.title
        element.appendChild(li)
     });
 }

    // This is where the HTML begins
    return <div className='contain'>
         <div className='greenArray'>
             {/* Title of the page */}
         <div><h1 className="TitleQ">Testen. Testen. Testen.</h1>
        {/* <p class="haken">>></p> */}
        </div>
        </div>
        {/* Subtitle of the page */}
        <p className="subTextH">Vul de vragenlijst in, om een script te maken</p>
        <form className="c" method="post" action="/">
            <div className="form-group">
            <p className="subtitleQest">Stap 1: Filteren testtools</p>
            {/* Question 1 */}
            <p className="subtitleQest">Vraag 1: Wat voor soort test wilt u uitvoeren?</p>
            {/* checked */}
            <input type="checkbox" className="Chechbtns" value={functioneel} onClick={(e) => filterFunc(e.target.checked)} onChange={(e)=>setfunctioneel(e.target.checked)}  name="testtype"></input><span className="subtitleQest">Functioneel testen</span>
            
            <a href="/render"><button className="RHistoyBtn CreateScript3" type="button">next page <p className= "hakenBetter"></p></button></a>
       
        
           
             <input type="checkbox" className="Chechbtns" onClick={(e) => filterPerform(e.target.checked)} onChange= {(e)=>setperformance(e.target.checked)} name="testtype"></input><span className="subtitleQest">Performance testen</span> 
            <input type="checkbox" className="Chechbtns"  onClick={(e) => filterSecurity(e.target.checked)} onChange= {(e)=>setsecurity(e.target.checked)} name="testtype"></input><span className="subtitleQest">Security testen</span> 
            
            <div>
                    {/* Question 4 */}
                <p className="subtitleQest">Vraag 2: Mag de tool geld kosten?</p>
                <select className='optionMoney' onChange={handleChange2}>
                <option  value="Kosten">Kosten</option>
                <option className="subtitleQest" value="Ja">Ja</option>
                <option className="subtitleQest" value="Nee">Nee</option>
                </select>
            </div>
            {/* <div className="optionKosten"> */}
                    {/* Question 4 */}
                {/* <p className="subtitleQest">Vraag 3: Moet de tool macOS ondersteunen?</p>
                <select className='optionMoney' onChange={handleChange3} >
                <option  value="Kosten">Kosten</option>
                <option  value="Ja">Ja</option>
                <option value="Nee">Nee</option>
                </select>
            </div> */}
            <div>
            <h1>Filter</h1>
            <div id ="IdFunc" className="listFunc"></div>
            <div id ="Idsec" className="listSec"></div>
            <div id ="Idperf" className="listPerf"></div>
            <div id ="myId4" className="list4"></div>
            <div id ="myId5" className="list5"></div>
        </div>
    <a href='/Selenium'> <input type="button"     name="testtype"></input><span className="subtitleQest">Selenium</span> </a> 
    
            {/* Question 2 */}
            <p className="subtitleQest">Stap 2: Invullen van gegevens</p>
            <p className="subtitleQest">Vraag 3: Hoe moet het script heten?</p>
                <input onChange={handleChange} name= "title" value={input.title} autoComplete = "off" className="form-controle" placeholder="Naam script"></input>
                </div>
                <div className="form-group-3">

            {/* Question 3 */}
            <p className="subtitleQest">Vraag 4: Welke URL moet er getest worden?</p>
                <input onChange={handleChange} name= "url" value={input.url} autoComplete = "off" className="form-controle" placeholder="URL-link"></input>
                </div>

                {/* Button to add everything to the database */}
                <button onClick={handleClick} className="AddBtn">Vragen opslaan</button>
              </form>
        <div>
            <h1> Alle tools die tot nu toe in de database staan: </h1>
        </div>
        <div className="gridContainer">
        {tools.map(to => (
            <div key={to._id}>
                <h1 className="titleTools">{to.title}</h1>
                <p className="titelAnswere">Ondersteunt functioneel: {to.functioneel}</p>
                <p className="titelAnswere">Ondersteunt performance: {to.performance}</p>
                <p className="titelAnswere">Ondersteunt security: {to.security}</p>
                <p className="titelAnswere">Kost geld: {to.option}</p>
                <p className="titelAnswere">Ondersteunt mac: {to.optionMac}</p>
                </div>
            ))
            }
            </div>
    </div>
    
}


export default QuestionPage;

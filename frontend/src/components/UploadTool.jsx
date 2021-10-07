import React, { useState , useEffect} from "react";
import axios from "axios";


function UploadTool(){
    const [input, setInput] = useState({
        title: '',
        functioneel: "",
        performance: "",
        sercurity: "",
        option: '',
        optionMac:'',
    })

    const [functioneel,setfunctioneel] = useState();
    const [performance,setperformance] = useState();
    const [security,setsecurity] = useState();

       
       // Handel the options for MacOS
       const [optionMac,setOptionMac] = useState()

       function handleChange3(event){
           setOptionMac(event.target.value)
       }

    // Handel the options for money
       const [option,setOption] = useState()

       function handleChange2(event){
           setOption(event.target.value)
       }

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


// Post data into the database
    function handleClick(event){
        alert("De test tool is opgeslagen")
        event.preventDefault();
        
        
        const newTool ={
            title: input.title,
            functioneel: functioneel,
            performance: performance,
            security: security,
            option: option,
            optionMac: optionMac,
        }
        

        
        axios.post('http://localhost:3001/createTool', newTool);
    }

const[tools,setTools] = useState([{
    title: '',
    functioneel: '',
    performance: '',
    security: '',
    option: '',
    optionMac:'',
}])

useEffect(()=>{
    fetch("/tools").then(res=>{
        if(res.ok){
            return res.json()
        }
    }).then(jsonRes=> setTools(jsonRes));
})


    return <div className='contain'>
            <div className='greenArray'>
                <div>
                <h1 className="TitleI">Upload testtool</h1>
                 {/* <p class="haken">>></p> */}
                </div>
            </div>

             <div>
                <p className="subTextUpL">Naam testtool</p>
                <input onChange={handleChange} name= "title" autoComplete = "off" className="form-controle" placeholder="Naam"></input>
            </div>
        
            <div>
                <p className="subTextUpL"> Welke test kan er met de tool uitgevoerd worden?</p>  
                <input type="checkbox" onChange={(e)=>setfunctioneel(e.target.checked)}  name="testtype"></input><span className="AnswerUpl" >Functioneel testen</span>
                <input type="checkbox" onChange= {(e)=>setperformance(e.target.checked)} name="testtype"></input><span className="AnswerUpl">Performance testen</span>
                <input type="checkbox" onChange= {(e)=>setsecurity(e.target.checked)} name="testtype"></input><span className="AnswerUpl">Security testen</span>
            </div>
            
            <div>
                <p className="subTextUpL">Kost de tool geld?</p>
                <select className="AnswerUpl" name='option' onChange={handleChange2}>
                <option className="AnswerUpl" value="Ja">Ja</option>
                <option className="AnswerUpl" value="Nee">Nee</option>
                </select>
            </div>
            <div>
                <p className="subTextUpL">Ondersteunt MacOS?</p>
                <select className="AnswerUpl" name='optionMac' onChange={handleChange3}>
                <option className="AnswerUpl" value="Ja">Ja</option>
                <option className="AnswerUpl" value="Nee">Nee</option>
                </select>
            </div>
            <button onClick={handleClick} className="AddBtn" >Voeg test tool toe</button>
            {tools.map(to => (
            
            <div>
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
}

export default UploadTool;


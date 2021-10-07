import React, {useState } from "react";
import axios from "axios";




// Renders the questionpage. The function hold nothing, when user types something then it fills in
function QuestionPage(){
    const [input, setInput] = useState({
        title: '',
        url:'',
        functioneel: '',
        performance: '',
        sercurity: '',
        option: ''
    })
    

    const [functioneel,setfunctioneel] = useState(false);
    const [performance,setperformance] = useState(false);
    const [security,setsecurity] = useState(false);
    
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
        alert("De vragenlijst is opgeslagen")
        event.preventDefault();
        const newNote ={
            title: input.title,
            url: input.url,
            functioneel: functioneel,
            performance: performance,
            security: security,
            option: option,
        }
        
        axios.post('http://localhost:3001/create', newNote)
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
            {/* Question 1 */}
            <p className="subtitleQest">Vraag 1: Wat voor soort test wilt u uitvoeren?</p>
            {/* checked */}
            <input type="checkbox" onChange={(e)=>setfunctioneel(e.target.checked)}  name="testtype"></input><span className="subtitleQest">Functioneel testen</span>
            <input type="checkbox" onChange= {(e)=>setperformance(e.target.checked)} name="testtype"></input><span className="subtitleQest">Performance testen</span>
            <input type="checkbox" onChange= {(e)=>setsecurity(e.target.checked)} name="testtype"></input><span className="subtitleQest">Security testen</span>
            {/* Question 2 */}
            <p className="subtitleQest">Vraag 2: Hoe moet het script heten?</p>
                <input onChange={handleChange} name= "title" value={input.title} autoComplete = "off" className="form-controle" placeholder="Naam script"></input>
                </div>
                <div className="form-group-3">
                {/* Question 3 */}
            <p className="subtitleQest">Vraag 3: Welke URL moet er getest worden?</p>
                <input onChange={handleChange} name= "url" value={input.url} autoComplete = "off" className="form-controle" placeholder="URL-link"></input>
                </div>
                <div>
                    {/* Question 4 */}
                <p className="subtitleQest">Vraag 4: Mag de tool geld kosten?</p>
                <select name='option' onChange={handleChange2}>
                <option value="Kosten">Kosten</option>
                <option className="subtitleQest" value="Ja">Ja</option>
                <option className="subtitleQest" value="Nee">Nee</option>
                </select>
            </div>
                {/* Button to add everything to the database */}
                <button onClick={handleClick} className="AddBtn">Vragen opslaan</button>
        </form>
    </div>
}

export default QuestionPage;
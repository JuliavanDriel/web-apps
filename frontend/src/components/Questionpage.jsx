import React, {useState} from "react";
import axios from "axios";


// Renders the questionpage. The function hold nothing, when user types something then it fills in
function QuestionPage(){
    const [input, setInput] = useState({
        title: '',
        content: '',
        url:'',
        // type:''
    })

    function handleCheckbox(event){
        console.log(event.target.value);
    }
    
// const testTypes =[
//     {
//         id:1,
//         name: "Functional"
//     },
//     {
//         id:2,
//         name: "Preformance"
//     },
//     {
//         id:3,
//         name: "Security"
//     }

// ]

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
        event.preventDefault();
        // console.log(input);
        const newNote ={
            title: input.title,
            content: input.content,
            url: input.url,
            // type: input.type
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
            <p>Vraag 1: Wat voor soort test wilt u uitvoeren?</p>
            {/* checked */}
            <input type="checkbox" onChange={handleCheckbox} name="testtype"></input><span>Functioneel testen</span>
            <input type="checkbox" onChange={handleCheckbox} name="testtype"></input><span>Performance testen</span>
            <input type="checkbox" onChange={handleCheckbox} name="testtype"></input><span>Security testen</span>
                        {/* <input type="checkbox"><label>Functioneel</label></input>onChange={(e) => setTnC(e.target.checked)}
                        <input type="checkbox"><label>Performance</label></input>
                        <input type="checkbox"><label>Security</label></input> */}
            {/* Question 2 */}
            <p>Vraag 2: Hoe moet het script heten?</p>
                <input onChange={handleChange} name= "title" value={input.title} autoComplete = "off" className="form-controle" placeholder="Naam script"></input>
                </div>
                <div className="form-group-3">
                {/* Question 3 */}
                <p className="Q3">Vraag 3: Welke URL moet er getest worden?</p>
                <input onChange={handleChange} name= "url" value={input.url} autoComplete = "off" className="form-controle" placeholder="URL-link"></input>
                </div>
            <div className="form-group">
                <textarea onChange={handleChange} name="content" value={input.content} autoComplete = "off" className="form-controle"></textarea>
                </div>
                {/* Button to add everything to the database */}
                <button onClick={handleClick} className="AddBtn" >ADD To Mongodb</button>
        </form>

    </div>
}

export default QuestionPage;
import React, { useState, useEffect } from "react";
import axios from "axios";

function UploadTool() {
    //This is the state for create tool
    const [optionMac, setOptionMac] = useState("Ja");
    const [functioneel, setfunctioneel] = useState(false);
    const [performance, setperformance] = useState(false);
    const [security, setsecurity] = useState(false);
    const [option, setOption] = useState("Ja");
    const [input, setInput] = useState({
        title: "",
        functioneel: "",
        performance: "",
        sercurity: "",
        option: "",
        optionMac: "",
    });

    //This is the state for update tool
    const [optionMoney, setoptionMoney] = useState("");
    const [newoptionMac, setnewoptionMac] = useState("");
    const [secur, setsecur] = useState(false);
    const [newpref, setnewpref] = useState(false);
    const [newfunc, setnewfunc] = useState(false);
    const [newtitle, setnewtitle] = useState("");

    // Handle the change
    function handleChange(event) {
        const { name, value } = event.target;

        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value,
            };
        });
    }

    //Handle change of option money
    function handleChange2(event) {
        setOption(event.target.value);
    }
    function handleChange3(event) {
        setOptionMac(event.target.value);
    }

    // Post data into the database/route
    function handleClick(event) {
        alert("De testtool is opgeslagen");
        event.preventDefault();

        // Create a new testtool
        const newTool = {
            title: input.title,
            functioneel: functioneel,
            performance: performance,
            security: security,
            option: option,
            optionMac: optionMac,
        };

        axios.post("http://localhost:3000/testtoolToevoegen", newTool);
    }

    // Maps All the values in an arraqy
    const [tools, setTools] = useState([
        {
            title: newtitle,
            functioneel: newfunc,
            performance: performance,
            security: security,
            option: "",
            optionMac: "",
            _id: "",
        },
    ]);

    //Makes a JSON object of an array
    useEffect(() => {
        fetch("/tools")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((jsonRes) => setTools(jsonRes));
    }, []);

    // Delete an item
    function deleteItem(id) {
        axios.delete("/delete/" + id);
        alert("item deleted");
        console.log("delete item with " + id);
    }

    //Update an item
    const UpdateItem = (id) => {
        axios.put("http://localhost:3001/update", {
            id: id,
            title: newtitle,
            functioneel: newfunc,
            performance: newpref,
            security: secur,
            option: optionMoney,
            optionMac: newoptionMac,
        });
    };

    return (
        <div className="contain">
            <div className="greenArray">
                <div>
                    <h1 className="TitleI">Upload testtool</h1>
                    {/* <p class="haken">>></p> */}
                </div>
            </div>
            <div className='body'>
            <div>
                <h3 className="subTextUpL">Testool opslaan in database</h3>
                <p className="subTextUpL">
                    Vul hier de naam van de nieuwe testtool in:
                </p>
                <input
                    onChange={handleChange}
                    name="title"
                    autoComplete="off"
                    className="form-controle"
                    placeholder="Naam"
                ></input>
                <div>
                    <p className="subTextUpL">
                        Welke testsoort kan er met de tool uitgevoerd worden?
                    </p>
                    <input
                        type="checkbox"
                        onChange={(e) => setfunctioneel(e.target.checked)}
                        name="testtype"
                    ></input>
                    <span className="AnswerUpl">Functioneel testen</span>
                    <input
                        type="checkbox"
                        onChange={(e) => setperformance(e.target.checked)}
                        name="testtype"
                    ></input>
                    <span className="AnswerUpl">Performance testen</span>
                    <input
                        type="checkbox"
                        onChange={(e) => setsecurity(e.target.checked)}
                        name="testtype"
                    ></input>
                    <span className="AnswerUpl">Security testen</span>
                </div>
            </div>
            <div>
                <p className="subTextUpL">Kost de tool geld?</p>
                <select className="AnswerUpl" name="option" onChange={handleChange2}>
                    <option className="AnswerUpl" value="Ja">
                        Ja
                    </option>
                    <option className="AnswerUpl" value="Nee">
                        Nee
                    </option>
                </select>
            </div>
            <div>
                <p className="subTextUpL">Ondersteunt MacOS?</p>
                <select className="AnswerUpl" name="optionMac" onChange={handleChange3}>
                    <option className="AnswerUpl" value="Ja">
                        Ja
                    </option>
                    <option className="AnswerUpl" value="Nee">
                        Nee
                    </option>
                </select>
            </div>
            <button onClick={handleClick} className="AddBtn">
                Voeg testtool toe
            </button>

            <h1 className="ShowTools">Testtools</h1>
            <div className="gridContainer">
                {tools.map((val, key) => {
                    return(
                        // display multiple tables
                        <div className="Onegrid" key={key}>
                            {/* runs the title of a tool */}
                            <h1 className="titleTools">{val.title}</h1>
                            {/* update new title */}
                            <input onChange={(e)=>setnewtitle(e.target.value)} name= "title" autoComplete = "off" className="form-controle" placeholder="Update naam"></input>
                            {/* multiple choice questions */}
                            <p className="titelAnswere">Ondersteunt functioneel: {val.functioneel}</p>
                            <p className="titelAnswere">Ondersteunt performance: {val.performance}</p>
                            <p className="titelAnswere">Ondersteunt security: {val.security}</p>
                            <input type="checkbox" className="testtypeFunc" onChange={(e)=> setnewfunc(e.target.checked)} name="testtype"></input><span className="AnswerUpl" >Update functioneel</span><br></br>
                            <input type="checkbox" onChange= {(e)=>setnewpref(e.target.checked)} className="testtypePerf"></input><span className="AnswerUpl">Update performance</span><br></br>
                            <input type="checkbox" className="testtypeSec" onChange= {(e)=>setsecur(e.target.checked)} name="testtype"></input><span className="AnswerUpl">Update security</span>
                            {/* question if the tool costs money */}
                            <p className="titelAnswere">Kost geld: {val.option}</p>
                            {/* update the tool */}
                            <select className="AnswerUpl" name='option' onChange={(e) => setoptionMoney(e.target.value)}>
                                <option className="AnswerUpl" value="Kosten:">Kosten: </option>
                                <option className="AnswerUpl" value="Ja">Ja</option>
                                <option className="AnswerUpl" value="Nee">Nee</option>
                            </select>
                            {/* question if the tool supports macOS */}
                            <p className="titelAnswere">Ondersteunt macOS: {val.optionMac}</p>
                            {/* update the tool */}
                            <select className="AnswerUpl" name='optionMac' onChange={(e) => setnewoptionMac(e.target.value)}>
                                <option className="AnswerUpl" value="OPTIES:">Opties:</option>
                                <option className="AnswerUpl" value="Ja">Ja</option>
                                <option className="AnswerUpl" value="Nee">Nee</option>
                            </select>
                            
                            <div className="PutBtnInline">
                                {/* delete an tool*/}
                                <button className="deletebtntool" onClick={() => deleteItem(val._id)}>Verwijder tool</button>
                                {/* Update an tool */}
                                <a href="/testtoolToevoegen"><button  onClick={() => UpdateItem(val._id)} className="UpdateBtn" >Update tool</button></a>
                            </div>
                        </div>
                        
                    );
                    })
                }
            </div>
        </div>
        </div>
    );
}

export default UploadTool;

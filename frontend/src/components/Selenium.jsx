import React, { useState} from "react";

// renders the RenderSeleniumpage
function RenderSeleniumpage(){

const[input, setinput] = useState({
    title:"",
    chrome:"",
    url:"",
    search:"",
    savefile:''

});

// Handle changes from the user input
function handleChange(event){
    const{name,value} = event.target;

    setinput(prevInput =>{
        return {
            ...prevInput,
            [name]: value
        };
    });
    console.log(input);
}

function save(){ 

    // Text for the basic script
    const safeText = 
    'const {Builder, By, Key, util} = require("seleniumwebdriver");'+"\n"+
    'require("'+input.title+'");' +"\n"+
    'async function example(){' +"\n"+
    'let driver = await new Builder().forBrowser("'+input.chrome+'");' +'\n'+
    'await driver.get("'+input.url+'");' +"\n"+
    'await driver.findElement(By.name("q")).sendKeys("'+input.search+'", Key.RETURN);}' +'\n'+
    'example(); ';

    // stores the item in an object to get it on the next page
    localStorage.setItem("textvalue", safeText);
    localStorage.setItem('Url', input.url)
    console.log('works'+safeText);
}

    return <div className='contain'>
            <div className='greenArray'>
                <div>
                <h1 className="TitleI">Selenium</h1>
                </div>
            </div>
            <div className="seleniumscript">
                <h1>Basic</h1>
                <p>Create a Script:</p>
                <div className="script">
                    <p>Welke browser zou je willen gebruiken? (chromedriver)</p>
                    <form action="JMeter">
                    {/* Input fields for the changes on a script */}
                    <input onChange={handleChange} id='txt' name='title' value={input.title} type="text" ></input>
                    <p>Welke browser zou je willen gebruiken? (chrome)</p>
                    <input onChange={handleChange} name='chrome' value={input.chrome} type="text" ></input>
                    <p>Welke Url zou je willen gebruiken om een test op uit te voeren? (http://example.nl)</p>
                    <input onChange={handleChange} name='url' value={input.url} type="text" ></input>
                    <p>Welke tekst zou je willen versturen?</p>
                    <input onChange={handleChange} name='search' value={input.search} type="text" ></input>
                    <br/>
                    <br/>
                    {/* save button and go to next page */}
                    <button onClick={save}>save</button>
                    </form>
                </div>
            </div>
        </div>
}

export default RenderSeleniumpage;
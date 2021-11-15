import React from "react";
import RenderTer from "./RenderTer";
import Enter from "./Enter";
import MapConsoleOutput from "./MapConsoleOutput";

// this renders the handmade console on next page / render
const Console = () => {
const inputText = React.useRef()
const [consoleOutput, onEnter] = Enter();

React.useEffect(()=>{
    inputText.current.value="";
    inputText.current.focus();
})

    return(
        <section className="console">
            <MapConsoleOutput consoleOutput ={consoleOutput}/>
            <div className="input-promt">
                <RenderTer />
                <input type="text" ref={inputText} onKeyPress={({target: {value},key})=>onEnter(value,key)}></input>
            </div>
        </section>
    )
};
export default Console;
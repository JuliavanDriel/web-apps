import React from "react";
import RenderTer from "./RenderTer";

const MapConsoleOutput = ({consoleOutput}) => {
const scrollRef = React.useRef()

React.useEffect(()=>{
    if(scrollRef.current )
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
})

return(
    <div className="console-Output" ref={scrollRef}>
        {consoleOutput.map((item,index) =>(
            <div key={index}>
            <RenderTer/>
            <span>{item}</span>
            </div>
        ))}
    
    </div>
)
}

export default MapConsoleOutput;
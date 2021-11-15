import React, { useState} from "react";
import Editor from "./Editor";

// render the script and extern website
function RenderJmeterpage(){
const [js, setJs] = useState('')
const uRl = localStorage.getItem("Url") ;

    return <div className='contain'>
                <div className='greenArray'>
                    <div>
                        <h1 className="TitleI">JMeter</h1>
                    </div>
                </div>

                <div className="pane top-pane">
                    {/* the language where the script on the website runs in */}
                    <Editor language= "javascript" displayName="JS"
                        value={js} onChange={setJs}></Editor>
                </div>
            
                <div className="pane">
                    {/* code where the extern website runs */}
                    <iframe title="url-website" src={uRl} height = '400' width='600'></iframe>
                </div> 
            </div>
}

export default RenderJmeterpage;
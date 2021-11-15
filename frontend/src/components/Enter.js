import React from "react";

const commands = {
    help: "help entry",
    quit: "quitting"
}

const Enter = () =>{
    // keep track of the users input
    const [consoleOutput, updateConsoleOutput] = React.useState([]);

    const onEnter = (value, key) =>{
        if(key === "Enter"){
            const newConsoleLine = commands[value] || "Invalid Command";
            return updateConsoleOutput(consoleOutput =>
                consoleOutput.concat[newConsoleLine]
                );
            }
    };
    return [consoleOutput, onEnter]
};
export default Enter;
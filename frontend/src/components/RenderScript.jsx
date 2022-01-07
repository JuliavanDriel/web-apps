import React from "react";
import RenderTer from "./RenderTer";
import Enter from "./Enter";
import MapConsoleOutput from "./MapConsoleOutput";

// renders the infopagee
function Renderpage() {
  const inputText = React.useRef();
  const [consoleOutput, onEnter] = Enter();

  React.useEffect(() => {
    inputText.current.value = "";
    inputText.current.focus();
  });

  return (
    <div className="contain">
      <div className="greenArray">
        <div>
          {/* <h1 className="TitleI">Render pagina voor terminal</h1>///////////////////////////////// */}
        </div>
      </div>
      {/* begin */}
      <div>Hello</div>
      <section className="console">
        <MapConsoleOutput consoleOutput={consoleOutput} />
        <div className="input-promt">
          <RenderTer />
          <input
            type="text"
            ref={inputText}
            onKeyPress={({ target: { value }, key }) => onEnter(value, key)}
          ></input>
        </div>
      </section>
      <input type="file"></input>
    </div>
  );
}

export default Renderpage;

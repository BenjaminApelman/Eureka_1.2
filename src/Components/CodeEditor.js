
import { useState } from "react";
import { flexbox } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import Split from 'react-split'

//Components
import { executeCode } from "../API/monaco";

//CSS
import "../Components_CSS/CodeEditor.css"

//JSON


export const CodeEditor = () => {

  const [code, setCode] = useState("for i in range(10):");
  const [output, setOutput] = useState(null);
      

  const runCode = async(language, userCode) => {
    try {
      const { run: result } = await executeCode(language, userCode);
      setOutput(result.output);} 
    catch (error) {
      console.log(error)
    }
  }

  const x = "python";

  return (
    <div className="CodeEditor">
      <Split className="split" direction="vertical" id="Vertical-Split">

        {/* Begin upper half (IDE) */}
        <div className="editor-wrapper" style={{  padding: "16px",  border: "5px solid #178D9F",  borderRadius: "12px",   width: "95%",  overflow: "auto",  display: flexbox }}>
            <Editor
              height="100%"
              theme="vs-dark"
              defaultLanguage="python"
              value={code} //Here is where code is being set
              onChange={(code) => setCode(code)} //Here is where code is being set
            />
          </div>
          {/* End upper half (IDE) */}

          {/* Begin lower half (output) */}
          <div className="Output">
            <div className="center-button">
              <button type="button" className="run-code-button" onClick={() => runCode(x,code)}>
                Run Code
              </button>
            </div>
              
            <div className="result-box">
              {output}
            </div>
          </div>
          {/* End lower half (output) */}

      </Split>
    </div>
  )
}



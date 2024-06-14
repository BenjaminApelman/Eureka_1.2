import { useState } from "react";


//Components
import { executeCode } from "../../API/monaco";
//CSS

//JSON

export default function Output({ editorRef, language }){

    const [output, setOutput] = useState(null);

    const runCode = async() => {
      const user_code = editorRef.current.getValue();
      try {
        const { run: result } = await executeCode(language, user_code);
        setOutput(result.output);} 
      catch (error) {
        console.log(error)
      }
    }
    

    return(
        <div className="Output">
            <div className="center-button">
              <button type="button" className="run-code-button" onClick={() => runCode()}>
                Run Code
              </button>
            </div>
              
            <div className="result-box">
              {output}
            </div>
          </div>
    );
}
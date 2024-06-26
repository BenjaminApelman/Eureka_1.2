
import { useRef, useState } from "react";
import { flexbox } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import Split from 'react-split'

//Components
import Output from "./Output";
//CSS
import "./CSS/CodeEditor.css"
//JSON
import { problem_description_and_code } from "../../Problems/StartingCode";




export const CodeEditor = ({problemName}) => {
  
  const editorRef = useRef();
  const onMount = (editor) => {
    editorRef.current = editor;
  };


  const curr_language = problem_description_and_code[problemName].language; 
  
  var code_template =  problem_description_and_code[problemName].startingCode;
  const [code, setCode] = useState(code_template);


  return (
    <div className="CodeEditor">
      <Split className="split" direction="vertical" id="Vertical-Split">

        <div className="editor-wrapper" 
          style={{ 
              padding: "16px", 
              border: "5px solid #178D9F",  
              borderRadius: "12px",  
              overflow: "auto",  // Adjust overflow handling as needed
              display: "flex"    // Use "flex" instead of "flexbox"
          }}>

          <Editor
            height="100%"
            theme="vs-dark"
            language = {problem_description_and_code[problemName].language}
            value={code} //Here is where code is being set
            onChange={(code) => setCode(code)} //Here is where code is being set
            onMount={onMount}
          />

        </div>

          <Output editorRef={editorRef} language={curr_language} problemName={problemName} />

      </Split>
    </div>
  )
}



import { useState } from "react";


//Components
import InputOutput from "./InputOutput";
import { RunCode } from "./RunCode";
import { ParseAPI } from "./ParseAPI"
import { GenerateTestCases } from "../TestingScripts/GenerateTestCases";
//CSS
import "./CSS/Output.css"
//JSON
import { test_cases } from "../TestingScripts/TestCases";

export default function Output({ editorRef, language, problemName }){

    const [output, setOutput] = useState([]);
    const [testCase, setTestCase] = useState(1);

  
    const RunCodeWrapper = async() =>{

      let user_code = editorRef.current.getValue();
      user_code = GenerateTestCases(language, user_code, problemName);

      console.log(">", user_code)
      const API_CALL =  await RunCode(language,user_code);
      const pared_API_call = ParseAPI(API_CALL);
      setOutput(pared_API_call);
    }

    return(
        <div className="Output">
           
              
            <div className="result-box">
              <div className="center-button">
              <button type="button" className="run-code-button" onClick={() => RunCodeWrapper()}>
                Run Code
              </button>
            </div>
              <div class="container">
                <div onClick={() => setTestCase(1)} class="item">Test 1</div>
                <div onClick={() => setTestCase(2)} class="item">Test 2</div>
                <div onClick={() => setTestCase(3)} class="item">Test 3</div>
              </div>


              Input:
              <InputOutput text={test_cases[problemName].input[testCase]}/>


              Expected Output:
              <InputOutput text={test_cases[problemName].expected_output[testCase]}/>

              Actual Output:
              <InputOutput text={output[testCase-1]} />

            </div>

            
        </div>
    );
}
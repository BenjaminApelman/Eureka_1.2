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


      const API_CALL =  await RunCode(language,user_code);
      const parsed_API_call = ParseAPI(API_CALL);
      setOutput(parsed_API_call);
    }

    return(
        <div className="Output">
           
              
            <div className="result-box">
              <div className="center-button">
              <button type="button" className="run-code-button" onClick={() => RunCodeWrapper()}>
                Run Code
              </button>
            </div>
              <div class="test-case-container">
                <div onClick={() => setTestCase(1)} class="test-case-button">Test 1</div>
                <div onClick={() => setTestCase(2)} class="test-case-button">Test 2</div>
                <div onClick={() => setTestCase(3)} class="test-case-button">Test 3</div>
              </div>


              <div className="box-headder">Input:</div>
              <InputOutput text={test_cases[problemName].input[testCase]}/>


              <div className="box-headder">Expected Output:</div>
              <InputOutput text={test_cases[problemName].expected_output[testCase]}/>

              <div className="box-headder">Actual Output:</div>
              <InputOutput text={output[testCase-1]} />

            </div>

            
        </div>
    );
}
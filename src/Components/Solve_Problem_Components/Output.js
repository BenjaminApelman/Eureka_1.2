import { useState, useEffect } from "react";


//Components
import InputOutput from "./InputOutput";
import { RunCode } from "./RunCode";
import { ParseAPI } from "./ParseAPI"
import { GenerateTestCases } from "../TestingScripts/GenerateTestCases";
import Grader from "./Grader";
//CSS
import "./CSS/Output.css"
//JSON
import { test_cases } from "../TestingScripts/TestCases";

export default function Output({ editorRef, language, problemName }){

    const [output, setOutput] = useState([]);
    const [testCase, setTestCase] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isCorrect, setIsCorrect] = useState([false, false, false])

    const allCorrect = isCorrect.every(correct => correct);
    const checkmark = '✓';

  
    const RunCodeWrapper = async() =>{
      setIsLoading(true)
      let user_code = editorRef.current.getValue();
      user_code = GenerateTestCases(language, user_code, problemName);

      const API_CALL =  await RunCode(language,user_code);
      if(API_CALL === -1){
        setOutput("failed to run code");
        setIsLoading(false);
      }
      else{
        const parsed_API_call = ParseAPI(API_CALL);
        setOutput(parsed_API_call);
        setIsLoading(false)
      }
    }

    useEffect(() =>{
      if (output.length > 0){
        const result = Grader(problemName, output);
        setIsCorrect(result)
        console.log(isCorrect)
      }
    }, [output])

    return(
        <div className="Output">
           
              
            <div className="result-box">
              <div className="center-button">

              {isLoading ? (  <div className="spinner"></div>) : 
                  (
                    <button type="button" className="run-code-button" onClick={() => {
                      RunCodeWrapper();
                    }}>
                        Run Code
                    </button>
                  )
              }


            </div>
              <div class="test-case-container">
                <div onClick={() => setTestCase(1)} className={`test-case-button ${isCorrect[0] ? 'test-case-button-correct' : ''}`}>Test 1</div>
                <div onClick={() => setTestCase(2)} className={`test-case-button ${isCorrect[1] ? 'test-case-button-correct' : ''}`}>Test 2</div>
                <div onClick={() => setTestCase(3)} className={`test-case-button ${isCorrect[2] ? 'test-case-button-correct' : ''}`}>Test 3</div>
                {allCorrect && (
                  <div className="green-checkmark-container">
                      <div className="green-checkmark">
                          {checkmark}
                      </div>
                  </div>
               )}
              
              </div>


              <div className="box-headder">Input:</div>
              <InputOutput text={test_cases[problemName].input[testCase]} language={language}/>


              <div className="box-headder">Expected Output:</div>
              <InputOutput text={test_cases[problemName].expected_output[testCase]} language={language}/>

              <div className="box-headder">Actual Output:</div>
              <InputOutput text={output[testCase-1]} language={language}/>

            </div>

            

            
        </div>
    );
}
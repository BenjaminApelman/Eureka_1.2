import { useState } from "react";


//Components
import { executeCode } from "../../API/monaco";
import InputOutput from "./InputOutput";
//CSS
import "./CSS/Output.css"
//JSON
import { test_cases } from "../../Problems/TestCases";
import { class_template } from "../../Problems/ClassTemplate";

export default function Output({ editorRef, language, problemName }){

    //Generate the framework to run the user code

    let structured_code = '\n'
    structured_code += class_template[language].init

   
    
    const [output, setOutput] = useState([]);
    const [testCase, setTestCase] = useState(1);

    const runCode = async(user_code) => {
      try {
        const { run: result } = await executeCode(language, user_code);
        if(result.stderr === ""){
          setOutput("Passed!");
        }
        else{
          setOutput(result.stderr)
        }
        return result

      } 
      catch (error) {
        console.log(error)
      }
    }

    //This guy could be tidied up a bit...  
    const runCodeWrapper = async() =>{

      let user_code = editorRef.current.getValue();

      if (language === 'python') {
          user_code += `${class_template[language].init}\n`;
          user_code += 'def run_test_case():\n';
          user_code += '    test_cases = [\n';
          
          for (let i = 1; i <= 3; i++) {
              user_code += `        ${test_cases[problemName].input[i]},\n`;
          }
          
          user_code += '    ]\n';
          user_code += '    res = [0, 0, 0]\n';
          user_code += `    for i in range(len(test_cases)):\n`;
          user_code += `        res[i] = user_code_instance.${test_cases[problemName].function_name}(test_cases[i])\n`;
          user_code += '    print("result777:",res)\n\n';
          user_code += 'run_test_case()';
      }
    
      const API_CALL =  await runCode(user_code);

      if(API_CALL.stderr != '' ){
        setOutput([API_CALL.stderr,API_CALL.stderr,API_CALL.stderr])
      }

      if(API_CALL.code === 0){
        try{
          
          let STD_OUT = API_CALL.stdout;

          const resultRegex = /result777:\s*\[.*?\]/; 
          const match = resultRegex.exec(STD_OUT);  // Use regex to extract the array content this avoid problems caused by user prints


          if (match && match.length == 1) {

             // Extract the array content from the first capture group
            let arrStr = match[0];

            
            // Extract array contents using regex
            let regex = /result777: (\[.*\])$/;
            let only_arr_regex = regex.exec(arrStr);
            let only_arr = only_arr_regex[1]


            //Replace single with double quotes to make a valid JSON
            only_arr = only_arr.replace(/'/g, '"');

            // Convert string to array
            let output_arr = JSON.parse(only_arr);
            setOutput(output_arr);
          }
          else {
            setOutput([API_CALL.stderr,API_CALL.stderr,API_CALL.stderr])
          }


        }
        catch{
          setOutput(["Unhandled Error","Unhandled Error","Unhandled Error"])
        }
      }


      
    }






    

    return(
        <div className="Output">
           
              
            <div className="result-box">
              <div className="center-button">
              <button type="button" className="run-code-button" onClick={() => runCodeWrapper()}>
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
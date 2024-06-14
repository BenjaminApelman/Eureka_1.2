import { useState } from "react";


//Components
import { executeCode } from "../../API/monaco";
//CSS

//JSON
import { test_cases } from "../../Problems/TestCases";
import { class_template } from "../../Problems/ClassTemplate";

export default function Output({ editorRef, language, problemName }){

    //Generate the framework to run the user code

    let structured_code = '\n'
    structured_code += class_template[language].init

    for(let i = 1; i<=3; i++){
     
      structured_code += class_template[language].variable 
      structured_code += i
      structured_code += ' = user_code_instance.'
      structured_code += test_cases[problemName].function_name
      structured_code += '('
      structured_code += test_cases[problemName].input[i]
      structured_code += ')'
      structured_code += '\n'
      structured_code += 'assert result' 
      structured_code +=i
      structured_code += ' == '
      structured_code += test_cases[problemName].expected_output[i]
      structured_code += '\n'

    }




    
    const [output, setOutput] = useState(null);

    const runCode = async() => {

      let user_code = editorRef.current.getValue();
      user_code += structured_code


      try {
        const { run: result } = await executeCode(language, user_code);
        if(result.stderr === ""){
          setOutput("Passed!");
        }
        else{
          setOutput("Failed.")
        }
      } 
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
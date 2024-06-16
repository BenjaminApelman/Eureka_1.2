//Components

//JSON
import { templates } from "./Templates";
import { test_cases } from "./TestCases";


export const GenerateTestCases = (language, user_code, problemName) =>{
    
    if (language === 'python') {
        user_code += `${templates[language].init}\n`;
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
        return user_code;
    }

}




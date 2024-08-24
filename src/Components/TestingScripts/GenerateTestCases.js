//Components

//JSON
import { templates } from "./Templates";
import { test_cases } from "./TestCases";


export const GenerateTestCases = (language, user_code, problemName) =>{


    //1d python input
    if (language === 'python' && test_cases[problemName].input_type === 'py1d') {
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


    //2d input python
    else if(language === 'python' && test_cases[problemName].input_type === 'py2d'){
        user_code += `${templates[language].init}\n`; //This could probably just be hard coded, the json seems stupid 
        user_code += 'def run_test_case():\n';
        user_code += '    test_cases = [\n';
        
        for (let i = 1; i <= 3; i++) {
            user_code += `        (${test_cases[problemName].input[i]}),\n`;
        }
        
        user_code += '    ]\n';
        user_code += '    res = [0, 0, 0]\n';
        user_code += `    for i in range(len(test_cases)):\n`;
        user_code += `        res[i] = user_code_instance.${test_cases[problemName].function_name}(test_cases[i][0],test_cases[i][1])\n`;
        user_code += '    print("result777:",res)\n\n';
        user_code += 'run_test_case()';

        return user_code;

    }

    //Data frame
    else if(language === 'python' && test_cases[problemName].input_type === 'dataframe'){
        user_code += `\n\nuser_code_instance = UserCode()\n`
        user_code += 'def run_test_case():\n';
        user_code += '    test_cases = [\n';
        for (let i = 1; i <= 3; i++) {
            user_code += `        (${test_cases[problemName].input[i]}),\n`;
        }
        user_code += '    ]\n';

        
        user_code += '    res = [0, 0, 0]\n';
        user_code += `    for i in range(len(test_cases)):\n`;
        user_code += `        res[i] = user_code_instance.${test_cases[problemName].function_name}(test_cases[i])\n`;
        
        user_code += '    print("{")\n'
        user_code += '    print("[")\n'
        user_code += '    print(res[0]["salary"].tolist())\n'
        user_code += '    print("BREAK")\n'
        user_code += '    print(",")\n'
        user_code += '    print(res[1]["salary"].tolist())\n'
        user_code += '    print("BREAK")\n'
        user_code += '    print(",")\n'
        user_code += '    print(res[2]["salary"].tolist())\n'
        user_code += '    print("]")\n'
        user_code += '    print("}")\n'



                          

        user_code += 'run_test_case()\n\n';

        return user_code
    }

    //CPP class
    else if (test_cases[problemName].input_type === "cpp_custom_class"){
        user_code += test_cases[problemName].test_code
        console.log("problem name: ", problemName)
        console.log("output type:", test_cases[problemName].output_type);
        console.log("test code-->", test_cases[problemName].test_code);
        return user_code
    }















}




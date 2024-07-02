//Probably want to add an ouput type instead of using input type


import { test_cases } from "../TestingScripts/TestCases"
//ouput is an array 

export default function Grader(problemName, output){

    const is_correct = [false, false, false]

    if(is_correct.length !== output.length){
        throw new Error("array length unequal") 
    }
    //standard output
    if(test_cases[problemName].output_type === 'standard'){
        for(let i = 1; i <= output.length; i++){
            //Numerical
            if( typeof test_cases[problemName].expected_output[i] == "number" &&
                Math.abs(output[i-1] - test_cases[problemName].expected_output[i]) < 0.1 ){
                is_correct[i-1] = true;
            }
            //String
            console.log(typeof test_cases[problemName].expected_output[i])
            if( typeof test_cases[problemName].expected_output[i] === "string" &&
                output[i-1] === test_cases[problemName].expected_output[i]){
                    is_correct[i-1] = true;
            }
            
        }
        return is_correct;
    }

 




    return is_correct
}





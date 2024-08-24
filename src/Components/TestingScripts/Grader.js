//Probably want to add an ouput type instead of using input type


import { test_cases } from "./TestCases"
//ouput is an array 

export default function Grader(problemName, output){


    

    const is_correct = [false, false, false]

    if(is_correct.length !== output.length){
        console.log(output)
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
            if( typeof test_cases[problemName].expected_output[i] === "string" &&
                output[i-1] === test_cases[problemName].expected_output[i]){
                    is_correct[i-1] = true;
            }
            
        }
        return is_correct;
    }
    //2d output 
    else if(test_cases[problemName].output_type === "2dnumpy" || test_cases[problemName].output_type == 'dataframe'){
        for(let i = 0; i < output.length; i++){
            let all_correct = true;
            if(output[i].length !== test_cases[problemName].expected_output[i+1].length){
                all_correct = false
            } 
            else {
                for(let j = 0; j<output.length; j++){
                    if(Math.abs(output[i][j] - test_cases[problemName].expected_output[i+1][j]) > 0.1){
                        all_correct = false;
                    }
                }
            }
            is_correct[i] = all_correct;
        }
        return is_correct
    }
    

 




    return is_correct
}





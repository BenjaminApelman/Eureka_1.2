
import { test_cases } from "./TestCases";

//For parsing 1d arrays in the form [a,b,c]
const parse1d = (API_CALL) => {
    if(API_CALL.stderr !== '' ){
        return[API_CALL.stderr,API_CALL.stderr,API_CALL.stderr]
    }

    if(API_CALL.code === 0){
        try{
    
        let STD_OUT = API_CALL.stdout;

        //Using result777: as a special identifier to grab the acutal output incase the user prints something
        // Use regex to extract the array content this avoid problems caused by user prints
        const resultRegex = /result777:\s*\[.*?\]/; 
        const match = resultRegex.exec(STD_OUT);  


        if (match && match.length === 1) {


            // Extract the array content from the first capture group
            let arrStr = match[0];
            // Extract array contents using regex
            let regex = /result777: (\[.*\])$/;
            let only_arr_regex = regex.exec(arrStr);



            let only_arr = only_arr_regex[1] //get match from capture group
            //Replace single with double quotes to make a valid JSON
            only_arr = only_arr.replace(/'/g, '"');
            
            // Convert string to array  
            let output_arr = JSON.parse(only_arr);

            return output_arr
        }
        else {
            return[API_CALL.stderr,API_CALL.stderr,API_CALL.stderr]
        }


        }
        catch{
            return["Cannot interpret output 1","Cannot interpret output 2","Cannot interpret output 3"]
        }
    }
}

const parse2dnp = (API_CALL) => {

    if(API_CALL.stderr !== '' ){
        return[API_CALL.stderr,API_CALL.stderr,API_CALL.stderr]
    }

    if(API_CALL.code === 0){
        try{

            let STD_OUT = API_CALL.stdout;

            //get the 3 arrays in the form array() array() array()
            const resultRegex = /array\(\[.*?\]\)\s*(?:[^]*?)?\s*array\(\[.*?\]\)\s*(?:[^]*?)?\s*array\(\[.*?\]\)/; 
            const array_match = resultRegex.exec(STD_OUT);  


            const arrayRegex = /array\(\[([^\]]*)\]\)/g;

            let match;
            const only_arr = [];
            
            // Executing the regex to find all matches
            while ((match = arrayRegex.exec(array_match)) !== null) {
                only_arr.push(match[1]); // Capture group 1 contains the content inside [...]
            }

            let twoDArray = only_arr.map(str => {
                // Split the string by ',' and trim each number
                let numbers = str.split(',').map(numStr => parseInt(numStr.trim(), 10));
                return numbers;
            });
            
            return twoDArray
        }catch{
            return ["error","error","error"]
        }
    }
};


const parsedf = (API_CALL) => {

    console.log(API_CALL)
    if (API_CALL.stderr !== '') {
        return [API_CALL.stderr, API_CALL.stderr, API_CALL.stderr];
    }

    if (API_CALL.code === 0) {
        try {
            
            console.log("in try block")
            console.log("API_CALL.stdout: ", API_CALL.stdout)


            const dfregex = /{([^}]+)}/;
            const arr2d_w_breaks = dfregex.exec(API_CALL.stdout)
            console.log ("arr2d_w_breaks: ", arr2d_w_breaks[1]);


            // Step 1: Clean up the string
            const cleanedString = arr2d_w_breaks[1].replace(/\s+/g, '').replace(/BREAK/g, '');
            console.log("cleanedString: ", cleanedString)

            // Step 2: Parse the string into a 2D array
            const array2D = JSON.parse(cleanedString);
            // Output the result
            console.log("array2D: ", array2D);

            return array2D
        } 
        catch (error) {
            console.error("Error parsing result777:", error);
            return ["x", "x", "x"];
        }
    }
};



export const ParseAPI = (API_CALL, problemName) =>{
    if(test_cases[problemName].output_type === "standard"){
        return parse1d(API_CALL)
    }
    else if(test_cases[problemName].output_type === "2dnumpy"){
        return parse2dnp(API_CALL)
    }
    else if(test_cases[problemName].output_type === "dataframe"){
        return parsedf(API_CALL)
    }
    else{
        return ["x","x","x"]
    }
}
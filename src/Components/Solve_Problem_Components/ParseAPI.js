

export const ParseAPI = (API_CALL) =>{

    console.log("in parseAPI")
    if(API_CALL.stderr !== '' ){
        return[API_CALL.stderr,API_CALL.stderr,API_CALL.stderr]
    }

    if(API_CALL.code === 0){
        try{
        
    
        let STD_OUT = API_CALL.stdout;
        console.log("STD_OUT", STD_OUT)

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


            console.log("only_arr", only_arr)
            // Convert string to array  
            let output_arr = JSON.parse(only_arr);
            console.log("output_arr", output_arr)
            console.log("out",output_arr)



            return output_arr
        }
        else {
            return[API_CALL.stderr,API_CALL.stderr,API_CALL.stderr]
        }


        }
        catch{
            return["Unhandled Errorxxx","Unhandlexxxd Error","Unhandlxxxed Error"]
        }
    }
}
import { executeCode } from "../../API/monaco";

export const RunCode = async(language, user_code) => {
    try {
      const { run: result } = await executeCode(language, user_code);
      return result
    } 
    catch (error) {
      return -1;
    }
  }

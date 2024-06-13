import axios from "axios";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {

    //May want to add an endpoint to dynmically update these
    const LANGUAGE_VERSIONS = {
        "python": "3.10.0",
    };
        
    const version = LANGUAGE_VERSIONS[language]

    const response = await API.post("/execute", {
        language: language,
        version: version,
        files: [
        {
            content: sourceCode,
        },
        ],
    });

  return response.data;
};
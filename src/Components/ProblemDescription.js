import { problem_description_and_code } from "../Problems/StartingCode";


export default function ProblemDescription({name}){

    const problem_description = problem_description_and_code[name].description;

    return(
        <div>
            <h1>{name}</h1>
            <h3>{problem_description}</h3>
        </div>
    );
}


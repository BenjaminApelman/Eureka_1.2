import { problem_description_and_code } from "../../Problems/StartingCode";

import 'katex/dist/katex.min.css'; // Import KaTeX CSS
//https://www.npmjs.com/package/react-latex (this is the LaTex library)


//Components
//CSS
import "./CSS/ProblemDescription.css"
//JSON

export default function ProblemDescription({name}){

    const problem_description = problem_description_and_code[name].description;
    var Latex = require('react-latex');
    return(
        <div>

            <h1 className="Problem-Name">
                 {name}:
            </h1>

            <div className="border" color="pink">
                <div className="text-background">
                    <div className="text">
                        <Latex>{problem_description}</Latex>
                    </div>
                </div>
            </div>


        </div>
    );
}


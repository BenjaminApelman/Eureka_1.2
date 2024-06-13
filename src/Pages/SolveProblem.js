
import { useLocation } from "react-router-dom";
import Split from 'react-split'

//Components
import Navbar from "../Components/NavBar";
import ProblemDescription from "../Components/ProblemDescription";
import { CodeEditor } from "../Components/CodeEditor";

//CSS
import "../Pages_CSS/SolveProblem.css"

//JSON

export default function SolveProblem() {
  
    const location = useLocation();
    const problemName = location.state.problemName;

    return (
        <div className="Problems-Div">
            <Navbar />
            <div className="Solve-Problem-Container">
                <Split className="split" id="Horizontal-Split">
                    <ProblemDescription name = {problemName}/>
                    <CodeEditor />
                </Split>
            </div>
        </div>
    );
}


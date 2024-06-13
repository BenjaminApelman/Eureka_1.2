
import { useLocation } from "react-router-dom";
import Split from 'react-split'
import '../Pages_CSS/SolveProblem.css'

//Components
import Navbar from "../Components/NavBar";
import ProblemDescri from "../Components/ProblemDescription";
//CSS
import '../Pages_CSS/Problems.css'

//JSON

export default function SolveProblem() {
    const location = useLocation();
    const problemName = location.state.problemName
    return (
        <div className="Problems-Div">
            <Navbar />
            <div>
              <Split className="split">
                  <ProblemDescri name = {problemName}/>
                  <div>Code edditor</div>
              </Split>
            </div>
        </div>
    );
}


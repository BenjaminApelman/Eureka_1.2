
import { useLocation } from "react-router-dom";

//Components
import Navbar from "../Components/NavBar";

//CSS
import '../Pages_CSS/Problems.css'

//JSON

export default function SolveProblem() {
    const location = useLocation();
    const { problemName } = location.state;
    console.log(location)
    return (
        <div className="Problems-Div">
            <Navbar />
            <div>
                Name: {problemName}
            </div>
        </div>
    );
}
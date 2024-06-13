
import Navbar from "../Components/NavBar"
import ProblemTable from "../Components/ProblemTable"

//Components

//CSS
import '../Pages_CSS/Problems.css'

//JSON

export default function Problems(){
    return(
        <div className="Problems-Div">
            <Navbar/>
            <ProblemTable/>
        </div>
    )
}
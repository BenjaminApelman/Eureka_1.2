
import Navbar from "../Components/NavBar"
import ProblemTable from "../Components/ProblemTable"


import '../Pages_CSS/Problems.css'
export default function Problems(){
    return(
        <div className="Problems-Div">
            <Navbar/>
            <ProblemTable/>
        </div>
    )
}

import Navbar from "../Components/NavBar"
import ProblemTable from "../Components/ProblemTable"

//Components
import QuoteBox from "../ProblemsComponents/QuotesBox"
//CSS
import '../Pages_CSS/Problems.css'

//JSON

export default function Problems(){
    return(
        <div className="Problems-Div">
            <Navbar/>
            <QuoteBox />
            <ProblemTable/>
        </div>
    )
}
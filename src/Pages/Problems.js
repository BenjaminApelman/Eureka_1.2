
import Navbar from "../Components/NavBar"
import ProblemTable from "../Components/ProblemTable"

//Components
import QuoteBox from "../Components/ProblemsComponents/QuotesBox"
import Search from "../Components/ProblemsComponents/Search"
//CSS
import '../Pages_CSS/Problems.css'

//JSON

export default function Problems(){
    return(
        <div className="Problems-Div">
            <Navbar/>
            <QuoteBox />
            <Search className="search"/>
        </div>
    )
}
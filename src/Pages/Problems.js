
import Navbar from "../Components/NavBar"

//Components
import QuoteBox from "../Components/ProblemsComponents/QuotesBox"
import Search from "../Components/ProblemsComponents/Search"
//CSS
import '../Pages_CSS/Problems.css'

//JSON

/*
    NOTE: If you are looking for the problem table, it is rendered within <Search/>
    
    This is because the argments of search (difficulty, discipline, ect) must be passed to the problem table to render 
    only what the user has searched for. 
*/

export default function Problems(){
    return(
 
        <div className="Problems-Div">
            <Navbar/>
            <QuoteBox />
            <Search className="search"/> 
           
        </div>
    )
}
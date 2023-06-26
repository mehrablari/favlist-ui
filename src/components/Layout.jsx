
// import AnswerRef from "../utils/AnswerRef";
import AnsweredList from "./questionbox/AnsweredList";
import Searchbox from "../utils/Searchbox";
import Suggestion from "../utils/Suggestion";
import CardContainer from "./Card/CardContainer";
import NavBar from "./NavBar";
import TinderCards from "./Card/TinderCards";
import Navbarex from "./Navbarex";



const Layout = () => {
  
  return (
    <div >
      <NavBar />
      {/* <Navbarex /> */}
      <CardContainer />
      <Searchbox />
      <Suggestion />
      <AnsweredList />
      <TinderCards />
      
      
  
      
    </div>
  )
}

export default Layout
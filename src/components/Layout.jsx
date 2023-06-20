
// import AnswerRef from "../utils/AnswerRef";
import AnsweredList from "./questionbox/AnsweredList";
import Searchbox from "../utils/Searchbox";
import Suggestion from "../utils/Suggestion";
import CardContainer from "./Card/CardContainer";
import NavBar from "./NavBar";
import TinderCards from "./Card/TinderCards";


const Layout = () => {
  return (
    <>
      <NavBar />
      <CardContainer />
      <Searchbox />
      <Suggestion />
      <AnsweredList />
      {/* <AnswerRef /> */}
      <div className="overflow-hidden">

        <TinderCards />
      </div>
      
    </>
  )
}

export default Layout
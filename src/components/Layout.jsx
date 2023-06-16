
// import AnswerRef from "../utils/AnswerRef";
import AnsweredList from "./questionbox/AnsweredList";
import Answers from "./questionbox/Answers";
import Searchbox from "../utils/Searchbox";
import Suggestion from "../utils/Suggestion";
import CardContainer from "./Card/CardContainer";
import NavBar from "./NavBar";


const Layout = () => {
  return (
    <>
      <NavBar />
      <CardContainer />
      <Searchbox />
      <Suggestion />
      <Answers />
      <AnsweredList />
      {/* <AnswerRef /> */}
      
    </>
  )
}

export default Layout
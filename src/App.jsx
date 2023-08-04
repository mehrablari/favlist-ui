import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import Layout from "./components/Layout";
import Answers from "./components/questionbox/Answers";
import Preview from "./components/Questionpreview/Preview";
import  RankedAnswers from "./components/Submitted/RankedAnswers"
import Submitted from "./components/Submitted/Submitted";
import AnswerGraphics from "./components/AnswerGraphic/AnswerGraphic";
import ClosedQuestion from "./components/closedquestion/ClosedQuestion";
import AggregateAnswers from "./components/questionbox/AggregateAnswers";
import Answered from "./components/Answered/Answered";
import ClosedInfo from "./components/closedquestion/ClosedInfo";
import FilterContainer from "./components/closedquestion/Filter/FilterContainer";
import NoMatch from "./NoMatch";
import FilterPage from "./components/closedquestion/Filter/FilterPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route path="/" element={<Layout />} />
      {/* <Route path="/answers" element={<Answers />}/> */}
      <Route path="/preview" element={<Preview />} />
      <Route path="/submitted" element={<Submitted />} />
      <Route path="/answergraphics" element={<AnswerGraphics />} />
      <Route path="/rankedanswers" element={<RankedAnswers />} />
      <Route path="/closedquestion" element={<ClosedQuestion />} />
      <Route path="/aggregateanswers" element={<AggregateAnswers />} />
      <Route path="/answered" element={<Answered />} />
      <Route path="/closedinfo" element={<ClosedInfo />} />
      <Route path="/filtercontainer" element={<FilterContainer />} />
      <Route path="/filterpage" element={<FilterPage />} />
      <Route path="/closedinfo/:id" element={<ClosedInfo />} />
      {/* <Route path="*" element={<NoMatch />} /> */}
      <Route path="/answered/:id" element={<Answered />} />
      
    </>
    
  )
);

const App = () => {
  return (
    <div>
      <div className="bg-primary font-bold text-lg text-gray font-baloo">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App;
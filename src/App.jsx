import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import Layout from "./components/Layout";

import Preview from "./components/Questionpreview/Preview";
import Submitted from "./components/Submitted/Submitted";
import AnswerGraphics from "./components/AnswerGraphic/AnswerGraphic";
import ClosedQuestion from "./components/closedquestion/ClosedQuestion";
import ClosedInfo from "./components/closedquestion/ClosedInfo";
import FilterContainer from "./components/closedquestion/Filter/FilterContainer";
import NoMatch from "./NoMatch";
import FilterPage from "./components/closedquestion/Filter/FilterPage";
import { DataProvider } from "./context/DataContexts";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route path="/" element={<Layout />} />
      {/* <Route path="/answers" element={<Answers />}/> */}
      <Route path="/preview" element={<Preview />} />
      <Route path="/submitted" element={<Submitted />} />
      <Route path="/answergraphics" element={<AnswerGraphics />} />
      {/* <Route path="/rankedanswers" element={<RankedAnswers />} /> */}
      <Route path="/closedquestion" element={<ClosedQuestion />} />
      <Route path="/closedinfo" element={<ClosedInfo />} />
      <Route path="/filtercontainer" element={<FilterContainer />} />
      <Route path="/filterpage" element={<FilterPage />} />
      <Route path="/closedinfo/:id" element={<ClosedInfo />} />
      <Route path="*" element={<NoMatch />} />
      
    </>
    
  )
);

const App = () => {
  return (
    <DataProvider>
    <div>
      <div className="bg-primary font-bold text-lg text-gray font-baloo">
        <RouterProvider router={router} />
      </div>
    </div>
    </DataProvider>
  )
}

export default App;
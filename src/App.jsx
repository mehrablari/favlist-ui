import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Settings from "./utils/Settings"

import Layout from "./components/Layout";
import Answers from "./components/questionbox/Answers";
import Background from "./utils/Background";
import Preview from "./components/Questionpreview/Preview";
import Submit from "./components/Submitted/Submit";
import AnswerGraphics from "./components/AnswerGraphic/AnswerGraphic";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} />
      <Route path="/answers" element={<Answers />}/>
      <Route path="/background" element={<Background />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="/answergraphics" element={<AnswerGraphics />} />
    </>
    
  )
);

const App = () => {
  return (
    <div className="bg-primary font-bold text-lg text-gray font-baloo">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
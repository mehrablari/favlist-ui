import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import Answers from "./components/questionbox/Answers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} />
      <Route path="/answers" element={<Answers />}/>
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
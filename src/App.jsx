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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} />
      <Route path="/answers" element={<Answers />}/>
      <Route path="/background" element={<Background />} />
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
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    </Route>
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



/* eslint-disable react/prop-types */
import {
  
  Route,
  useNavigate,
  Routes,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";

// import Preview from "./components/Questionpreview/Preview";
import Submitted from "./components/Submitted/Submitted";
import AnswerGraphics from "./components/AnswerGraphic/AnswerGraphic";
import ClosedQuestion from "./components/closedquestion/ClosedQuestion";
import ClosedInfo from "./components/closedquestion/ClosedInfo";
import FilterContainer from "./components/closedquestion/Filter/FilterContainer";
import NoMatch from "./NoMatch";
import FilterPage from "./components/closedquestion/Filter/FilterPage";
import { DataProvider } from "./context/DataContexts";
import Skeleton from "./utils/Skeleton";



const App = () => {
  const navigate = useNavigate()
  const Preview = lazy(() => import('./components/Questionpreview/Preview'))
  const Submitted = lazy(() => import('./components/Submitted/Submitted'))
  const AnswerGraphics = lazy(() => import('./components/AnswerGraphic/AnswerGraphic'))
  
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/closedquestion" element={<ClosedQuestion />} />
        <Route path="/closedinfo" element={<ClosedInfo />} />
        <Route path="/filtercontainer" element={<FilterContainer />} />
        <Route path="/filterpage" element={<FilterPage />} />
        <Route path="/closedinfo/:id" element={<ClosedInfo />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="answergraphics" element={
          <ErrorBoundary
            FallbackComponent={NoMatch}
            onReset={() => navigate('/')}
          >
            <Suspense fallback={<Skeleton />}>
              <AnswerGraphics />
            </Suspense>
          </ErrorBoundary>}
        />
        <Route path="submitted" element={
          <ErrorBoundary
            FallbackComponent={NoMatch}
            onReset={() => navigate('/')}
          >
            <Suspense fallback={<Skeleton />}>
              <Submitted />
            </Suspense>
          </ErrorBoundary>}
        />
        <Route path="preview" element={
          <ErrorBoundary
            FallbackComponent={NoMatch}
            onReset={() => navigate('/')}
          >
            <Suspense fallback={<Skeleton />}>
              <Preview />
            </Suspense>
          </ErrorBoundary>}
        />

   
      </Routes>
  
    </DataProvider>
  );
};

export default App;

/* eslint-disable react/prop-types */
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/Layout";
import ClosedQuestion from "./components/closedquestion/ClosedQuestion";
import ClosedInfo from "./components/closedquestion/ClosedInfo";
import FilterContainer from "./components/closedquestion/Filter/FilterContainer";
import Submitted from "./components/Submitted/Submitted";
import NoMatch from "./NoMatch";
import FilterPage from "./components/closedquestion/Filter/FilterPage";
import { DataProvider } from "./context/DataContexts";
import Skeleton from "./utils/Skeleton";
import TermsAndConditions from "./components/TermsAndConditions/Terms"
import HowItWorks from "./components/HowItWorks/HowItWorks"
import About from "./components/About/About";
import Quiz from "./components/PubQuiz/quiz";
import Home from "./components/Home/home";
import NewLayout from "./components/NewLayout/new";
import NewPreview from "./components/Preview/new-preview";
const App = () => {
  const navigate = useNavigate();

  const Preview = lazy(() => import("./components/Questionpreview/Preview"));
  // const Submitted = lazy(() => import("./components/Submitted/Submitted"));
  const AnswerGraphics = lazy(() =>
    import("./components/AnswerGraphic/AnswerGraphic")
  );

  
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     console.log(event)
  //     // By not setting event.returnValue, we do not trigger the confirmation dialog
  //     // Alternatively, for clarity, you can explicitly set it to undefined
  //     // event.returnValue = undefined;
  //     event.currentTarget.confirm()
  //     event.preventDefault()
  //     event.returnValue = 'okk'
  //   };
  
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);
  return (
    <DataProvider>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/closedquestion" element={<ClosedQuestion />} />
        <Route path="/submitted" element={<Submitted />} />
        <Route path="/closedinfo" element={<ClosedInfo />} />
        <Route path="/filtercontainer" element={<FilterContainer />} />
        <Route path="/filterpage" element={<FilterPage />} />
        <Route path="/closedinfo/:id" element={<ClosedInfo />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Quiz />}/>
        {/* <Route path="/home" element={<Home />}/> */}
        <Route path="/answer" element={<Layout />}/>
        <Route path="/new-preview" element={<NewPreview />}/>
        <Route
          path="answergraphics"
          element={
            <ErrorBoundary
              FallbackComponent={NoMatch}
              onReset={() => navigate("/")}
            >
              <Suspense fallback={<Skeleton />}>
                <AnswerGraphics />
              </Suspense>
            </ErrorBoundary>
          }
        />

        <Route
          path="preview"
          element={
            <ErrorBoundary
              FallbackComponent={NoMatch}
              onReset={() => navigate("/")}
            >
              <Suspense fallback={<Skeleton />}>
                <Preview />
              </Suspense>
            </ErrorBoundary>
          }
        />

        {/* <Route
          path="submitted"
          element={
            <ErrorBoundary
              FallbackComponent={NoMatch}
              onReset={() => navigate("/")}
            >
              <Suspense fallback={<Skeleton />}>
                <Submitted />
              </Suspense>
            </ErrorBoundary>
          }
        /> */}
      </Routes>
    </DataProvider>
  );
};

export default App;

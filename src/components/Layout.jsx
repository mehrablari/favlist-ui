
// import AnswerRef from "../utils/AnswerRef";
import AnsweredList from "./questionbox/AnsweredList";
import Searchbox from "../utils/Searchbox";
import Suggestion from "../utils/Suggestion";
import CardSwipeContainer from "./Card/CardSwipeContainer";
import NavBar from "./NavBar";

import { useState, useEffect } from "react";
import axios from "axios";



const Layout = () => {

    const [apiData, setApiData] = useState([]);

    const [activeAnswerJson, setActiveAnswerJson] = useState(null)

    const handleSwipe = (activeAnswerJson) => {
      setActiveAnswerJson(activeAnswerJson)

    }
    //Create handleSubmission

    //pass handleSubmission as props to searchbox

    //In searchbox, pass data submitted to the the handleSubmission passed in from layout

    //in layout create a state object to manage submitted value


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://35.209.30.214:8080/QUESTIONS-SERVICE/api/v1/questions",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
            body: JSON.stringify({
              apiData: apiData,
            }),
          }
        );
        setApiData(response.data);
        setActiveAnswerJson(response.data[0].answersJson);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <div >
      <NavBar />
      <CardSwipeContainer questionData={apiData} handleSwipe={handleSwipe}/>
      <Searchbox answerData={apiData} activeAnswerJson={activeAnswerJson}/>
      <Suggestion />
      <AnsweredList  />
    </div>
  )
}

export default Layout
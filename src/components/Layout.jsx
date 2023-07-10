
// import AnswerRef from "../utils/AnswerRef";
import AnsweredList from "./questionbox/AnsweredList";
import Searchbox from "../utils/Searchbox";
import Suggestion from "../utils/Suggestion";
import CardSwipeContainer from "./Card/CardSwipeContainer";
import NavBar from "./NavBar";
import AppContext from "./context/AppContext";
import { useState, useEffect } from "react";
import axios from "axios";
import AnswerSettings from "../questionbox/AnswerSettings";




const Layout = () => {

    const [apiData, setApiData] = useState([]);

    const [activeAnswerJson, setActiveAnswerJson] = useState(null)
    const [selectedOption, setSelectedOption] = useState([])
    // Define the submit state in the App component
  



    const handleSwipe = (activeAnswerJson) => {
      setActiveAnswerJson(activeAnswerJson)
    }


    const handleSubmission = (selectedOption) => {
      setSelectedOption(selectedOption)
    }

    

    // console.log("submitted",handleSubmission())
    
    //Create handleSubmission

    //pass handleSubmission as props to searchbox

    //In searchbox, pass data submitted to the the handleSubmission passed in from layout

    //in layout create a state object to manage submitted value
//https://35.209.30.214:443

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://35.209.30.214:443/api/v1/questions",
        
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
        setSelectedOption(response.data[0].answersJson[0])
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <div >
      <NavBar />
      <CardSwipeContainer questionData={apiData} handleSwipe={handleSwipe} />
      <Searchbox answerData={apiData} activeAnswerJson={activeAnswerJson} handleSubmission={handleSubmission}  />
      <Suggestion />
      <AnsweredList answerSelected={selectedOption} handleSubmission={selectedOption}  />
    </div>
  )
}

export default Layout
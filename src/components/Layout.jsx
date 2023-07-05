
// import AnswerRef from "../utils/AnswerRef";
import AnsweredList from "./questionbox/AnsweredList";
import Searchbox from "../utils/Searchbox";
import Suggestion from "../utils/Suggestion";
import CardSwipeContainer from "./Card/CardSwipeContainer";
import NavBar from "./NavBar";
import TinderCards from "./Card/TinderCards";
import { useState, useEffect } from "react";
import axios from "axios";



const Layout = () => {

    const [apiData, setApiData] = useState([]);


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
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(apiData);
  
  return (
    <div >
      <NavBar />
      <CardSwipeContainer questionData={apiData}/>
      <Searchbox answerData={apiData}/>
      <Suggestion />
      <AnsweredList />
      {/* <TinderCards /> */}
      
      
  
      
    </div>
  )
}

export default Layout
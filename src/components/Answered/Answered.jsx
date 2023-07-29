
import AnsweredResponse from '../../utils/AnsweredResponse';

import NavBar from '../Navbar';
import { useState, useEffect, useContext } from 'react';
import Logo from '../../assets/images/logoAllWhite.png'
import axios from 'axios';
import AnsweredCard from './AnsweredCard';
import AnswerProvided from './AnswerProvided';
import { LayoutContext } from '../Layout';


const Answered = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [apiData, setApiData] = useState([]);
	const [answers, setAnswers] = useState([]);


  //const {setIsAnswered} = useContext(LayoutContext);
  //console.log(333, setIsAnswered);

	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dev.pacerlabs.co/api/v1/submissions/23",

          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
        setIsLoading(false);
		setApiData(response.data.data)
		setAnswers(response.data.data.answers)
    // setIsAnswered(!isAnswered)
		// console.log(1243,response.data.data[0]?.answers)
		
       
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center align-middle mx-auto pt-[300px] bg-neutral h-screen">
        <img src={Logo} alt="loading logo" className=" h-[70px]" />
      </div>
    );
  }
	

  return (
	<>
	<NavBar />
	<div className='bg-neutral'>
		
		<AnsweredCard cardData={apiData} />
		<AnsweredResponse />
		
		<AnswerProvided answerData={answers}/>
		
		{/* <AggregateAnswers aggreggateAnswers={answered} /> */}
	</div>
	</>
  )
}

export default Answered
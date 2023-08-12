
import AnsweredResponse from '../../utils/AnsweredResponse';

import NavBar from '../Navbar';
import { useState, useEffect } from 'react';
import Logo from '../../assets/images/logoAllWhite.png'
import axios from 'axios';
import AnsweredCard from './AnsweredCard';
import AnswerProvided from './AnswerProvided';
import { useParams } from 'react-router-dom';


const Answered = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [apiData, setApiData] = useState([]);
	const [answers, setAnswers] = useState([]);
  const { id } = useParams();
 

	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dev.pacerlabs.co/api/v1/submissions/${id}`,
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
      
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center align-middle mx-auto pt-[300px] bg-neutral h-screen w-full">
        <img src={Logo} alt="loading logo" className=" h-[40px] w-[100px]" />
      </div>
    );
  }
	

  return (
	<>
	<NavBar />
	<div className='bg-neutral font-sans'>
		
		<AnsweredCard cardData={apiData} />
		<AnsweredResponse />
		
		<AnswerProvided answerData={answers} apiData={apiData}/>
	</div>
	</>
  )
}

export default Answered
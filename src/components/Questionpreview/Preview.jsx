import Video from "../../assets/icons/video.svg"
import ArrowBack from "../../assets/icons/arrowback.svg"
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const Preview = () => {
  //get location of url & data sent via state
  const location = useLocation();
  const dataContainer = location.state;
  const questionText = dataContainer.questionName;


  // console.log("this is preview % id",dataContainer)

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async () => {
    
    
    setIsSubmitting(true);

   
    const file = "https://media.giphy.com/media/l4q8cJzGdR9J8w3hS/giphy.gif";
    
    const answerSubmit = {
      questionId: dataContainer.questionId,
      answersJson: dataContainer.answers,
      ranked: false,
      graphicUrl:file
    };

    fetch("https://dev.pacerlabs.co/api/v1/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body:JSON.stringify(formData)
      body: JSON.stringify(answerSubmit),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data && data.status) {
          if (data && typeof data.status === "string" && data.status.toLowerCase() === "success") {
            localStorage.removeItem("answers")
            localStorage.removeItem("selectedQuestionIndex")
           
        
            setIsSuccessful(true);
          }else {
          
            navigate(`/answered/${dataContainer.questionId}`);
          }
        } 

      })
      .catch((error) => toast.error(error.message))
      // .catch((error) => console.log("error: ", error));
   
  };
  
  useEffect(()=> {
    if(isSuccessful) {
      navigate("/submitted" )
    }


  }, [isSuccessful, navigate])


  return (
    <div className="flex flex-col p-[40px] bg-primary  mx-auto md:w-[400px] w-[500px] sm:w-[340px] h-screen">
      <div className="mx-auto ">
        <h1 className="text-neutral font-[700] text-[13px] leading-5 p-[20px]">
          PREVIEW YOUR ANSWERS
        </h1>
      </div>
      <div className="flex flex-col bg-neutral rounded-lg px-[10px] py-[20px] gap-[16px]">
        <div className="flex flex-col">
          <h1 className="font-[500] text-[13px] text-text-blue">Question</h1>
          <h1 className="font-[700] text-[18px] leading-[24px] text-gray-list py-[10px]">
            {questionText}
          </h1>
          {/* <hr className="w-full text-primary pt-[20px]" /> */}
          <div className="flex flex-row flex-end pt-[10px]">
            <img src={Video} alt="video" className="pr-[5px]" />

            <h1 className="font-[500] text-[13px] text-text-blue">
              Your preview video
            </h1>
          </div>
        </div>
        <div className="h-[144px] bg-gray-lighter py-0 rounded-lg"></div>
        
        <form onClick={handleSubmit} className="flex justify-center align-middle max-w-[287px] w-[287px] sm:w-[220px] mx-auto px-[20px] bg-primary rounded-lg  m-[10px] ">
          <div className="">
            <button
              disabled={isSubmitting}
              type="submit"
              className="h-[40px] text-center  font-[600] flex-grow flex-shrink text-[14px] text-neutral"
            >
              {isSubmitting ? "Submitting..." : "Submit Answers"}
            </button>
          </div>
        </form>

        <div className="flex flex-row items-center justify-between mx-auto rounded-lg h-[40px] p-[10px] bg-button-inactive w-[180px]">
          <img src={ArrowBack} alt="" className="h-full pr-[2px]" />
          <Link to="/" className="text-[12px] font-semibold text-primary-light">
            Go back to edit answers
          </Link>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Preview;

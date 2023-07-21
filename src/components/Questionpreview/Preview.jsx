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

  console.log("this is preview % id",dataContainer)

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async () => {
    
    setIsSubmitting(true);

    // const formData = new FormData();
    // formData.append("questionId", dataContainer.questionId);
    // formData.append("ranked", "false");
    // const file = "https://media.giphy.com/media/l4q8cJzGdR9J8w3hS/giphy.gif";
    // formData.append("file", file);

    // // // Append answers to form data
    // dataContainer.answers.forEach((answer, index) => {
    //   formData.append(`answers[${index}]`, answer);
    // });
    const file = "https://media.giphy.com/media/l4q8cJzGdR9J8w3hS/giphy.gif";
    
    const answerSubmit = {
      questionId: dataContainer.questionId,
      answersJson: dataContainer.answers,
      ranked: false,
      graphicUrl:file
    };

    fetch("https://35.209.30.214:443/api/v1/submissions", {
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
            toast.success(data.message);
            setIsSuccessful(true);

          } else {
            toast.error(data.message);
          }
        } 


      })
      .catch((error) => toast.error(error.message))
      // .catch((error) => console.log("error: ", error));
   
  };
  useEffect(()=> {
    if(isSuccessful) {
      navigate("/submit")
    }

  }, [isSuccessful, navigate])


  return (
    <div className="flex flex-col p-[40px] bg-primary  mx-auto w-[327px]">
      <div className="mx-auto ">
        <h1 className="text-neutral font-[700] text-[13px] p-[20px]">
          PREVIEW YOUR ANSWERS
        </h1>
      </div>
      <div className="flex flex-col bg-neutral rounded-lg p-[20px] gap-[16px]">
        <div className="flex flex-col">
          <h1 className="font-[500] text-[13px] text-text-blue">Questions</h1>
          <h1 className="font-[700] text-[18px] leading-[24px]">
            {questionText}
          </h1>
          <div className="flex flex-row flex-end pt-[20px]">
            <img src={Video} alt="video" className="pr-[10px]" />

            <h1 className="font-[500] text-[13px] text-text-blue">
              Your preview video
            </h1>
          </div>
        </div>
        <div className="h-[144px] bg-gray-lighter p-[20px] rounded-lg"></div>
        
        <form onClick={handleSubmit} className="flex justify-center align-middle max-w-[287px] bg-primary rounded-lg  m-[10px] ">
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

        <div className="flex flex-row items-center justify-between mx-auto rounded-lg h-[40px] p-[10px] bg-button-inactive max-w-[193px]">
          <img src={ArrowBack} alt="" className="h-full pr-[5px]" />
          <Link to="/" className="text-[12px] font-semibold text-primary">
            Go back to edit answers
          </Link>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Preview;





    // try {
    //   const response = await fetch(
    //     "https://35.209.30.214:443/api/v1/submissions",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         questionId: dataContainer.questionId,
    //         answersJson: dataContainer.answers,
    //         ranked:false,
    //         }),
    //     }
    //   );

    //   if (response.ok) {
    //     // Success
    //     console.log("Answers submitted successfully");
    //     toast.success("Answers submitted successfully");
    //   } else {
    //     // Error
    //     console.log("Failed to submit answers");
    //     toast.error("Failed to submit answers");
    //   }
    // } catch (error) {
    //   console.log("Error:", error);
    //   toast.error("Error: " + error.message);
    // }


    

import Video from "../../assets/icons/video.svg"
import ArrowBack from "../../assets/icons/arrowback.svg"
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


const Preview = () => {
  //get location of url & data sent via state
  const location = useLocation();
  const dataContainer = location.state;

  //console.log("this is preview % id",dataContainer)

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://35.209.30.214:443/api/v1/submissions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questionId: dataContainer.questionId,
            answersJson: dataContainer.answers,
            ranked:false,
            }),
        }
      );

      if (response.ok) {
        // Success
        console.log("Answers submitted successfully");
      } else {
        // Error
        console.log("Failed to submit answers");
      }
    } catch (error) {
      console.log("Error:", error);
    }

    setIsSubmitting(false);
  };


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
            What are your favourite television shows of all time?
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
          <Link to="/submit" className="">
            <button
              disabled={isSubmitting}
              type="submit"
              className="h-[40px] text-center  font-[600] flex-grow flex-shrink text-[14px] text-neutral"
            >
              {isSubmitting ? "Submitting..." : "Submit Answers"}
            </button>
          </Link>
        </form>

        <div className="flex flex-row items-center justify-between mx-auto rounded-lg h-[40px] p-[10px] bg-button-inactive max-w-[193px]">
          <img src={ArrowBack} alt="" className="h-full pr-[5px]" />
          <Link to="/" className="text-[12px] font-semibold text-primary">
            Go back to edit answers
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Preview;
// import ArrowBack from "../../assets/icons/arrowback.svg";
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";

// const Preview = () => {
//   const location = useLocation();
//   const dataContainer = location.state;
//   console.log("this is preview", dataContainer);

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const generateId = () => {
//     // Generate a unique ID for the submission
//     const id = Date.now().toString();
//     return id;
//   };

//   const handleSubmit = async () => {
//     setIsSubmitting(true);

//     try {
//       const submission = {
//         id: generateId(),
//         answersJson: dataContainer,
//         ranked: "false"
//       };

//       const response = await fetch("https://35.209.30.214:443/api/v1/submissions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(submission),
//       });

//       if (response.ok) {
//         console.log("Answers submitted successfully");
//       } else {
//         console.log("Failed to submit answers");
//       }
//     } catch (error) {
//       console.log("Error:", error);
//     }

//     setIsSubmitting(false);
//   };

//   // Rest of the code...

//   return (
//     <div className="flex flex-col p-[40px] bg-primary mx-auto w-[327px]">
//       {/* Rest of the code... */}
//     </div>
//   );
// };

// export default Preview;


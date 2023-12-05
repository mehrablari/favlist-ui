import Video from "../../assets/icons/video.svg";
import Home from "../../assets/icons/Home.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import "./submited.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RWebShare } from "react-web-share";
// import useQuestions from "../../hooks/useQuestions";
import DataContext from "../../context/DataContexts";

const Submit = () => {

  const { setEditQuestion} = useContext(DataContext);


  const location = useLocation();
  const graphicUrl = location.state?.graphicUrl;
  const graphicFile = location.state?.graphicFile;

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 915px)").matches ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
  );

  useEffect(() => {
    setIsMobile(
      window.matchMedia("(max-width: 915px)").matches ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
    );
  }, []);
  // const { mutate: mutateQuestion} = useQuestions()

  const shareToInstagram = async () => {
    try {
      // Fetch the image from the remote URL and convert it to a blob

      if (graphicFile) {
        // const blobImageAsset = await response.blob();
        const blobImageAsset = new Blob([graphicFile], { type: "image/png" });
        // setFilesArrayContent(blobImageAsset)

        // Create a File object from the blob
        const filesArray = [
          new File([blobImageAsset], `Favlist_${new Date().getTime()}.png`, {
            type: "image/png",
            lastModified: new Date().getTime(),
          }),
        ];

        // setFilesArrayContent(filesArray)

        // Set up the share data
        const shareData = {
          // title: "Favlist",
          files: filesArray,
        };

        // console.log()

        // Check if the navigator supports sharing and the provided data
        console.log("fist", navigator.canShare);
        //console.log("second", navigator.canShare(shareData));

        if (navigator.canShare) {
          // Use the Web Share API to share the image
          await navigator.share(shareData);
          console.log("Successfully shared to Instagram");
          toast.success("Successfully shared to Instagram");
          return true; // Sharing successful
        } else {
          console.error("Web Share API is not supported on this browser.");
          toast.error("Web Share API is not supported on this browser.");

          return false; // Sharing failed
        }
      }
    } catch (error) {
      console.error("Error sharing image to Instagram:", error);
      toast.error("Error sharing image to Instagram");
      return false; // Sharing failed
    }
  };

  const handleSubmit = () => {
    // mutateQuestion()

    localStorage.removeItem("answers");
    // localStorage.removeItem("selectedQuestionIndex");
    // localStorage.removeItem("selectedQuestionId");
    setEditQuestion(null);
    navigate("/", { replace: true });
  };

  return (
    <>
      <Helmet defer={false} prioritizeSeoTags>
        {/* Regular meta */}
        <title>Give answers to your favourite things</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="favlist answers" />
        <meta property="og:url" content="https://favlist.surge.sh" />
        <meta property="robots" content="index, follow" />
        <meta
          name="description"
          content="Give Answers to your favorite things"
        />
        <meta
          property="og:description"
          content="Give answers to your favorite things"
        />
        {/* Image meta */}
        <meta property="og:image" itemProp="image" content={graphicUrl} />
        <meta property="og:image:secure_url" content={graphicUrl} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="314" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="favlist" />
        {/* twitter  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="favorite answers" />
        <meta
          name="twitter:image"
          itemProp="image"
          content={graphicUrl + "/"}
        />
        <meta property="twitter:image:width" content="600" />
        <meta property="twitter:image:height" content="314" />
        <meta property="twitter:card" content="app" />
        <meta property="twitter:url" content="https://favlist.surge.sh" />
        <meta property="twitter:title" content="favlist" />
        <meta
          property="twitter:description"
          content="Give answers to your favorite things"
        />
      </Helmet>
      <div className="bg_submitted pt-[50px] sm:pt-[120px] md:pt-[120px] pb-[10px] h-screen md:h-screen mdx:h-screen mx-auto sm:h-screen">
        <div className="bg-neutral w-[360px] sm:w-[340px] md:w-[360px] rounded-lg mx-auto py-[10px]">
          <div className="flex flex-col">
            <h2 className="w-[327px] font-[500] mx-auto text-center text-[14px] leading-5 pt-[10px]">
              Yaayy! Your answers have been submitted!{" "}
            </h2>

            <div className="flex flex-row justify-center">
              <img src={Video} alt="video" className="pr-[10px]" />
              <h1 className="font-[500] text-[13px] text-text-blue">
                Your Answer graphic
              </h1>
            </div>
          </div>
          <div 
              className="bg_image p-[10px] mx-auto h-[300px] w-[300px]"
              >
                
            {/* <img
              
              // src={graphicUrl}
              // src={URL.createObjectURL(graphicFile)}
              // alt="Your Answer Graphic"
              className=" mx-auto p-[10px]"
            /> */}
          </div>
          <div className=""></div>

          <div className="flex flex-col pb-[10px] mx-auto">

            {isMobile ? (
              <div className="p-[5px] mx-auto">
                <button
                  className="h-[40px] bg-primary hover:bg-opacity-75 text-center rounded-lg font-[600] w-[250px] flex-grow flex-shrink text-[14px] text-neutral"
                  onClick={shareToInstagram}
                >
                  Share to Instagram

                </button>
              </div>
            ) : (
              <div className="p-[5px] mx-auto">
                <RWebShare
                  data={{
                    text: "Favorite Answers",
                    url: graphicUrl,
                    title: "Give answers to your favorite things",
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <button className="h-[40px] bg-primary hover:bg-opacity-75 text-center rounded-lg font-[600] w-[250px] flex-grow flex-shrink text-[14px] text-neutral">
                    Share to Social Media
                  </button>
                </RWebShare>
              </div>
            )}
            <span
              onClick={handleSubmit}
              className="flex flex-row bg-primary items-center justify-center mx-auto rounded-lg h-[40px] hover:bg-primary-lighter px-[10px] w-[250px]"
            >
              <img
                src={Home}
                alt="home"
                className="h-[20px] w-[20px] pr-[5px]"
              />
              <button className="text-[14px] text-neutral  font-semibold h-[26px]">
                Go Home
              </button>
            </span>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
};

export default Submit;


// style={{
//   backgroundImage: `url(${graphicUrl})`,
//   height: "300px",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   width: "300px",
//   backgroundSize: "cover",
// }} 
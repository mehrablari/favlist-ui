import { Link, useLocation } from "react-router-dom";
import {  useState } from "react";
// import axios from "axios";
import { RWebShare } from "react-web-share";
import Video from "../../assets/icons/video.svg";
import Home from "../../assets/icon2/HomeOutlined.svg";
// import congrats from "../../assets/gif/congrats.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import "./answergraphic.css"

const AnswerGraphics = () => {

  const location = useLocation();
  const dataContainer = location.state;
  const imgUrl = dataContainer?.answerGraphicLink;
  const imgFile = dataContainer?.graphicFile;
  // console.log(imgUrl);

  // const [isMobile, setIsMobile] = useState(
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
  // );
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 915px)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );


  useEffect(() => {
   
      setIsMobile(window.matchMedia("(max-width: 915px)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

  
  }, []);

  // useEffect(() => {

  //     setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
 
  // }, []); 


  console.log('working',isMobile)


  const shareToInstagram = async () => {
    try {
      // Fetch the image from the remote URL and convert it to a blob

      // const blobImageAsset = await fetchData();
      //console.log(response);

      if (imgFile) {
        // const blobImageAsset = await response.blob();

        const binaryData = atob(imgFile);

        // Create a Blob from the binary data
        const arrayBuffer = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
          arrayBuffer[i] = binaryData.charCodeAt(i);
        }
        const blobImageAsset = new Blob([arrayBuffer ], { type: "image/png" });
        console.log(blobImageAsset)
        // setFilesArrayContent(blobImageAsset)
      

        // Create a File object from the blob
        const filesArray = [
          new File([blobImageAsset], `Favlist_${new Date().getTime()}.png`, {
            type: "image/png",
            lastModified: new Date().getTime(),
          }),
        ];

        console.log(filesArray);
        // setFilesArrayContent(filesArray)

        // Set up the share data
        const shareData = {
          // title: "Favlist",
          files: filesArray,
        };

        console.log(shareData);
        // Check if the navigator supports sharing and the provided data
        console.log("fist", navigator.canShare);
        console.log("second", navigator.canShare(shareData));

        if (navigator.canShare) {
          // Use the Web Share API to share the image
          await navigator.share(shareData);
          console.log("Successfully shared to Instagram");
          return true; // Sharing successful
        } else {
          console.error("Web Share API is not supported on this browser.");
          toast.error("Web Share API is not supported on this browser.")
          return false; // Sharing failed
        }
      }
    } catch (error) {
      console.error("Error sharing image to Instagram:", error);
      toast.error("Error sharing image to Instagram")
      return false; // Sharing failed
    }
  };



  return (
    <>
      <Helmet defer={false} prioritizeSeoTags>
        <title>Give answers to your favourite things</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="question image" />

        <meta name="description" content="helmet" />
        <meta property="og:url" content="https://favlist.net/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={imgUrl} />
        <meta
          property="og:description"
          content="Give answers to your favourite things"
        />
        <meta name="twitter:image:alt" content="favourite answers" />
      </Helmet>
      <div
        className="graphics_img pt-[100px] sm:pt-[130px] md:pt-[130px]  pb-[10px] sm:h-screen h-screen md:full mdx:h-screen mx-auto"
        
      >
        <div className="bg-neutral min-h-[300px] w-[400px]  sm:w-[340px] md:w-[360px] mx-auto rounded-[24px]">
          <div className="flex flex-row justify-center align-middle mx-auto">
            <img
              src={Video}
              alt="video"
              className="h-full pt-[8px] pr-[10px]"
            />
            <h1 className="font-[600] text-md text-text-blue">
              Your Answer graphics
            </h1>
          </div>
          <div className="min-h-[100px] max-w-[400px] p-[10px]">
            <img
              src={imgUrl}
              alt="Your Answer Graphic"
              className=" w-[400px] sm:w-[340px] md:w-[360px] h-[340px] sm:h-[300px]"
            />
          </div>
          <div className="flex flex-col pb-[10px]">
            <div className="flex flex-col justify-center align-middle pb-[5px]">
 
              {isMobile ? (
              <button
                className="h-[40px] w-[320px] hover:bg-opacity-75 text-center mb-[7px] mx-auto rounded-lg  font-[600] flex-grow flex-shrink text-[14px] text-neutral bg-primary "
                onClick={shareToInstagram}
              >
                Share to Instagram
              </button>
                 ) : (
              <RWebShare
                data={{
                  text: "My answers",
                  url: imgUrl,
                  title: "Favlist",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button className="h-[40px] w-[320px] hover:bg-opacity-75 text-center mx-auto rounded-lg  font-[600] flex-grow flex-shrink text-[14px] text-neutral bg-primary ">
                  Share to social media
                </button>
              </RWebShare>
               )}
            </div>
           
            <div className="flex flex-row items-center justify-center mx-auto rounded-lg h-[35px] p-[10px] bg-button-inactive min-w-[320px]">
              <img src={Home} alt="" className="h-full pr-[2px]" />
              <Link
                to="/"
                className="text-[14px] font-semibold text-primary-light"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
};

export default AnswerGraphics;

import { Link, useLocation } from "react-router-dom";
import { useCallback, useState } from "react";
// import axios from "axios";
import { RWebShare } from "react-web-share";
import Video from "../../assets/icons/video.svg";
import Home from "../../assets/icon2/HomeOutlined.svg";
import congrats from "../../assets/gif/congrats.gif";
import { Helmet } from "react-helmet-async";

const AnswerGraphics = () => {
  const location = useLocation();
  const imgUrl = location.state;
  // console.log(imgUrl)
  // const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'
  //const imgUrl = 'https://upload.wikimedia.org/wikipedia/en/f/f6/Sample_0.JPEG'
  console.log(imgUrl);

  const [filesArrayContent, setFilesArrayContent] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      console.log(imgUrl);
      const response = await fetch(imgUrl.toString())
        .then((response) => response.blob())
        .catch((error) => console.error("Error fetching image:", error));
      // const response = await axios.get(imgUrl); // Adjust the endpoint
      // const response = await axios.get(imgUrl, { responseType: "blob" });
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [imgUrl]);

  const shareToInstagram = async () => {
    try {
      // Fetch the image from the remote URL and convert it to a blob

      const blobImageAsset = await fetchData();
      //console.log(response);

      if (blobImageAsset) {
        // const blobImageAsset = await response.blob();
        // const blobImageAsset = new Blob([response], { type: "image/png" });
        console.log(blobImageAsset)
        setFilesArrayContent(blobImageAsset)
      

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
        //console.log("second", navigator.canShare(shareData));

        if (navigator.canShare) {
          // Use the Web Share API to share the image
          await navigator.share(shareData);
          console.log("Successfully shared to Instagram");
          return true; // Sharing successful
        } else {
          console.error("Web Share API is not supported on this browser.");
          return false; // Sharing failed
        }
      }
    } catch (error) {
      console.error("Error sharing image to Instagram:", error);
      return false; // Sharing failed
    }
  };



  // const handleInstagramShare = () => {
  //   // const image_url = 'https://example.com/your-image.jpg'; // Replace with your image URL
  //   const caption = 'Your Caption Here';

  //   console.log()
  //   const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(imgUrl)}&caption=${encodeURIComponent(caption)}`;

  //   window.open(instagramShareUrl, '_blank');
  // };

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
        className="pt-[100px] sm:pt-[130px] md:pt-[130px]  pb-[10px] sm:h-screen h-screen md:full mdx:h-screen mx-auto"
        style={{
          backgroundImage: `url(${congrats})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
        }}
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
              {/* {filesArrayContent && (
                <div className="p-2 bg-gray-200 my-4">
                  <h2 className="text-lg font-semibold">filesArray Content:</h2>
                  <pre>{JSON.stringify(filesArrayContent, null, 2)} </pre>
                </div>
              )}  */}

            
              {filesArrayContent && (
                <img
                src={URL.createObjectURL(filesArrayContent)}
                //  src={URL.createObjectURL(filesArrayContent)}
                  alt="Favlistqq"
                  style={{ maxWidth: "100%" }}
                />
              )}

              <button
                className="h-[40px] w-[320px] hover:bg-opacity-75 text-center mb-[7px] mx-auto rounded-lg  font-[600] flex-grow flex-shrink text-[14px] text-neutral bg-primary "
                onClick={shareToInstagram}
              >
                Share to instagram
              </button>

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
      </div>
    </>
  );
};

export default AnswerGraphics;

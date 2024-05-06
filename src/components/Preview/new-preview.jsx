import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NavBar from '../NavBar';
import './new-preview.css'
import Logo from '../../assets/images/favlist-logo-small.png'
import { useState } from 'react';
import SampleImage from '../../assets/images/sample-img.jpeg'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";





const NewPreview = () => {

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
              toast.success("Your favlist has been shared!");
              return true; // Sharing successful
            } else {
              console.error("Web Share API is not supported on this browser.");
              // toast.error("Social sharing is not supported on your browser :(");
    
              return false; // Sharing failed
            }
          }
        } catch (error) {
          console.error("Error sharing image to Instagram:", error);
          toast.error("We had trouble sharing your favlist, please try again later!");
          return false; // Sharing failed
        }
      };
    

    const answers = [
        'Belgium',
        'Croatia',
        'Ukraine',
        'Czechia',
        'United Kingdom'
    ]



    return (
        <>
            <NavBar />
            <div className="main-container w-full h-[105vh] pt-[100px]">
                <div className="w-[353px] px-[20px]">
                    <span><KeyboardBackspaceIcon style={{'color': '#FFFFFF'}}/></span>
                    <span className="ml-[16px] text-[#FFF] font-bold text-[20px]">Your list is ready</span>
                </div>
                <div className="answers-container w-[324.29px] h-[576px] rounded-[14.7px] mt-[20px] pt-[18.37px]">
                    <div className="w-[287.54px] h-[265.49px] rounded-[3.67px] mx-[18.37px]">
                        <img src={SampleImage} className=" h-full w-full rounded-[3.67px]"></img>
                    </div>
                    <div className="pt-[18px] px-[15px] [&>*:nth-child(2)]:mt-[28px]">
                        <span className="text-[18.37px] font-bold text-[#FFF] w-[231.63px]">My favorite place to travel are:</span>

                        {
                            answers.map( (answer , index) => (
                                <div>
                                    <span className="font-bold text-[#FFFFFF] text-[12px]">{index+1}-  </span>
                                    <span className="font-bold text-[#FFFFFF] text-[12px]">{answer}</span>
                                </div>
                            ))
                        }

                        <div className=' flex mt-[60px] gap-[21%]'>
                            <img src={Logo} className='w-[77px] h-[14px]'/>
                            <span className=' font-semibold text-[14px] text-[#FFFFFF]'>I Voted on FavList.net!</span>
                        </div>
                    </div>

                </div>

                <div className='share-btn-container'>
                    <button className='go-home'>GO HOME</button>
                    <button className='share' onClick={shareToInstagram()}>SHARE</button>
                </div>
            </div>
        </>
    )
}

export default NewPreview
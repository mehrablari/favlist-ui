import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NavBar from '../NavBar';
import './new-preview.css'
import Logo from '../../assets/images/favlist-logo-small.png'
import SampleImage from '../../assets/images/sample-img.jpeg'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const NewPreview = () => {

    const {state} = useLocation();
    const graphicUrl = location.state?.graphicUrl;
    const graphicFile = location.state?.graphicFile;
    const navigate = useNavigate()


        const divRef = useRef(null);
    
        const captureDivToBlob = async () => {
            if (divRef.current) {
                try {
                    const blob = await domtoimage.toBlob(divRef.current);
                    return blob;
                } catch (error) {
                    console.error('Error capturing div:', error);
                }
            }
        };
    
        const handleDownload = async () => {
            const blob = await captureDivToBlob();
            if (blob) {
                saveAs(blob, 'capture.png');
            }
        };
    
        const handleShare = async () => {
            const blob = await captureDivToBlob();
            if (blob) {
                const url = URL.createObjectURL(blob);
                navigator.clipboard.writeText(url).then(() => {
                    alert('Image URL copied to clipboard!');
                }).catch(err => {
                    console.error('Error copying URL to clipboard:', err);
                });
            }
        };


    console.log(state, 'sldkfhsdfsdlhf')

    // const navigate = useNavigate();

    // const [isMobile, setIsMobile] = useState(
    // window.matchMedia("(max-width: 915px)").matches ||
    //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    //     navigator.userAgent
    //     )
    // );

    // useEffect(() => {
    // setIsMobile(
    //     window.matchMedia("(max-width: 915px)").matches ||
    //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    //         navigator.userAgent
    //     )
    // );
    // }, []);

    // const shareToInstagram = async () => {
    //     try {
    //       // Fetch the image from the remote URL and convert it to a blob
    
    //       if (graphicFile) {
    //         // const blobImageAsset = await response.blob();
    //         const blobImageAsset = new Blob([graphicFile], { type: "image/png" });
    //         // setFilesArrayContent(blobImageAsset)
    
    //         // Create a File object from the blob
    //         const filesArray = [
    //           new File([blobImageAsset], `Favlist_${new Date().getTime()}.png`, {
    //             type: "image/png",
    //             lastModified: new Date().getTime(),
    //           }),
    //         ];
    
    //         // setFilesArrayContent(filesArray)
    
    //         // Set up the share data
    //         const shareData = {
    //           // title: "Favlist",
    //           files: filesArray,
    //         };
    
    //         // console.log()
    
    //         // Check if the navigator supports sharing and the provided data
    //         console.log("fist", navigator.canShare);
    //         //console.log("second", navigator.canShare(shareData));
    
    //         if (navigator.canShare) {
    //           // Use the Web Share API to share the image
    //           await navigator.share(shareData);
    //           console.log("Successfully shared to Instagram");
    //           toast.success("Your favlist has been shared!");
    //           return true; // Sharing successful
    //         } else {
    //           console.error("Web Share API is not supported on this browser.");
    //           // toast.error("Social sharing is not supported on your browser :(");
    
    //           return false; // Sharing failed
    //         }
    //       }
    //     } catch (error) {
    //       console.error("Error sharing image to Instagram:", error);
    //       toast.error("We had trouble sharing your favlist, please try again later!");
    //       return false; // Sharing failed
    //     }
    //   };
    


    // const captureDivToBlob = async (divId) => {
    //   const div = document.getElementById(divId);
    //   const canvas = await html2canvas(div);
    //   return new Promise((resolve, reject) => {
    //       canvas.toBlob(blob => {
    //           if (blob) {
    //               resolve(blob);
    //           } else {
    //               reject(new Error('Canvas to Blob conversion failed'));
    //           }
    //       }, 'image/png');
    //   });
    // };

    // const shareImage = async (divId) => {
    //   try {
    //       const imageBlob = await captureDivToBlob(divId);
    //       const file = new File([imageBlob], "share.png", { type: "image/png" });
    //       if (navigator.share) {
    //           await navigator.share({
    //               files: [file],
    //               title: 'Check out this image!',
    //               text: 'Generated from my web app!'
    //           });
    //           console.log('Image shared successfully');
    //       } else {
    //           console.error('Web Share API is not supported in this browser.');
    //       }
    //   } catch (error) {
    //       console.error('Failed to share the image:', error);
    //   }
    // };


    // const captureDivToBlob = async (divId) => {
    //     const div = document.getElementById(divId);
    //     if (!div) {
    //         console.error(`No element found with id ${divId}`);
    //         return;
    //     }
    
    //     // Create a clone of the div with inline styles applied
    //     const cloneDiv = div.cloneNode(true);
    //     const computedStyles = window.getComputedStyle(div);
    
    //     // Apply all computed styles to the clone
    //     for (let key of computedStyles) {
    //         cloneDiv.style[key] = computedStyles.getPropertyValue(key);
    //     }
    
    //     // Ensure all fonts are loaded
    //     await document.fonts.ready;
    
    //     // Append the clone to the body to ensure it's in the DOM when captured
    //     document.body.appendChild(cloneDiv);
    
    //     // Capture the clone to a canvas
    //     const options = {
    //         scale: window.devicePixelRatio,
    //         logging: true,
    //         useCORS: true
    //     };
    //     const canvas = await html2canvas(cloneDiv, options);
    
    //     // Remove the clone after capturing
    //     document.body.removeChild(cloneDiv);
    
    //     return new Promise((resolve, reject) => {
    //         canvas.toBlob(blob => {
    //             if (blob) {
    //                 resolve(blob);
    //             } else {
    //                 reject(new Error('Canvas to Blob conversion failed'));
    //             }
    //         }, 'image/png');
    //     });
    // };
    
  
//   const shareImage = async (divId) => {
//       try {
//           const imageBlob = await captureDivToBlob(divId);
//           const file = new File([imageBlob], "share.png", { type: "image/png" });
//           if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
//               await navigator.share({
//                   files: [file],
//                   title: 'Check out this image!',
//                   text: 'Generated from my web app!'
//               });
//               console.log('Image shared successfully');
//           } else {
//               console.error('Web Share API is not supported or cannot share files in this browser.');
//           }
//       } catch (error) {
//           console.error('Failed to share the image:', error);
//       }
//   };


    return (
        <>
            <NavBar />
            <div className="main-container w-full h-[105vh] pt-[100px]">
                <div className="w-[353px] px-[20px]">
                    <span onClick={() => navigate('/')}><KeyboardBackspaceIcon style={{'color': '#FFFFFF'}}/></span>
                    <span className="ml-[16px] text-[#FFF] font-bold text-[20px]">Your list is ready</span>
                </div>
                <div className="answers-container w-[324.29px] h-[576px] rounded-[14.7px] mt-[20px] pt-[18.37px]" id='target' ref={divRef}>
                    <div className="w-[287.54px] h-[265.49px] rounded-[3.67px] mx-[18.37px]">
                        <img src={state.image} className=" h-full w-full rounded-[3.67px]"></img>
                    </div>
                    <div className="pt-[18px] px-[15px] [&>*:nth-child(2)]:mt-[28px]">
                        <span className="text-[18.37px] font-bold text-[#FFF] w-[231.63px]">{state?.graphicTitle}:</span>

                        {
                            state?.answers.map( (answer , index) => (
                                <div>
                                    <span className="font-bold text-[#FFFFFF] text-[15px]">{index+1}-  </span>
                                    <span className="font-bold text-[#FFFFFF] text-[15px]">{answer}</span>
                                </div>
                            ))
                        }

                        <div className=' flex mt-[90px] gap-[21%]'>
                            <img src={Logo} className='w-[77px] h-[14px]'/>
                            <span className=' font-semibold text-[14px] text-[#FFFFFF]'>I Voted on FavList.net!</span>
                        </div>
                    </div>

                </div>

                <div className='share-btn-container'>
                    <button className='go-home' onClick={() =>handleDownload()}>GO HOME</button>
                    <button className='share' onClick={() =>handleShare()}>SHARE</button>
                </div>
            </div>
        </>
    )
}

export default NewPreview
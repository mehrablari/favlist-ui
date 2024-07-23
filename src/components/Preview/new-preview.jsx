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
import axios from 'axios';

const NewPreview = () => {

    const {state} = useLocation();

    const containerRef = useRef(null);

    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Function to check if images are fully loaded
    const loadImages = (srcs) => {
        return Promise.all(
            srcs.map(
                src =>
                    new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onload = resolve;
                        img.onerror = reject;
                        img.src = src;
                    })
            )
        );
    };

    // Share image function
    const shareImage = async () => {
        if (!imagesLoaded) {
            toast.error('Images are not fully loaded yet. Please wait.');
            return;
        }
        
        const element = containerRef.current;
        try {
            console.log('Capturing canvas');
            const canvas = await html2canvas(element, {
                useCORS: true,
                logging: true,
                scale: 2 // Increase scale for higher resolution
            });
            console.log('Canvas created');
            const dataUrl = canvas.toDataURL('image/png');
            const blob = await (await fetch(dataUrl)).blob();
            const file = new File([blob], 'screenshot.png', { type: 'image/png' });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: 'FavList',
                    text: 'Check out my list!',
                    files: [file],
                });
                console.log('Successful share');
            } else {
                toast.error('Sharing is not supported in your browser.');
            }
        } catch (error) {
            console.error('Error sharing:', error);
            toast.error('Error sharing the image.');
        }
    };

    // Effect to load images and update state
    useEffect(() => {
        if (state.image) {
            loadImages([state.image, Logo]).then(() => {
                console.log('Images loaded');
                setImagesLoaded(true);
            }).catch(err => {
                console.error('Error loading images:', err);
                toast.error('Error loading images.');
            });
        }
    }, [state.image]);




    return (
        <>
            <NavBar />
            <div className="main-container w-full h-[105vh] pt-[100px]">
                <div className="w-[353px] px-[20px]">
                    <span onClick={() => navigate('/')}><KeyboardBackspaceIcon style={{'color': '#FFFFFF'}}/></span>
                    <span className="ml-[16px] text-[#FFF] font-bold text-[20px]">Your list is ready</span>
                </div>
                <div className="answers-container w-[324.29px] h-[576px] rounded-[14.7px] mt-[20px] pt-[18.37px] bg-[#925B9C]" id='target' ref={containerRef}>
                    <div className="w-[287.54px] h-[265.49px] rounded-[3.67px] mx-[18.37px]" id='test'>
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
                    <button className='go-home' onClick={() =>console.log("12321")}>GO HOME</button>
                    <button className='share' onClick={() =>shareImage('target')}>SHARE</button>
                </div>
            </div>
        </>
    )
}

export default NewPreview
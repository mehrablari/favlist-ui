

import NavBar from "../NavBar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router";
const About = () => {

    const navigate = useNavigate()


    return(
        <>
            <NavBar />
            <div className="pt-[65px] mx-[15px] text-justify ">
                <p className="text-[19px] font-bold">About FavList</p>
                <p className="text-[18px] font-semibold">Introducing FavList - the new social media application where your favorites can be shared and counted!</p>
            </div>
            <div className="mx-[15px] text-justify mt-[22px]">
                <p className="font-semibold text-lg">Favlist allows everyone to create their own list of favorites - and have their answers submitted to be counted in the global aggregated results.</p>
            </div>
            <div className="mx-[15px] text-justify mt-[22px]">
                <p className="font-semibold text-lg">Every day a new FavList question brings the world together, focusing everyone on the same captivating topic.</p>
            </div>
            <div className="mx-[15px] text-justify mt-[22px]">
                <p className="font-semibold text-lg">Please contact us for opportunities to collaborate: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@favlist.net" target="_blanck">info@favlist.net</a> </p>
            </div>
            <div className="mx-[15px] text-justify mt-[22px]">
                <p className="font-semibold text-lg inline">® FavList is a </p><p className="font-[800] text-[19px] inline">Registered</p> <p className="font-semibold text-lg inline">trademark of Favlist Corp. All rights reserved.</p>
            </div>
            <div className="mx-[15px] text-justify mt-[22px] w-fit" onClick={() => navigate('/')}>
                <ArrowBackIcon />
            </div>
            
        </>
    )
}

export default About
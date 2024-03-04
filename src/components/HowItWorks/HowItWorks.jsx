

import NavBar from "../NavBar"
import { useNavigate } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HowItWorks = () => {

    const navigate = useNavigate()


    return(
        <>
            <NavBar />
            <div className="pt-[65px] mx-[15px] text-justify ">
                <p className="text-[19px] font-bold">Welcome to FavList, where you can create and share your favorite lists.  Here's a quick overview of how our platform works:</p>
            </div>
            <div className="mx-[15px] text-justify mt-[22px]">
                <p className="font-bold text-lg">1. Getting Started</p>
                <p>There is no log-in required to access the FavList web-app; just start submitting your favorite lists.</p>
            </div>
            <div className="mx-[15px] text-justify mt-[22px]">
                <p className="font-bold text-lg">2. Daily Questions</p>
                <p>Everyday Favlist will publish a new question.  Each question will be open for seven days. Users can submit their lists of 3,4 or 5 answers to be counted. Users can only vote once for each question. Total results are counted and published after seven days.</p>
            </div>
            <div className="mx-[15px] text-justify mt-[22px]">
                <p className="font-bold text-lg">3. Personal List Graphic</p>
                <p>Every submission of answers will create a personal list graphic for the user.  A preview of the graphic is provided.  Once you submit your final answers, the personal list graphic is available to be shared on social media.</p>
            </div>
            <div className="mx-[15px] text-justify mt-[22px]">
                <p className="font-bold text-lg">4. Closed Questions</p>
                <p>Each question is closed after seven days and the aggregate results are counted.  The list of the top 50 answers is shown in Closed Questions.</p>
            </div>
            <div className="mx-[15px] text-justify mt-[22px] w-fit" onClick={() => navigate('/')}>
                <ArrowBackIcon />
            </div>  
        </>
    )
}

export default HowItWorks
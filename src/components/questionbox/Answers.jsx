
import { Link, useLocation } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';
import Searchbox from "../../utils/Searchbox";
import soundEffect from "../../assets/audio/software.wav"



const Answers = () => {
  const audio = new Audio(soundEffect);

  const playSoundEffect = () => {
    audio.play();
  };

  const location = useLocation();
  // const suggestedOption = location.state?.suggestedOption;
  const dataContainer = location.state;

  // console.log("uselocation",dataContainer)
  // console.log("location",location)


return (
  <div className="flex flex-col bg-neutral p-[20px]">
    <div className="flex flex-row justify-between p-[20px]">
      <h2>Suggestions</h2>
      <Link to="/" className="cursor-pointer">
        <CancelIcon />
      </Link>
    </div>
    <h2 className="font-[400] text-[13px] p-[10px] text-gray-lighter">
      Select from this pool of suggestions to answer the question.
    </h2>
    
    <div className="flex flex-wrap">
      {dataContainer && dataContainer.slice(0, 36).map((option, index) => (
        <div key={index} className="w-1/2">
          <div className="bg-gray-lighter bg-opacity-10 p-[10px] rounded-[16px] m-[12px]">
            <h3
              className="text-[12px] text-center text-gray-dark text-opacity-90 font-medium  overflow-hidden whitespace-nowrap leading-3 cursor-pointer"
              onClick={playSoundEffect}
            >
              {option.length > 8 ? `${option.slice(0, 16)}...` : option}
            </h3>
          </div>
        </div>
      ))}
    </div>
    <div>
      <Searchbox />
    </div>
  </div>
);
};

export default Answers;


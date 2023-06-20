
import { Link } from "react-router-dom";
import data from "../../utils/data"
import CancelIcon from '@mui/icons-material/Cancel';
import Searchbox from "../../utils/Searchbox";


const Answers = () => {

return (
    <div className="flex flex-col bg-neutral p-[20px]">
      <div className="flex flex-row justify-between p-[20px]">
        <h2>Suggestions</h2>
        <Link to="/" className="cursor-pointer"> 
          <CancelIcon />
        </Link>
      </div>
      <h2 className="font-[400] text-[13px] p-[10px] text-gray-lighter">Select from this pool of suggestions to answer the question.</h2>
      <div className="flex flex-wrap">
        {data.slice(0, 36).map((movie) => (
          <div key={movie.id} className="w-1/3">
            <div className="bg-gray-lighter bg-opacity-10 p-[10px] rounded-[16px] m-[12px]">
              <h3 className="text-[12px] text-gray-dark text-opacity-90 font-medium  overflow-hidden whitespace-nowrap leading-3">{movie.title.length > 8 ? `${movie.title.slice(0, 12)}...` : movie.title}</h3>
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

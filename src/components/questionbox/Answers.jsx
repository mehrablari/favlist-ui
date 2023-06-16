
import data from "../../utils/data"



const Answers = () => {

return (
    <div className="flex flex-wrap bg-neutral">
      {data.slice(0, 12).map((movie) => (
        <div key={movie.id} className="w-1/3">
          <div className="bg-gray-lighter bg-opacity-10 p-[10px] rounded-[16px] m-[12px]">
            <h3 className="text-[12px] text-gray-dark text-opacity-90 font-medium  overflow-hidden whitespace-nowrap leading-3">{movie.title.length > 8 ? `${movie.title.slice(0, 12)}...` : movie.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Answers;

import { useLocation, Link } from "react-router-dom";
import Calendar from "../../../assets/images/Calendar.png";
import NavBar from "../../NavBar";
import ArrowBack from "../../../assets/images/back.png";

const FilterPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serializedData = queryParams.get("filteredData");

  const filteredData = JSON.parse(decodeURIComponent(serializedData));

  return (
    <>
      <NavBar />
      <div className="flex flex-row items-center pt-[70px] bg-neutral pl-[20px]">
        <img src={ArrowBack} alt="" className="h-[22px] pr-[5px]" />
        <Link to="/" className="text-[18px] font-semibold text-primary">
          Back
        </Link>
      </div>
      <div className="bg-neutral pt-[30px]">
        {filteredData.map((question, index) => (
          <div key={index} className="shadow-sm px-[24px] h-[80px]">
            <Link
              to={`/closedinfo/${question.id}`}
              className="flex flex-row justify-start  py-[10px]"
            >
              <img src={Calendar} alt="" className="h-[18px] pr-[5px]" />
              <p className="text-[12px] leading-4 font-[400] text-gray-dark">
                {question.dateToPost}
              </p>
            </Link>

            <h1 className="font-[500] text-[14px] leading-[20px] cursor-pointer text-gray-dark">
              {question.text}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterPage;

import { useLocation, Link } from "react-router-dom";
import Calendar from "../../../assets/images/Calendar.png";
import NavBar from "../../NavBar";
import ArrowBack from "../../../assets/images/back.png";
import filterIcon from "../../../assets/images/filter.png";

const FilterPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serializedData = queryParams.get("filteredData");

  const filteredData = JSON.parse(decodeURIComponent(serializedData));

  const formatDate = (inputDate) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = new Date(inputDate).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <>
      <NavBar />
      <div className=" pt-[70px] bg-neutral pl-[20px]">
        <Link to="/closedquestion" className="flex flex-row items-center pb-[10px]text-[18px] font-semibold text-primary">
        <img src={ArrowBack} alt="" className="h-[22px] pr-[5px]" />
         <span>Back</span> 
        </Link>
        <div className="flex justify-between flex-row py-[20px]">
          <p className="font-[700] text-[18px] leading-5">Closed questions</p>
          <div className="flex flex-row items-center rounded-sm bg-primary-border mt-[-10px] mr-[10px] px-[10px] py-[8px]">
            <img src={filterIcon} alt="" className="h-[22px]" />
            <Link to="/filtercontainer" className="text-[16px] font-semibold text-primary">
              Filters
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-neutral pt-[30px]">
        {filteredData.map((question, index) => (
          <div key={index} className="shadow-sm px-[24px] h-[80px]">
            <Link
              to={`/closedinfo/${question.id}`}
              className="flex flex-row justify-start  py-[10px]"
            >
              <img src={Calendar} alt="" className="h-[18px] pr-[5px]" />
              <p className="text-[14px] leading-4 font-[400] text-gray-dark">
              {formatDate(question.dateToPost)}
              </p>
            </Link>

            <h1 className="font-[500] text-[16px] leading-[20px] cursor-pointer text-gray-dark">
              {question.text}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterPage;

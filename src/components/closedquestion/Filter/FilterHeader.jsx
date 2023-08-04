import { Link } from "react-router-dom"
import ArrowBack from "../../../assets/images/back.png"


const FilterHeader = () => {
  return (
	<div className="px-[20px]">
		<div className="flex flex-row items-center pt-[80px] ">
          <img src={ArrowBack} alt="" className="h-[22px] pr-[5px]" />
          <Link to="/closedquestion" className="text-[18px] font-semibold text-primary">
            Back
          </Link>
        </div>
		<h1 className="font-[700] text-[18px] leading-6 py-[20px]">Filter</h1>

	</div>
  )
}

export default FilterHeader
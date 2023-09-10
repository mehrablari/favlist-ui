
import { Link } from "react-router-dom";
Link

const FilterSubmission = ({ handleSubmit, isLoading }) => {
  return (
    <div>
      <Link to="#" className="flex justify-center align-middle pt-[30px] md:pb-[10px]">
        <button
          onClick={handleSubmit}
          className="h-[50px] text-center rounded-lg font-[600] text-[14px] sm:w-[280px] w-[310px] mx-auto bg-primary text-neutral"
          type="submit"
        >
          {isLoading ? "Applying..." : "Apply Filters"}
        </button>
      </Link>
    </div>
  );
};

export default FilterSubmission;

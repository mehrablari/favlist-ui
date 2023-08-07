
import { Link } from "react-router-dom";
Link

const FilterSubmission = ({ handleSubmit, isLoading }) => {
  return (
    <div>
      <Link to="#" className="flex justify-center align-middle p-[20px]">
        <button
          onClick={handleSubmit}
          className="h-[52px] text-center rounded-lg font-[600] text-[14px] sm:w-[280px] w-[310px] mx-auto bg-primary cursor-not-allowed text-neutral"
          type="submit"
        >
          {isLoading ? "Applying..." : "Apply Filters"}
        </button>
      </Link>
    </div>
  );
};

export default FilterSubmission;

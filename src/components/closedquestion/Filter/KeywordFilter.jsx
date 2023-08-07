
import SearchIcon from "@mui/icons-material/Search";

const KeywordFilter = ({handleInputChange}) => {
  return (
	<div>
        <h1 className="pl-[20px] font-[500] text-[12px] leading-4 bg-bg-grey h-[33px] px-[24px]  py-[8px]">
          FILTER BY KEYWORD
        </h1>
        <div className="flex flex-col py-[10px] h-[116px] w-327px ">
          <h1 className="font-[400] text-[13px] pr-[83px] pb-[5px]leading-4 w-[327px] flex justify-center align-middle">
            Enter a search term
          </h1>
          <div className="w-[327px] sm:w-[290px] mx-auto relative flex items-center justify-center align-middle bg-neutral">
            <span className="absolute left-[10px] top-[2.5px] h-full flex items-center">
              <SearchIcon
                className="h-[15px] w-[15px] text-gray-lighter"
                aria-hidden="true"
              />
            </span>
            <div className="flex-grow">
              <input
                onChange={handleInputChange}
                type="search"
                placeholder="search..."
                className="placeholder:w-[180px] sm:placeholder:w-[120px] sm:placeholder:text-[10px] placeholder:text-[13px] placeholder:h-[16px] sm:placeholder:pl-[20px] placeholder:pl-[30px] placeholder:pt-[10px] border border-search p-[12px] text-sm outline-none sm:w-[280px] w-[327px] rounded-[12px] h-[44px]"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default KeywordFilter


const CategoryChecker = ({filterCategory, handleChange}) => {
  return (
	<div className="pt-[180px] ">
        <h1 className="font-[500] h-[32px] text-[12px] pl-[20px] pb-[5px]leading-4 flex bg-bg-grey w-full ">
          FILTER BY CATEGORY
        </h1>
        <div className="pl-[20px]">
          {filterCategory.map((filter, index) => (
            <div key={index} className="py-[10px] gap-[8px] h-[36px]">
              <label>
                <input
                  type="checkbox"
                  name={filter.category.name}
                  onChange={handleChange}
                />
                <span className="pl-[10px] font-[400] text-[16px] leading-4 text-gray-list">
                  {filter.category.name.charAt(0).toUpperCase() +
                    filter.category.name.slice(1).toLowerCase()}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
  )
}

export default CategoryChecker
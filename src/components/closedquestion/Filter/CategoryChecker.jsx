

const CategoryChecker = ({filterCategory, handleChange}) => {
 //return unique category
  const uniqueCategories = new Set();

  // Iterate through filterCategory and add unique category names to the Set
  filterCategory.forEach((filter) => {
    if (filter && filter.category && filter.category.name) {
      uniqueCategories.add(filter.category.name.toLowerCase());
    }
  });

  // Convert the Set back to an array
  const uniqueCategoryArray = Array.from(uniqueCategories);


  return (
	<div className="pt-[180px] ">
        <h1 className="font-[500] h-[32px] text-[14px] pl-[20px] pb-[5px]leading-4 flex bg-bg-grey w-full ">
          FILTER BY CATEGORY
        </h1>
        <div className="pl-[20px]">
          {uniqueCategoryArray.map((categoryName, index) => (
            <div key={index} className="py-[10px] gap-[8px] h-[36px]">
              <label>
                <input
                  type="checkbox"
                  name={categoryName}
                  onChange={handleChange}
                  className=" text-primary transition bg-primary duration-150 ease-in-out"
                />
                <span className="pl-[10px] font-[400] text-[16px] leading-4 text-gray-list">
                  {categoryName.charAt(0).toUpperCase() +
                    categoryName.slice(1).toLowerCase()}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
  )
}

export default CategoryChecker
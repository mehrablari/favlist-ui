import data from "../../utils/data"

const AnswerContainer = () => {
    
  return (
    <div className="flex flex-wrap bg-neutral">
      {data.slice(0, 36).map((answers) => (
        <div key={answers.id} className="w-1/3">
          <div className="bg-gray-lighter bg-opacity-10 p-[10px] rounded-[16px] m-[12px]">
            <h3 className="text-[12px] text-gray-dark text-opacity-90 font-medium  overflow-hidden whitespace-nowrap leading-3">{answers.title.length > 8 ? `${answers.title.slice(0, 12)}...` : answers.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnswerContainer
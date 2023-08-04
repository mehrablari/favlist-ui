
import NoAnswer from '../../assets/images/Noanswers.svg';


const AnswerSettings = () => {
  return (
    <div className="flex flex-col bg-neutral justify-between">
      <div className="w-[126px] mx-auto p-[12px] flex flex-col gap-[20px] justify-center">
        <div className=" flex justify-center align-middle">
          <img src={NoAnswer} alt="this a placeholder " className='w-[80px] h-[80px]'  />
        </div>
        <h3 className="text-gray-lighter pr-[25px] text-center h-[30px] w-[150px] mx-auto text-[12px] leading-3">
          Select answers from the bubbles above to fill up your answers
        </h3>
      </div>
    </div>
  )
}

export default AnswerSettings
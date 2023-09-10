
import NoAnswer from '../../assets/images/Noanswers.svg';


const AnswerSettings = () => {
  return (
    <div className="flex flex-col bg-neutral justify-between">
      <div className="mx-auto px-[10px] flex flex-col justify-center">
        <div className=" flex justify-center align-middle">
          <img src={NoAnswer} alt="this a placeholder " className='w-[80px] h-[80px]'  />
        </div>
        <p className="text-gray-lighter text-center h-[30px] w-[200px] mx-auto text-[12px] leading-3">
          Select answers from the bubbles below to fill up your answers
        </p>
      </div>
    </div>
  )
}

export default AnswerSettings
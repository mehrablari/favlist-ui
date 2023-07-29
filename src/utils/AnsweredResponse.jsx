
import info from "../assets/images/Info.png"

const AnsweredResponse = () => {
  return (
    <div className="pt-[40px]">
      <div className='mx-auto p-[16px] gap-4 pt-[10px] w-327px bg-[#BDD0F1] bg-opacity-20 flex flex-col w-[327px] rounded-[24px] '>
        <div className='flex flex-row'>
            <img src={info} alt="warning" className='w-[20px] pr-[5px] h-[16px]'/>
            <p className="text-text-blue pr-[10px] w-[275px] font-[500] text-[13px] leading-4">You have answered this question</p>
        </div>
        <div className="mx-auto w-[275px]">
            <p className="font-[400] text-[13px] leading-[18px] text-gray-inactive">Your answers to this question are listed below. When the question expires, you’ll be able to see global responses to the question.</p>
        </div>

    </div>

    </div>
    
  )
}

export default AnsweredResponse
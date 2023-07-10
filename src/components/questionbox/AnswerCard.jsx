
import DismisIcon from "../../assets/icons/Dismiss.svg";


const AnswerCard = ({answer}) => {
  return (
    <div className="bg-neutral p-[12px] flex flex-row justify-between mx-auto w-[327px]">
         <div
              className="w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] m-[10px] h-[44px] mx-auto flex flex-row justify-between"
            >
            <span className="text-[13px] h-[16px]">{answer}</span>
            
            <img
              src={DismisIcon}
              alt="dismiss icon"
            
            />
          </div>
          
      </div>
  )
}

export default AnswerCard

//   onClick={() => handleDismiss(index)}
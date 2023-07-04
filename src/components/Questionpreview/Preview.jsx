import Video from "../../assets/icons/video.svg"
import ArrowBack from "../../assets/icons/arrowback.svg"

const Preview = () => {
  return (
    <div className="flex flex-col p-[40px] bg-primary">
      <div className="mx-auto">
        <h1 className="text-neutral font-[700] text-[13px] p-[10px]">
          Preview your answers
        </h1>
      </div>
      <div className="flex flex-col bg-neutral rounded-lg p-[20px]">
        <div className="flex flex-col">
          <h1 className="font-[500] text-[13px] text-text-blue">Questions</h1>
          <h1 className="font-[700] text-[18px]">
            What are your favourite television shows of all time?
          </h1>
          <div className="flex flex-row flex-end pt-[20px]">
            <img src={Video} alt="video" className="pr-[10px]" />

            <h1 className="font-[500] text-[13px] text-text-blue">
              Your preview video
            </h1>
          </div>
        </div>
        <div className="h-[144px] bg-gray-lighter p-[20px] rounded-lg"></div>
        <div className="flex justify-center p-[20px]">
          <button
            type="submit"
            className="h-[40px] m-[10px] bg-primary text-center rounded-lg font-[600] flex-grow flex-shrink text-[14px] text-neutral "
          >
            Submit
          </button>
        </div>
        <div className="flex flex-row items-center justify-between mx-auto rounded-lg h-[40px] p-[10px] bg-button-inactive max-w-[193px]">
          <img src={ArrowBack} alt="" className="h-full pr-[5px]" />
          <div className="text-[12px] font-semibold text-primary">
            Go back to edit answers
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
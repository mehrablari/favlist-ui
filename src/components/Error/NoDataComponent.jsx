
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom";

function NoDataComponent({message, buttonText}) {
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };

  return (
    <div className="flex justify-center items-center flex-col mx-auto pt-[100px] bg-neutral h-screen">
    <div className="text-center">
      <h1 className="text-[30px]">{message}</h1>
      <div  className="text-center"  onClick={refreshPage}>
        <button className="bg-primary text-neutral rounded-[24px] py-[15px] w-[100px] px-[15px] pb-[10px]" >
          {buttonText}
        </button>
      </div>
    </div>
  </div>
  )
}

NoDataComponent.propTypes = {
    message: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
}

export default NoDataComponent


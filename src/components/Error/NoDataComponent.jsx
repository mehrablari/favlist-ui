
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function NoDataComponent({message, buttonText}) {
  return (
    <div className="flex justify-center items-center flex-col mx-auto pt-[100px] bg-neutral h-screen">
    <div className="text-center">
      <h1 className="text-[30px]">{message}</h1>
      <Link to="/" className="text-center">
        <button className="bg-primary text-neutral rounded-[24px] py-[15px] w-[100px] px-[15px] pb-[10px]" >
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
  )
}

NoDataComponent.propTypes = {
    message: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
}

export default NoDataComponent


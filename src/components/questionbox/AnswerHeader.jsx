
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

const AnswerHeader = () => {
  return (
    <div className="bg-neutral pt-[15px] flex flex-row justify-between mx-auto w-[327px]">
        <div className="text-grey-text">
          <p className='text-[15px] font-[600]'>Your Answers</p>
          <p className='text-[12px] font-[400]'>Minimum 3, maximum 5 answers</p>
        </div>
        <Link to="/background" className='text-primary-light cursor-pointer'>
          <span className="text-primary text-[12px] font-[500]">Answer settings</span>
          <SettingsIcon sx={{color:"#A13E97",height:"12px"}}/>
          
        </Link>
      </div>
  )
}

export default AnswerHeader
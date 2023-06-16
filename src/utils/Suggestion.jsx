import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from 'react-router-dom';

const Suggestion = () => {
  return (
    <ul className='bg-neutral p-[12px] flex flex-row justify-between '>
        <li className='text-grey-text'>Suggestions</li>
        <Link to='/answeredlist'>
            <span className='text-primary hover:bg-sky-500 cursor-pointer'>See all Suggestions</span>
            <ArrowCircleRightOutlinedIcon className='text-primary'/>
            
        </Link>
    </ul>
  )
}

export default Suggestion
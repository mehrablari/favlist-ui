import { useRef, useState } from 'react';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const AnswerRef = () => {
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  const handleButtonClick = (index) => {
    scrollToIndex(index);
  };

  const handleButtonColor = (index) => {
    setActiveIndex(index);
  };

  return (
    <main>
        <nav>
        <button
          onClick={() => {
            handleButtonClick(0);
            handleButtonColor(0);
          }}
          style={{ color: activeIndex === 0 ? 'red' : 'inherit' }}
        >
          <FiberManualRecordOutlinedIcon />
        </button>
        <button
          onClick={() => {
            handleButtonClick(1);
            handleButtonColor(1);
          }}
          style={{ color: activeIndex === 1 ? 'red' : 'inherit' }}
        >
          <FiberManualRecordOutlinedIcon />
        </button>
        <button
          onClick={() => {
            handleButtonClick(2);
            handleButtonColor(2);
          }}
          style={{ color: activeIndex === 2 ? 'red' : 'inherit' }}
        >
          <FiberManualRecordOutlinedIcon />
        </button>
      </nav>
      <ul ref={listRef} className='flex flex-row justify-between'>
        <li>
          <img src="https://placekitten.com/g/200/200" alt="Tom" />
        </li>
        <li>
          <img src="https://placekitten.com/g/300/200" alt="Maru" />
        </li>
        <li>
          <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
        </li>
      </ul>
      
    </main>
  );
};

export default AnswerRef;

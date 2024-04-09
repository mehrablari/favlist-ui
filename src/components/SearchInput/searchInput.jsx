import React, { useState } from 'react';
import './searchInput.css'; // Make sure to create a corresponding CSS file for styling

const Chip = ({ label, onRemove }) => (
  <div className="chip">
    {label}
    <button onClick={onRemove} className="remove-chip">
      ×
    </button>
  </div>
);

const SearchInputWithChips = ({min , max , options}) => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue) {
      // Prevent form submission if you're using a form
      event.preventDefault();
      // Add the inputValue as a chip
      setChips([...chips, inputValue]);
      setInputValue(''); // Clear the input
    }
  };

  const removeChip = (index) => {
    setChips(chips.filter((_, i) => i !== index));
  };

  return (
    <>
        <div className="text-container mx-[7px]">
            <p>Select {min} to {max} answers</p>
        </div>
        <div className="search-input-container  mx-[5px]">
        {chips.map((chip, index) => (
            <Chip key={index} label={chip} onRemove={() => removeChip(index)} />
        ))}
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type and press enter..."
            className="search-input"
        />
        </div>

        <div className="options-container bg-primary">
            {
                options.map( (option, index) => {
                    return <div className="option-container mt-[5px] pl-[8px]">
                        <p>{option}</p>
                    </div>
                })
            }
        </div>
    </>
  );
};

export default SearchInputWithChips;

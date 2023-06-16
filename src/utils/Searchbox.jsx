
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import data from './data';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function Highlights() {
  const [textinput, setTextinput] = useState("")

    const handleChange = (event) => {
      console.log(event.target.value)
    };
  return (
    <Autocomplete
    className=' bg-neutral mx-auto  p-[12px]'
      id="highlights-demo"
      
      options={data}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField sx={{borderRadius:'16px'}}
          {...params}
          
          InputProps={{
            ...params.InputProps,
            placeholder: 'start typing an answer',
            startAdornment: (
              <>
                <SearchIcon color="action" />
                {params.InputProps.startAdornment}
              </>
            ),
            endAdornment: null, 
          }}
          onInput={handleChange}

        />
      )}
      
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue, { insideWords: true });
        const parts = parse(option.title, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}
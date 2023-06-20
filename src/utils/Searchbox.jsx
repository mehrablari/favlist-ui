import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import data from "./data";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function Highlights() {
  const [nameList, setNameList] = useState([]);

  const handleChange = (event, value) => {
    if (value) {
      setNameList((prevNameList) => [...prevNameList, value.title]);
    }
  };

  return (
    <div className="flex flex-col justify-center align-middle bg-neutral w-full h-full pt-[80px]  ">
      <Autocomplete
        className=" bg-neutral mx-auto  p-[20px] w-[327px]"
        id="highlights-demo"
        options={data}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
          
          sx={{ borderRadius: "20px", width:"327px", height:"44px" }}
            {...params}
            InputProps={{
              ...params.InputProps,
              placeholder: "Start typing an answer",
              startAdornment: (
                <>
                  <SearchIcon color="action" />
                  {params.InputProps.startAdornment}
                </>
              ),
              endAdornment: null,
            }}
          />
        )}
        onChange={handleChange}
      />
      <div className="flex flex-col p-[10px]">
        {nameList.map((nameItem, index) => (
          <div
            key={index}
            className="w-[327px] bg-[#e6d0d0] rounded-lg font-[400] text-gray-light p-[10px] m-[10px] h-[44px] mx-auto flex flex-row justify-between"
          >
            <span className="text-[13px]">{nameItem}</span>
            <ArrowCircleRightOutlinedIcon
            sx={{ color: "#FF5252", height: "12px" }}
          />
          
          
          </div>
        ))}
      </div>
    </div>
  );
}

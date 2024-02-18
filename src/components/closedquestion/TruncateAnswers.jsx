import { useState } from "react";
import Switch from "@mui/material/Switch";

const TruncateAnswers = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    // handleToggle(isChecked);
  };

  return (
    <div className="mx-auto flex flex-col pt-[30px] font-sans">
      <div className="font-[600] flex justify-start text-[13px] leading-4 mx-auto pb-[10px]">
        Truncate answers
      </div>
      <div className="flex flex-row justify-between mx-auto">
        <div className="w-[237px] font-[400] text-[13px]">The list will be truncated to display your answers. Turn this off if you want to see all the answers.</div>
        <div className="">
          <Switch
            checked={checked}
            onClick={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TruncateAnswers;

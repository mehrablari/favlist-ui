import { useEffect, useState } from "react";
import axios from "axios";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import path14 from "../../assets/images/path14.png";

const CardContainer = () => {
  const [apiData, setApiData] = useState([]);
  const [expirationDates, setExpirationDates] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://35.209.30.214:8080/QUESTIONS-SERVICE/api/v1/questions",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
            body: JSON.stringify({
              apiData: apiData,
            }),
          }
        );
        setApiData(response.data);
        setExpirationDates(response.data.map(item => item.expirationDate));
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(apiData);

  return (
    <main className="bg-primary p-[20px] h-[232px]">
      {apiData.map((item, index) => (
        <main
          className="bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[20px] p-[20px] min-w-[271px] drop-shadow-lg mb-[20px]"
          key={item.id}
        >
          <div className=" flex flex-col">
            <p className="text-[12px] text-gray-light font-[400]">
              Today's question
            </p>
            <div className="flex flex-row justify-center p-[12px] align-middle">
              <div>
                <AccessTimeOutlinedIcon
                  style={{ fontSize: "12px", height: "12px" }}
                  className="text-primary-light"
                />
              </div>
              <h1 className="pl-[12px] text-[12px] text-primary-light h-[12px] mb-[10px] font-[400]">
                6d to expiry
              </h1>
              <h1 className="pl-[12px] text-[12px] text-primary-light h-[12px] mb-[10px] font-[400]">
                {expirationDates[index]
                  ? `${Math.ceil(
                      (expirationDates[index] - Date.now()) /
                        (1000 * 60 * 60 * 24)
                    )}d to expiry`
                  : ""}
              </h1>
            </div>
          </div>
          <h2 className="text-[18px] font-[700]">{item.text}</h2>
          <div className="flex flex-col justify-center w-[43px] h-[56px] mx-auto">
            <h3 className="text-gray-lighter text-[12px] font-[400]">
              sponsor
            </h3>
            <div className="flex justify-center ">
              <img src={path14} alt="netflix" className="w-[24px] h-[24px]" />
            </div>
            <h3 className="text-gray-light font-[600]">Favlist</h3>
          </div>
        </main>
      ))}
    </main>
  );
};

export default CardContainer;

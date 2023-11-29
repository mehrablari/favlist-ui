import Logo from "../assets/images/logoAllWhite.png";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  // const navigate = useNavigate();

  const handleRoute = () => {
    localStorage.removeItem("selectedQuestionIndex");
    localStorage.setItem("selectedQuestionIndex", 0);
    window.location.reload();
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <main className="flex flex-col fixed top-0 sm:w-min-[320px] w-full z-40 bg-primary shadow-md">
      <nav className="flex flex-row px-[24px] justify-between h-[56px] py-[20px]">
        <header className="hover:cursor-pointer" onClick={() => handleRoute()}>
          {/* <Link to="/"> */}
            <img src={Logo} alt="logo" className="max-h-[20px]" />
          {/* </Link> */}
        </header>
        <div className="relative">
          {!open && (
            <FaBars
              className="text-neutral cursor-pointer"
              onClick={handleToggle}
            />
          )}
          {open && (
            <FaTimes
              className="text-neutral cursor-pointer"
              onClick={handleToggle}
            />
          )}
          {open && (
            <ul className="z-10 shadow-xl flex flex-col font-[700] sm:font-[600] md:font-[600]  w-[180px] h-[160px] justify-center align-middle rounded-[12px] bg-neutral gap-[8px] text-gray-list py-[10px] text-[14px] absolute top-[25px] right-[1px] font-baloo2">
              {/* <li className="cursor-pointer pl-[16px] font-baloo2">
                  Closed Questions
                <Link to="/closedquestion" className="font-baloo2">
                </Link>
              </li> */}
              {/* <hr className="w-full pl-[16px] text-[#F6F6F6] border-2 " /> */}
              <li className="cursor-pointer pl-[16px] hover:bg-sky-700">How it works</li>
              <li className="cursor-pointer pl-[16px]">About Favlist</li>
              <li className="cursor-pointer pl-[16px]">Terms & Conditions</li>
              
            </ul>
          )}
        </div>
      </nav>
    </main>
  );
};

export default NavBar;

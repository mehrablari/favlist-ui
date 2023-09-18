import Logo from "../assets/images/logoAllWhite.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
      <main className="flex flex-col fixed top-0 sm:w-min-[320px] w-full z-30 bg-primary shadow-md">
        <nav className="flex flex-row px-[24px] justify-between h-[56px] py-[20px]">
          <header>
            <Link to="/">
              <img src={Logo} alt="logo" className="max-h-[20px]" />
            </Link>
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
              <ul className="z-10 shadow-xl flex flex-col font-[700] sm:font-[600] md:font-[600]  w-[200px] h-[220px] justify-center align-middle rounded-[12px] bg-neutral gap-[8px] text-gray-list py-[16px] text-[14px] absolute top-[25px] right-[1px] font-baloo2">
                <li className="cursor-pointer pl-[16px]">
                  <Link to="/closedquestion" className="font-baloo2">Closed Questions</Link>
                </li>
                <hr className="w-full pl-[16px] text-[#F6F6F6] border-2 " />
                <li className="cursor-pointer pl-[16px]">How it works</li>
                <li className="cursor-pointer pl-[16px]">About Favlist</li>
                <li className="cursor-pointer pl-[16px]">Terms & Conditions</li>
                <hr className="w-full pl-[16px] text-[#F6F6F6] border-2 " />
                <li className="cursor-pointer pl-[16px]">Download App</li>
              </ul>
            )}
          </div>
        </nav>
      </main>

  );
};

export default NavBar;

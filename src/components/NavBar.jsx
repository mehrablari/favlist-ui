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
      <main className="flex flex-col fixed top-[0] sm:w-min-[320px] w-full z-10 bg-primary shadow-md">
        <nav className="flex flex-row px-[24px] justify-between h-[56px] py-[20px]">
          <header>
            <Link to="/">
              <img src={Logo} alt="logo" className="max-h-[15px]" />
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
              <ul className="z-10 shadow-xl flex flex-col font-medium w-[200px] h-[220px] justify-center align-middle rounded-[12px] bg-neutral gap-[8px] text-gray-list p-[16px] text-[14px] absolute top-[25px] right-[1px]">
                <li className="cursor-pointer">
                  <Link to="/closedquestion">Close Questions</Link>
                </li>
                {/* <hr className="w-full text-gray-lighter border-4 dark:bg-gray-dark" /> */}
                <li className="cursor-pointer">How it works</li>
                <li className="cursor-pointer">About Favlist</li>
                <li className="cursor-pointer">Terms & Conditions</li>
                {/* <hr className="w-full text-gray-lighter border-4 dark:bg-gray-lighter" /> */}
                <li className="cursor-pointer">Download App</li>
              </ul>
            )}
          </div>
        </nav>
      </main>

  );
};

export default NavBar;

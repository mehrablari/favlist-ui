import Logo from "../assets/images/logoAllWhite.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex flex-row justify-between p-[20px] h-[56px] bg-[#3973D4]">
      <div>
        <img src={Logo} alt="logo" className="h-[15px]" />
        
      </div>
      {/* <div
        onClick={() => setOpen(!open)}
        className="text-3xl text-neutral cursor-pointer"
      >
        <IoMenu name={open ? "close" : "menu"}/>
      </div> */}
      <ul
        className={` ${
          open ? "top-[20px] " : "top-[-490px]"
        }`}
      >
        <Link to="/" className="">
        <IoMenu name={open ? "close" : "menu"} className="text-neutral text-2xl"/>
        
        </Link>

      </ul>
      {/* <ul
        className={`md:flex pr-[10px] pt-[-1rem] sm:items-center md:pb-[-1rem] md:pt-[50px] sm:pt-[50px] pb-[10px] absolute lg:flex lg:flex-row lg:justify-end md:static lg:absolute lg:top-[2rem]  bg-[#e6eaef]  md:z-auto z-[-1] left-0 w-full md:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-[20px] " : "top-[-490px]"
        }`}
      >
        <Link
          to="/about"
          className="block text-[16px] mt-2 lg:inline-block lg:mt-0 p-[13px] text-gray-600 md:text-sm px-4 py-2 leading-none rounded hover:text-teal-500 hover:bg-white"
        >
          ABOUT
        </Link>
        <Link
          to="/game"
          className="block text-[16px] mt-2 lg:inline-block lg:mt-0 mr-4 p-[13px] text-gray-600 md:text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
        >
          GAME
        </Link>
        <Link
          to="/event"
          className="block text-[16px] mt-2 lg:inline-block lg:mt-0 p-[13px] text-gray-600 md:text-sm px-4 py-2 mr-4 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
        >
          EVENT
        </Link>
      </ul> */}
    </main>
  );
};

export default NavBar;

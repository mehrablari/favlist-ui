import Logo from "../assets/images/logoAllWhite.png";
import { Link } from "react-router-dom";
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

  const setDataLayer = (category, action, label) => {
    window.dataLayer.push({
      event: 'events',
      eventCategory: category,
      eventAction: action,
      eventLabel: label
    })
  }

  return (
    <main className="flex flex-col fixed top-0 sm:w-min-[320px] w-full z-40 bg-primary shadow-md">
      <nav className="flex flex-row px-[24px] justify-between h-[56px] py-[20px]">
        <header className="hover:cursor-pointer" onClick={() => handleRoute()}>
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
            <ul className="z-10 shadow-xl flex flex-col font-[700] sm:font-[600] md:font-[600] md:w-[145px] md:h-[145px] sm:w-[130px] sm:h-[135px]  w-[180px] h-[150px] justify-center align-middle rounded-[12px] bg-neutral gap-[8px] text-gray-list py-[10px] text-[14px] sm:text-[13px] absolute top-[25px] right-[1px] font-baloo2">
              <li className="cursor-pointer pl-[14px] font-baloo2" onClick={ () => setDataLayer('ux', 'click', 'navbar-closedQuestion')}>
                  
                <Link to="/closedquestion" className="font-baloo2 ">
                Closed Questions
                </Link>
              </li>
              <hr className="w-full pl-[16px] text-[#F6F6F6] border-2 " />
              <li className="cursor-pointer pl-[16px] hover:bg-sky-700" onClick={ () => setDataLayer('ux', 'click', 'navbar-howItsWork')}>
                <Link to="/howitworks">
                  How it works
                </Link>
              </li>
              <li className="cursor-pointer pl-[16px]" onClick={ () => setDataLayer('ux', 'click', 'navbar-about ')}>
                <Link to="/about">
                  About Favlist
                </Link>
                </li>
              <li className="cursor-pointer pl-[16px]" onClick={ () => setDataLayer('ux', 'click', 'navbar-terms')}>
                <Link to="/termsandconditions">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </main>
  );
};

export default NavBar;
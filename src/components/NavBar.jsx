// import Logo from "../assets/images/logoAllWhite.png";
// import { Link } from "react-router-dom";
// import { useState } from "react";


// const NavBar = () => {
//   const [open, setOpen] = useState(false);
  


//   return (
//     <main className="flex flex-row justify-between p-[20px] h-[56px] bg-primary">
//       <div className="flex mx-4 cursor-pointer items-center justify-between font-[Poppins] text-2xl font-bold text-gray-800">
//           <img src={Logo} alt="logo" className="h-[15px]" />
//           <span
//             onClick={() => setOpen(!open)}
//             className=" right-8 top-6 text-3xl md:hidden"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-neutral"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </span>
//         </div>
//         <ul
//           className={`left absolute z-[-1] w-full bg-white pb-12 pl-5 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
//             open
//               ? "top-20 opacity-100"
//               : "top-[-490px] md:opacity-100 opacity-0"
//           }`}
//         >
//           <li className="py-2 text-xl md:my-0 md:ml-8">
//             <a
//               href="1"
//               className="text-gray-800 duration-300 hover:text-gray-400"
//             >
//               Home
//             </a>
//           </li>
//           <li className="py-2 text-xl md:my-0 md:ml-8">
//             <a
//               href="2"
//               className="text-gray-800 duration-300 hover:text-gray-400"
//             >
//               About
//             </a>
//           </li>
//           <li className="py-2 text-xl md:my-0 md:ml-8">
//             <a
//               href="3"
//               className="text-gray-800 duration-300 hover:text-gray-400"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//     </main>
//   );
// };

// export default NavBar;

import Logo from "../assets/images/logoAllWhite.png";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from "react-router-dom";

export default function MenuAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);

 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="bg-primary" >
      <AppBar position="static">
        <Toolbar className="flex flex-row justify-between bg-primary px-[8] py-[16px]">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-[15px]" />
          </Link>
        
        <div className="">
              <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
              <Menu
                
                
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Closed Question</MenuItem>
                <hr className="h-[8px] bg-[#F6F6F6] border-0 dark:bg-gray-lighter"/>
                <MenuItem onClick={handleClose}>How it works</MenuItem>
                
                <MenuItem onClick={handleClose}>About Favlist</MenuItem>
                <hr className="h-[8px] bg-[#F6F6F6] border-0 dark:bg-gray-lighter" />
                <MenuItem onClick={handleClose}>Download App</MenuItem>
              </Menu>
            </div>
           
      
        </Toolbar>
        <hr className="text-gray-dark"/>
      </AppBar>
    </Box>
  );
}
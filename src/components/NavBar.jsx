import Logo from "../assets/images/logoAllWhite.png";
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import { Link } from "react-router-dom";

// export default function MenuAppBar() {

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box className="bg-primary overflow-hidden" >
//       <AppBar position="static">
//         <Toolbar className="flex flex-row justify-between bg-primary px-[8] py-[16px] overflow-hidden">
// <Link to="/">
//   <img src={Logo} alt="logo" className="h-[15px]" />
// </Link>

//         <div className="overflow-hidden">
//               <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//               onClick={handleMenu}
//             >
//               <MenuIcon />
//             </IconButton>
//               <Menu

//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}

//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}

//               >
//                 <MenuItem onClick={handleClose}>Closed Question</MenuItem>
//                 <hr className="h-[8px] bg-[#F6F6F6] border-0 dark:bg-gray-lighter"/>
//                 <MenuItem onClick={handleClose}>How it works</MenuItem>

//                 <MenuItem onClick={handleClose}>About Favlist</MenuItem>
//                 <hr className="h-[8px] bg-[#F6F6F6] border-0 dark:bg-gray-lighter" />
//                 <MenuItem onClick={handleClose}>Download App</MenuItem>
//               </Menu>
//             </div>

//         </Toolbar>
//         <hr className="text-gray-dark"/>
//       </AppBar>
//     </Box>
//   );
// }

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <main className="flex flex-col">
      <nav className="flex flex-row px-[24px] justify-between h-[56px] py-[20px]">
      <header>
        <Link to="/">
          <img src={Logo} alt="logo" className="h-[15px]" />
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
          <ul className="z-10 shadow-xl flex flex-col w-[241px] h-[276px] justify-center align-middle rounded-[12px] bg-neutral gap-[20px] text-gray-dark p-[10px] text-[14px] absolute top-[40px] right-[5px] md:hidden lg:hidden">
            <li>Close Questions</li>
            <hr className="w-full text-gray-lighter border-4 dark:bg-gray-dark" />
            <li>How it works</li>
            <li>About Favlist</li>
            <li>Terms & Conditions</li>
            <hr className="w-full text-gray-lighter border-4 dark:bg-gray-lighter" />
            <li className="">Download App</li>
          </ul>
        )}
      </div>

      </nav>
      <hr className="text-gray-dark"/>
      
    
    </main>
  );
};

export default NavBar;


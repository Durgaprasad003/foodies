import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Logo from "../Assets/Logo.svg"
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";

function Navbar() {
  const [openme, setopen] = useState(false);
  const menu = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
      <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">

      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Testimonials</a>
      <a href="">Contact</a>
      <a href="">
        <BsCart2 className="navbar-cart-icon"/>
      </a>
      <button className="primary-button">Bookings Now </button>
      
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={()=>{setopen(true)}}/>
      </div>

      <Drawer open={openme} onClose={()=>{setopen(false)} } anchor="right">
      <Box sx={{width:250}} role="presentation" onClick={()=>{setopen(false)} }onkeydown={()=>{setopen(false)}}>
      <List>
         {
             menu.map((item)=>{

              <ListItem key={item.text} disablePadding>
              
              <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
              </ListItemButton>
              </ListItem>


             })

         }
      
      </List>
      </Box>
      </Drawer>
    </nav>
  );
}

export default Navbar;

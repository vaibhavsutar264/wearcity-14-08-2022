import React from "react";

import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaUserAlt,FaSearch,FaCartPlus} from "react-icons/fa";


// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "dvdfs",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
// //   profileIcon:{true},
//   ProfileIconElement:{FaSearch},
//   profileIconMargin:	"0",
//   SearchIconElement:FaSearch,
//   CartIconElement:FaSearch,
//   profileIconUrl: "/login",
//   searchIconUrl: "/login",
//   cartIconUrl: "/login",
//   profileIconSize: "2vmax",
//   searchIconSize: "2vmax",
//   cartIconSize: "2vmax",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "red",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

const Header = () => {
//   return <ReactNavbar {...options} />;
   return <ReactNavbar
   burgerColorHover= "#eb4034"
   logo={logo}
   logoWidth= "20vmax"
   navColor1= "white"
   logoHoverSize= "10px"
   logoHoverColor= "#eb4034"
   link1Text= "Home"
   link2Text= "Products"
   link3Text= "Contact"
   link4Text= "About"
   link1Url= "/"
   link2Url= "/products"
   link3Url= "/contact"
   link4Url= "/about"
   link1Size= "1.3vmax"
   link1Color= "rgba(35, 35, 35,0.8)"
   nav1justifyContent= "flex-end"
   nav2justifyContent= "flex-end"
   nav3justifyContent= "flex-start"
   nav4justifyContent= "flex-start"
   link1ColorHover= "#eb4034"
   link1Margin= "1vmax"
   profileIcon = {true}
   ProfileIconElement={FaUserAlt}
   searchIcon= {true}
   SearchIconElement={FaSearch}
   cartIcon= {true}
   CartIconElement={FaCartPlus}
   profileIconUrl= "/login"
//    searchIconUrl= "/search"
   cartIconUrl= "/cart"
   profileIconColor= "rgba(35, 35, 35,0.8)"
   searchIconColor= "rgba(35, 35, 35,0.8)"
   cartIconColor= "rgba(35, 35, 35,0.8)"
   profileIconColorHover= "#eb4034"
   searchIconColorHover= "#eb4034"
   cartIconColorHover= "#eb4034"
   cartIconMargin= "1vmax"
           
   
   />
};

export default Header;
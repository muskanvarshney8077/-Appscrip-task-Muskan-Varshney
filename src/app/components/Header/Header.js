"use client";
import Logo from "../../assets/Header/Logo.png";
import Search from "../../assets/Header/Search.png";
import ArrowLeft from "../../assets/Header/Arrow-left.png";
import Heart from "../../assets/Header/Heart.png";
import Profile from "../../assets/Header/Profile.png";
import ShoppingBag from "../../assets/Header/Shopping-bag.png";
import Menubar from "../../assets/Header/Menubar.png";
import "../Header/Header.css";

import Image from "next/image";
import { useMyContext } from "@/app/utils/Context";
const Header = () => {
  const menu = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];
  const { state, handleState } = useMyContext();
  return (
    <div>
      <div className="Header">
        <div className="LogoDiv">
          <Image
            src={Menubar}
            alt="menubar"
            className="menubar"
            onClick={() => handleState({ menuCollapse: !state.menuCollapse })}
          />
          <Image src={Logo} alt="Icon" className="LogoD" />
        </div>
        <div className="LogoStyleDiv">
          <p className="Logostyle"> LOGO</p>
        </div>
        <div className="IconCorner">
          <Image className="iconCornerImage" src={Search} alt="search" />
          <Image className="iconCornerImage" src={Heart} alt="heart" />
          <Image
            className="iconCornerImage"
            src={ShoppingBag}
            alt="shoppingbag"
          />
          <Image className="iconCornerImage" src={Profile} alt="profile" />
          <div className="Lang">
            <p>ENG</p>
            <Image
              className="iconCornerImage"
              src={ArrowLeft}
              alt="arrowleft"
            />
          </div>
        </div>
      </div>
      {state.menuCollapse && (
        <div className="Menu">
          {menu?.map((ele, i) => (
            <div className="MenuColumn" key={i}>
              <p>{ele}</p>
            </div>
          ))}
        </div>
      )}

      <hr className="hr" />
    </div>
  );
};

export default Header;

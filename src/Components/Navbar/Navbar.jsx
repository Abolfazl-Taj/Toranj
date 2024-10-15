import "./Navbar.css";
import Data_Navbar_Item from "../../Assets/Data/Data_Navbar_Item";
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import logo from "../../Assets/Imgs/Logo.svg";
import { memo } from "react";
const Navbar = memo(() => {
  return (
    <div className="Navbar">
      <div className="Navbar_Right">
        <img src={logo} alt="Toranj_Logo" className="Navbar_Logo" />
        <ul className="Navbar_List">
          {Data_Navbar_Item.map((item) => (
            <li className="Navbar_Item" key={item.id}>
              <NavLink className="" to={item.to}>
                <i> {item.icon} </i>
                <span> {item.name} </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="Navbar_Left">
        <div className="Navbar_Search">
          <i className="Navbar_Icon">
            <RiSearchLine />
          </i>
          <input
            type="text"
            className="Navbar_Input"
            placeholder="  جستجو کنید .... "
          />
        </div>
        <button className="Navbar_Btn">ورود|ثبت نام</button>
      </div>
    </div>
  );
});

export default Navbar;

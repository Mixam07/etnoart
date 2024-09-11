import { Space } from "antd";
import { NavLink } from "react-router-dom";
import "./NavigationMenu.css";

const NavigationMenu = (props) => {
  return (
    <div className="navigation-menu">
      <Space size={50}>
        <NavLink
          to="/home"
          className="navigation-menu-item"
          activeclassname="active"
        >
          {"Kreu".toUpperCase()}
        </NavLink>
        <NavLink
          to="/about"
          className="navigation-menu-item"
          activeclassname="active"
        >
          {"Rreth Meje".toUpperCase()}
        </NavLink>
        <NavLink
          to="/folk-dress"
          className="navigation-menu-item"
          activeclassname="active"
        >
          {"Garderoba".toUpperCase()}
        </NavLink>
        <NavLink
          to="/souvenirs"
          className="navigation-menu-item"
          activeclassname="active"
        >
          {"Suvenire".toUpperCase()}
        </NavLink>
      </Space>
    </div>
  );
};

export default NavigationMenu;

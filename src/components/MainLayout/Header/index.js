import { Layout, Typography } from "antd";
import "./index.css";
import NavigationMenu from "./NavigationMenu";

const Header = (props) => {
  return (
    <Layout.Header>
      <div className="topbar">
        <div className="logo-wrapper">
          <Typography.Title level={1} className="logo">
            {"Lirika Pojani".toUpperCase()}
          </Typography.Title>
        </div>
        <NavigationMenu />
      </div>
    </Layout.Header>
  );
};

export default Header;

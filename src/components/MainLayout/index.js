import { Layout } from "antd";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <Layout>
      <Header />
      <Layout.Content>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
}

export default MainLayout;

import { SiWhatsapp } from 'react-icons/si';
import { Layout, Space, Avatar } from "antd";
import './index.css';

const Footer = () => {
    return (
        <Layout.Footer>
            <div className="footer-content">
                <Space size={50} direction="vertical">
                    <Avatar size={45} src="http://xsgames.co/randomusers/assets/avatars/pixel/37.jpg" />

                    <span className="contact-title">{'Më kontakto'.toUpperCase()}</span>

                    <Space size={30} className="social-media">
                        <a href="https://www.facebook.com/profile.php?id=100092427941628" target="blank">{'Facebook'.toUpperCase()}</a>
                        <a href="https://www.instagram.com/lirikapojani_artcrafts/" target="blank">{'Instagram'.toUpperCase()}</a>
                    </Space>

                    <span>lirikapojaniartcrafts@gmail.com</span>

                    <span>+355 69 544 9200</span>

                    <div className="copyright-text">
                        {'Copyright © 2023 Lirika Pojani. All rights reserved'.toLocaleUpperCase()}
                    </div>
                </Space>
            </div>
            <div
                className="whatsapp-icon"
            >
                <a
                    href="https://api.whatsapp.com/send?phone=695449200"
                    target="_blank"
                >
                    <SiWhatsapp size={28} />
                </a>
            </div>
        </Layout.Footer>
    );
};

export default Footer;
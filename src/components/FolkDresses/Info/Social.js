import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Social.css";

const Social = (props) => {
  const productUrl = props.url;
  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=355695449200&text=${encodeURIComponent(
      productUrl
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <button className="wap-social" onClick={handleShareWhatsApp}>
        <FaWhatsapp size={14} style={{ marginRight: "8px" }} />
        Më njofto
      </button>
    </div>
  );
};

export default Social;

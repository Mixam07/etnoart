import "./Photos.css";
import { useState } from "react";

const Photos = (props) => {
  const photos = props.photos;

  const [mainPhoto, setMainPhoto] = useState(photos[0]);
  return (
    <div className="photos">
      <div className="main-photo">
        <img src={mainPhoto} alt="Logo" />
      </div>
      <div className="other-photos">
        {photos.map((curElm, index) => {
          return (
            <img
              src={curElm}
              className={
                curElm === mainPhoto ? "other-photo active" : "other-photo"
              }
              key={index}
              onClick={() => setMainPhoto(curElm)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Photos;

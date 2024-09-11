import Photos from "./Photos/Photos";
import Info from "./Info/Info";
import "./FolkDress.css";

const FolkDress = (props) => {
  return (
    <div className="folk-dress">
      <Photos photos={props.dresses.photos} />
      <Info
        title={props.dresses.title}
        description={props.dresses.description}
        category={props.dresses.category}
      />
    </div>
  );
};

export default FolkDress;

/**
 *    {
      id: Math.random() * Math.random(),
      photos: {
        mainPhoto: photos[0],
        otherPhotos: [photos[0], photos[1], photos[2], photos[3]],
      },
      title: "Title",
      description: "Description",
    },
 */

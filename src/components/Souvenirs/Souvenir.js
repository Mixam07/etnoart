import Photos from "../FolkDresses/Photos/Photos";
import Info from "../FolkDresses/Info/Info";
import "./Souvenir.css";

const Souvenir = (props) => {
  return (
    <div className="souvenir">
      <Photos photos={props.souvenirs.photos} />
      <Info
        title={props.souvenirs.title}
        description={props.souvenirs.description}
        category={props.souvenirs.category}
      />
    </div>
  );
};

export default Souvenir;

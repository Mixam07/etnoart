import classes from "./Info.module.css";
import Social from "./Social";

const Info = (props) => {
  return (
    <div className={classes["product-info"]}>
      <div className={classes["product-header"]}>
        <h1>{props.title}</h1>
        <h2>{props.category}</h2>
      </div>
      <div className={classes["product-body"]}>
        <p>{props.description}</p>
      </div>
      <div className={classes["product-footer"]}>
        <Social url={props.url} />
      </div>
    </div>
  );
};

export default Info;

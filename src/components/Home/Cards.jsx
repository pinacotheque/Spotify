import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";
import styles from "./Home.module.css";
const Cards = (props) => {
  return (
    <>
      <div
        className={styles.Card}
        onClick={() => props.history.push("/album/" + props.id)}
      >
        <div
          className="px-0  mr-2 "
          style={{ height: "200px", width: "15rem" }}
        >
          <img
            src={props.img}
            className="card-img-top"
            id={styles.cardImg}
            alt="..."
          />

          <div className=" text-center pt-3 ">
            <h5 style={{ color: "white", fontSize: "14px" }}>
              {props.album.title}{" "}
            </h5>
            <h6 style={{ color: "white", fontSize: "14px" }}>
              {props.album.artist.name}{" "}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Cards);

import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  //   const classes = "card " + props.className;
  return (
    <div
      className={`${styles.card} ${
        props.className !== undefined ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}

export default Card;

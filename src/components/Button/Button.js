import React from "react";

import { ArrowRight } from "react-feather";

import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${styles.button} ${
        props.disabled ? styles["button-disabled"] : ""
      } ${props.className || ""} 
        ${props.bordered ? styles["button-bordered"] : ""} 
        `}
    >
      {props.children}
      {props.icon ? <ArrowRight className={styles.icon} /> : ""}
    </button>
  );
}

export default Button;

import React from "react";

import styles from "./Spinner.module.css";

function Spinner(props) {
  return (
    <div className={`${styles.loader} ${props.small ? styles.small : ""}`}>
      <div className={styles.container}></div>
      <div className={styles.line}></div>
      <div className={styles.line2}></div>
    </div>
  );
}

export default Spinner;

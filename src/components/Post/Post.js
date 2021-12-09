import React from "react";

import styles from "./Post.module.scss";

function Post(props) {
  const handleTimeStamp = () => {
    const date = new Date(props.details.date);
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    let month = date.getMonth();
    month = month < 10 ? `0${month}` : month;
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <img src={props?.details.image} alt="post" />
      </div>
      <div className={styles.details}>
        <h3>{props?.details.title}</h3>
        <p className={styles.postDesc}>{props?.details.desc}</p>
        <span className={styles.date}>{handleTimeStamp()}</span>
      </div>
    </div>
  );
}

export default Post;

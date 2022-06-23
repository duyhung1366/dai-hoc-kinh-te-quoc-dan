import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
  const { icon, placeholder } = props;
  return (
    <div className={styles.boxInput}>
      {/* icon */}
      <div>{icon}</div>
      {/* data */}
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;

import React from "react";
import styles from "./ButtonLogin.module.scss";
const ButtonLogin = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <button onClick={handleSubmit} className={styles.button}>
        Đăng nhập
      </button>
    </div>
  );
};

export default ButtonLogin;

import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  const { check } = props;
  const [text, setText] = useState();

  useEffect(() => {
    if (check) {
      setText(
        <div className={styles.footer}>
          <p>không có tài khoản ?</p>
          <button>đăng ký ngay</button>
        </div>
      );
    } else {
      setText(
        <div className={styles.footer}>
          <p>đã có tài khoản ?</p>
          <button>đăng nhập ngay</button>
        </div>
      );
    }
  }, []);

  return <div>{text}</div>;
};

export default Footer;

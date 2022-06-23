import React from "react";
import ButtonLogin from "./ButtonLogin/ButtonLogin";
import { BsFacebook } from "react-icons/bs";
import styles from "./Submit.module.scss";

const Submit = (props) => {
  const { type } = props;
  return (
    <div className={styles.submit}>
      {/* validate */}
      <div className={styles.none}>
        <p></p>
      </div>

      {/* đăng nhap button */}
      <ButtonLogin />

      {/*  */}
      <div className={styles.text}>Hoặc {type} bằng</div>

      <div className={styles.facebook}>
        <button>
          <div>
            <BsFacebook />
          </div>
          <p>Facebook</p>
        </button>
      </div>
    </div>
  );
};

export default Submit;

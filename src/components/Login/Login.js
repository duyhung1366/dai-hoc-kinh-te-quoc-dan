import React, { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import Input from "./Input/Input";
import Header from "./Header/Header";
import Submit from "./Submit/Submit";
import styles from "./Login.module.scss";
import Footer from "./Footer/Footer";
import clsx from "clsx";
import { useSelector } from "react-redux";

const Login = () => {
  // const toggle = useSelector((state) => state.login.toggle);
  // console.log(toggle);

  return (
    <div className={clsx(styles.login, "d_none")}>
      {/* header */}
      <div className={styles.container}>
        <Header type="Đăng Nhập" />

        {/* input */}
        <div>
          {/* tai khoan */}
          <Input icon={<BiUserCircle />} placeholder="Tài khoản đăng nhập *" />

          {/* mat khau */}
          <Input icon={<RiLockPasswordLine />} placeholder="Mật khẩu *" />
        </div>

        {/* quen mat khau */}
        <div className={styles.pass}>
          <p>Quên mật khẩu ?</p>
        </div>

        <Submit type="Đăng nhập" />

        <Footer check={true} />
      </div>
    </div>
  );
};

export default Login;

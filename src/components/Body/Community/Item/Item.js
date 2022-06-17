import clsx from "clsx";
import React from "react";
import styles from "./Item.module.scss";
import { BsFacebook } from "react-icons/bs";

const Item = ({ title, numberMember, linkJoin }) => {
  return (
    <div className={clsx("col l-3 m-6 c-12")}>
      <div className={styles.item}>
        <div className={styles.header}>
          <div>
            <BsFacebook />
          </div>
          <span>{title}</span>
        </div>
        <div className={styles.body}>
          <div className={styles.itemMember}>
            <div className={styles.icon}>
              <img
                src="https://onthisinhvien.com/resources/images/otsv/icon-listmember.svg"
                alt=""
              />
              <div>Thành Viên</div>
            </div>
            <div>{numberMember}</div>
          </div>
          <div className={styles.join}>
            <a href={linkJoin} target="_blank" rel="noreferrer">
              Tham gia ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

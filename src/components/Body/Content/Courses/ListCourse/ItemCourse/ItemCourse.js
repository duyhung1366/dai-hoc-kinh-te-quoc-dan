import clsx from "clsx";
import React from "react";
import styles from "./ItemCourse.module.scss";

const ItemCourse = ({ linka, linkImg, title, decription, price }) => {
  return (
    <div className={clsx("col l-3 m-4 c-6")}>
      <a
        href={`https://onthisinhvien.com/khoa-hoc-${linka}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.itemCourse}>
          <div className={styles.imgCourse}>
            <img src={linkImg} alt="" />
          </div>
          <div className={styles.infoCourse}>
            <div className={styles.title}>{title}</div>
            <div className={styles.decription}>{decription}</div>
            <div className={styles.price}>{price}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ItemCourse;

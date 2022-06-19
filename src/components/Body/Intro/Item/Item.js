import clsx from "clsx";
import React from "react";
import styles from "./Item.module.scss";

const Item = ({ linkIcon, count, charactor, textInfo }) => {
  return (
    <div className={clsx(styles.item, "col c-4 m-2-4 l-2-4")}>
      <div className={styles.imageInfo}>
        <img src={linkIcon} alt="" />
        <div className={styles.hoverShow}></div>
      </div>
      <div className={styles.numberInfo}>
        <div className={styles.count}>{count}</div>
        <div className={styles.charactor}>{charactor}</div>
      </div>
      <div className={styles.textInfo}>{textInfo}</div>
    </div>
  );
};

export default Item;

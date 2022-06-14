import clsx from "clsx";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import styles from "./HeaderCombo.module.scss";

const HeaderCombo = ({ title, cost, toggle, setToggle }) => {
  // handle toggle
  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div className={clsx("row", styles.header)}>
      <div className="col l-5 m-5 c-6">
        <div className={styles.title}>{title}</div>
        <button
          className={clsx(toggle ? "" : "d_none", styles.buttonDetail)}
          onClick={handleToggle}
        >
          Thu Gọn
          <AiFillCaretUp />
        </button>
        <button
          className={clsx(!toggle ? "" : "d_none", styles.buttonDetail)}
          onClick={handleToggle}
        >
          Xem Chi Tiết
          <AiFillCaretDown />
        </button>
      </div>
      <div className={clsx("col l-7 m-7 c-6 d-flex", styles.headerRight)}>
        <div className={styles.cost}>{cost} VND</div>
        <a
          href="https://onthisinhvien.com/thanh-toan?combo-khoa-hoc=6648107072749568"
          target="_blank"
          rel="noreferrer"
          className={styles.buttonBuy}
        >
          Mua ngay
        </a>
      </div>
    </div>
  );
};

export default HeaderCombo;

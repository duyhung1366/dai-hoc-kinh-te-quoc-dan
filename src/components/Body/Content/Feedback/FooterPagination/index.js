import clsx from "clsx";
import { useDispatch } from "react-redux";
import { slideFeedback } from "../../../../../actions/SlideFeedback";
import styles from "./index.module.scss";

const FooterPagination = () => {
  const dispatch = useDispatch();

  const handleClick = (e, index) => {
    dispatch(slideFeedback(index));
    const nodes = e.target.parentElement.children;
    for (var i = 0; i < nodes.length; i++) {
      if (index == i) {
        nodes[i].classList.add(styles.active);
      } else {
        nodes[i].classList.remove(styles.active);
      }
    }
  };

  return (
    <div>
      <ul className={clsx(styles.pagination)}>
        <li
          onClick={(e) => {
            handleClick(e, 0);
          }}
          className={styles.active}
        >
          1
        </li>
        <li
          onClick={(e) => {
            handleClick(e, 1);
          }}
        >
          2
        </li>
        <li
          onClick={(e) => {
            handleClick(e, 2);
          }}
        >
          3
        </li>
        <li
          onClick={(e) => {
            handleClick(e, 3);
          }}
        >
          4
        </li>
      </ul>
    </div>
  );
};

export default FooterPagination;

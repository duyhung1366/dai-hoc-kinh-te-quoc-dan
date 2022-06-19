import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { slideCombo } from "../../../../actions/SlideCombo";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  const [sum, setSum] = useState(null);
  const [pagin, setPagin] = useState([]);
  const dispatch = useDispatch();
  const active = useRef(null);

  // get state sum nav
  const sumNav = useSelector((state) => state.slideCombo.sum);
  const indexNav = useSelector((state) => state.slideCombo.index);

  useEffect(() => {
    if (sumNav >= 0) {
      setSum(sumNav);
    }
  }, [sumNav]);

  useEffect(() => {
    const handleClick = (e, index) => {
      dispatch(slideCombo(index + 1));
      toggleClass(e, index);
    };

    const toggleClass = (e, index) => {
      if (e) {
        const nodes = e.target.parentElement.parentElement.children;
        for (var i = 0; i < nodes.length; i++) {
          if (index == i) {
            nodes[i].children[0].classList.add(styles.active);
          } else {
            nodes[i].children[0].classList.remove(styles.active);
          }
        }
      }
    };
    const element = [];
    for (let i = 1; i <= sum; i++) {
      element.push(
        <div
          key={i}
          className={clsx(styles.paginBox)}
          onClick={(e) => {
            handleClick(e, i - 1);
          }}
        >
          <span className={i === indexNav ? styles.active : ""}></span>
        </div>
      );
    }
    setPagin(element);
  }, [sum, indexNav]);
  return <div className="d-flex j-c a-center">{pagin}</div>;
};

export default Pagination;

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Detail from "./Detail/Detail";
import HeaderCombo from "./HeaderCombo/HeaderCombo";
import styles from "./ItemCombo.module.scss";

const ItemCombo = ({ data, toggleItem }) => {
  const [toggle, setToggle] = useState(toggleItem);
  const title = data.title; // title header combo
  const cost = data.cost;
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);

  useEffect(() => {
    const textData = data.detail; // mang text data from api
    let midIndex;
    if (textData) {
      if (textData.length % 2 !== 0) {
        midIndex = Math.floor(textData.length / 2) + 1;
      } else {
        midIndex = textData.length / 2;
      }

      setCol1(textData.slice(0, midIndex));
      setCol2(textData.slice(midIndex, textData.length));
    }
  }, [data]);

  // handle toggle
  // const {checkId, check} = useSelector(state => state.toggle)

  // console.log("checkid , check", checkId, check);

  return (
    <div className={styles.itemCombo}>
      <HeaderCombo
        title={title}
        cost={cost}
        toggle={toggle}
        setToggle={setToggle}
      />
      <div className={clsx("row", toggle ? "" : "d_none")}>
        <div className="col l-6">
          {col1.map((col, i) => (
            <Detail text={col} key={i} />
          ))}
        </div>
        <div className="col l-6">
          {col2.map((col, i) => (
            <Detail text={col} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemCombo;

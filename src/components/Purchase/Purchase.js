import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Purchase.module.scss";
import { MdNavigateNext } from "react-icons/md";
import PurchaseApi from "../../api/PurchaseApi";
import ItemCombo from "./ItemCombo/ItemCombo";
import { useSelector } from "react-redux";

const Purchase = () => {
  const [dataPurchase, setDataPurchase] = useState([]);
  const [firstComboData, setFirstcomboData] = useState({});
  const firstCombo = useSelector((state) => state.showComboFirst.id);

  useEffect(() => {
    const fetchPurchaseList = async () => {
      try {
        const response = await PurchaseApi.getAll();
        setDataPurchase(response);
      } catch (error) {
        console.log("failed to fetch data purchase list : ", error);
      }
    };

    const dataCombo = JSON.parse(localStorage.getItem("dataCombo"));
    if (dataCombo === null) {
      fetchPurchaseList();
    } else {
      const firstComboIndex = dataCombo.findIndex(
        (data) => data.id == firstCombo
      );
      const first = dataCombo.splice(firstComboIndex, 1);
      setFirstcomboData(first[0]);
      setDataPurchase(dataCombo);
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#F2F6FC" }}>
      {/* nav */}
      <div className={styles.nav}>
        <div className={clsx("grid wide d-flex")}>
          <Link to="/dai-hoc-kinh-te-quoc-dan">Trang chủ</Link>
          <div className={styles.icon}>
            <MdNavigateNext />
          </div>
          <Link to="/combo">Combo</Link>
        </div>
      </div>

      {/* content */}
      <div>
        <div className={clsx(styles.combo)}>
          {/* <FirstCombo /> */}
          <div>
            <ItemCombo data={firstComboData} toggleItem={true} />
          </div>
          {/* combo lien quan */}
          <div className={styles.text}>combo liên quan</div>
          {/* last combo */}
          {dataPurchase.map((Purchase) => (
            <ItemCombo key={Purchase.id} data={Purchase} toggleItem={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Purchase;

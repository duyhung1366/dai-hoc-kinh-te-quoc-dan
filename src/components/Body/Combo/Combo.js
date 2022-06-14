import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./Combo.module.css";
import ReactLoading from "react-loading";
import PurchaseApi from "../../../api/PurchaseApi";
import { useDispatch } from "react-redux";
import { showComboFirst } from "../../../actions/ShowComboFirst";

const Combo = () => {
  const [combos, setCombo] = useState([]);
  const [x, setX] = useState(260);
  const [index, setIndex] = useState(1);
  const [isloaded, setIsloaded] = useState(false);

  useEffect(() => {
    try {
      const fetchComboList = async () => {
        try {
          const response = await PurchaseApi.getAll();
          setCombo(response);
          setIsloaded(true);
          // lưu vào local
          localStorage.setItem("dataCombo", JSON.stringify(response));
        } catch (error) {
          console.log("failed to fetch data combo list : ", error);
        }
      };

      fetchComboList();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const countId = setInterval(() => {
      setIndex((pre) => (pre < 5 ? pre + 2 : (pre = 1)));
    }, 3000);

    return () => {
      clearInterval(countId);
    };
  }, []);

  useEffect(() => {
    setX(260 * index);
  }, [index]);

  const dispatch = useDispatch();

  const handleCombo = (e) => {
    // console.log(e.currentTarget.id);
    dispatch(showComboFirst(e.currentTarget.id));
  };

  return (
    <div className={clsx(styles.combo)}>
      <div className={styles.customCombo}>
        <div className={styles.tagCombo}>
          <img
            alt=""
            src="https://onthisinhvien.com/resources/images/otsv/tag-hotcombo.png"
          />
        </div>
        <div className={clsx(styles.listCombo)}>
          <div className={clsx(styles.container)}>
            {/* call api */}
            {isloaded ? (
              <div
                className={clsx(styles.itemCombos)}
                style={{
                  transform: `translate(-${x - 260}px, 0px)`,
                  transition: "all 800ms ease 0s",
                }}
              >
                {combos.map((combo) => {
                  return (
                    <div
                      key={combo.id}
                      id={combo.id}
                      className={styles.colItem}
                      onClick={(e) => {
                        handleCombo(e);
                      }}
                    >
                      <Link to="/combo" className={styles.linkCombo}>
                        <div className={styles.nameCombo}>{combo.title}</div>
                        <div className={styles.infoCombo}>
                          <div className={styles.iconCombo}>
                            <img
                              alt=""
                              src="https://onthisinhvien.com/resources/images/otsv/icon-total-course.svg"
                            />
                          </div>
                          <div className={styles.courseCombo}>
                            <span>{combo.total}</span>
                            "khóa luyện"
                          </div>
                          <div className={styles.buttonDetail}>
                            Xem chi tiết
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="d-flex a-center j-c">
                <ReactLoading type="cylon" color="red" />
              </div>
            )}
          </div>
          <div className={styles.clickable}>
            <div
              className={clsx(styles.item)}
              onClick={() => {
                setIndex(1);
              }}
            >
              <AiOutlineHeart />
            </div>
            <div
              className={clsx(styles.item)}
              onClick={() => {
                setIndex(3);
              }}
            >
              <AiOutlineHeart />
            </div>
            <div
              className={clsx(styles.item)}
              onClick={() => {
                setIndex(5);
              }}
            >
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combo;

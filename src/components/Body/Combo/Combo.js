import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showComboFirst } from "../../../actions/ShowComboFirst";
import { numberNav, slideCombo } from "../../../actions/SlideCombo";
import PurchaseApi from "../../../api/PurchaseApi";
import useWindowDimensions from "../../common/useWindowDimensions";
import styles from "./Combo.module.css";
import Pagination from "./Pagination/Pagination";

const Combo = () => {
  const [combos, setCombo] = useState([]);
  const [x, setX] = useState(260);
  const [index, setIndex] = useState(1);
  const [isloaded, setIsloaded] = useState(false);
  const [widthCombo, setWidthCombo] = useState(0);
  const [responsiveItem, setResponsiveItem] = useState(0); // pc : 5 , tablet : 2, pc : 1
  const dispatch = useDispatch();
  const indexNav = useSelector((state) => state.slideCombo.index);

  // ref
  const comboEvent = useRef(null);
  const listCombo = useRef(null);

  // get size window
  const { heightWindow, widthWindow } = useWindowDimensions();
  useEffect(() => {
    // console.log(widthWindow);
    let sum = combos.length;

    if (widthWindow >= 1024) {
      // pc
      if (sum !== 0) {
        dispatch(numberNav(Math.ceil(sum / 5)));
      }
      if (responsiveItem !== 5) {
        setResponsiveItem(5);
      }
    } else if (widthWindow < 1024 && widthWindow >= 740) {
      // tablet
      if (sum !== 0) {
        dispatch(numberNav(Math.ceil(sum / 2)));
      }
      if (responsiveItem !== 2) {
        setResponsiveItem(2);
      }
    } else {
      // mobile
      if (sum !== 0) {
        dispatch(numberNav(Math.ceil(sum)));
      }
      if (responsiveItem !== 1) {
        setResponsiveItem(1);
      }
    }
  }, [combos, widthWindow]);

  useEffect(() => {
    // get width of listcombo

    // pc
    setWidthCombo(listCombo.current.clientWidth / responsiveItem);
  }, [responsiveItem]);

  // get data combo
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

  // setinterval
  useEffect(() => {
    // handle slie combo
    let count = combos.length - responsiveItem;
    const handleSlideCombo = (indexNav) => {
      if (indexNav) {
        if (responsiveItem === 1) {
          setIndex(indexNav);
          count = combos.length - responsiveItem - (indexNav - 1);
        } else {
          setIndex(indexNav + (indexNav - 1));
          count = combos.length - responsiveItem - (indexNav - 1) * 2;
        }
      } else {
        if (count > 0) {
          if (responsiveItem === 1) {
            setIndex((pre) => {
              dispatch(slideCombo(pre + 1));
              return pre + 1;
            });

            count--;
          } else {
            setIndex((pre) => {
              dispatch(slideCombo((pre + 1) / 2 + 1));
              return pre + 2;
            });

            count -= 2;
          }
        } else {
          setIndex(1);
          dispatch(slideCombo(1));
          count = combos.length - responsiveItem;
        }
      }
    };

    handleSlideCombo(indexNav);
    const countId = setInterval(handleSlideCombo, 3000);
    return () => {
      clearInterval(countId);
    };
  }, [combos, responsiveItem, indexNav]);
  useEffect(() => {
    setX(widthCombo * index);
  }, [index]);

  // click combo

  const handleCombo = (e) => {
    // console.log(e.currentTarget.id);
    e.preventDefault();
    dispatch(showComboFirst(e.currentTarget.id));
  };

  // const comboEvent = useRef(null);

  useEffect(() => {
    let isDrawing = false;
    let x = 0;

    const handleMouseDown = (e) => {
      e.preventDefault();
      x = e.offsetX;
      isDrawing = true;
    };

    const handleMouseMove = (e) => {
      if (isDrawing) {
        x = e.offsetX;
        console.log(x);
      }
    };

    const handleMouseUp = (e) => {
      if (isDrawing) {
        x = 0;
        console.log("hi");
        isDrawing = false;
      }
    };

    const element = comboEvent.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mousedown", handleMouseDown);
      element.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseup", handleMouseUp);
        element.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, [combos]);

  return (
    <div className={clsx(styles.combo)}>
      <div className={styles.customCombo}>
        <div className={styles.tagCombo}>
          <img
            alt=""
            src="https://onthisinhvien.com/resources/images/otsv/tag-hotcombo.png"
          />
        </div>
        <div className={clsx(styles.container)} ref={listCombo}>
          {/* call api */}
          {isloaded ? (
            <div
              className={clsx(styles.itemCombos)}
              style={{
                transform: `translate(-${x - widthCombo}px, 0px)`,
                transition: "all 800ms ease 0s",
              }}
              // ref={comboEvent}
            >
              {combos.map((combo, i) => {
                return (
                  <div
                    style={{
                      minWidth: `${widthCombo}px`,
                    }}
                    key={i}
                  >
                    <div
                      key={combo.id}
                      id={combo.id}
                      className={clsx(styles.colItem)}
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
        <Pagination />
      </div>
    </div>
  );
};

export default Combo;

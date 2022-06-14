import styles from "./Header.module.css";
import clsx from "clsx";
import { React, useEffect, useState } from "react";
import Courses from "./Courses/Courses";
import { BsChevronBarContract } from "react-icons/bs";
import ReactLoading from "react-loading";

const Header = () => {
  const [showCourses, setShowCourses] = useState("d_none");
  const [showNews, setShowNews] = useState("d_none");
  const [courses, setCourses] = useState([]);
  const [news, setNews] = useState([]);
  const [isloaded, setIsloaded] = useState(false);

  // handle show khoa hoc
  const handleShowCourses = () => {
    setShowCourses("d_bl");

    if (courses.length === 0) {
      setIsloaded(false);
      fetch("http://localhost:3000/courses")
        .then((res) => res.json())
        .then((result) => {
          setCourses(result);
          setIsloaded(true);
        });
    }
  };

  const handleHideCourses = () => {
    setShowCourses("d_none");
  };

  const handleShowNews = () => {
    setShowNews("d_bl");
    if (news.length === 0) {
      setIsloaded(false);
      fetch("http://localhost:3000/news")
        .then((res) => res.json())
        .then((result) => {
          setNews(result);
          setIsloaded(true);
        });
    }
  };

  const handleHideNews = () => {
    setShowNews("d_none");
  };

  // show Navbar ở mobile

  const [navBar, setNavbar] = useState(styles.hideNavbar);
  const handleNavbar = () => {
    if (navBar === styles.hideNavbar) {
      setNavbar(styles.showNavbar);
    } else {
      setNavbar(styles.hideNavbar);
    }
  };

  // handle scroll
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ backgroundColor: "#fff" }}
      className={fixed ? styles.fixed : ""}
    >
      <div className="grid wide">
        <div className={clsx(styles.header, "d-flex", "a-center")}>
          {/* left */}
          <div className={clsx(styles.leftHeader, "d-flex", "a-center")}>
            <div>
              <a href="https://onthisinhvien.com/">
                <img
                  alt=""
                  className={styles.logoLeftHeader}
                  src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/866522074-1604980770701-hltron1(1).png"
                />
              </a>
            </div>
            <div className={styles.sloganLeftHeader}>LẤY NGAY A+</div>
          </div>

          {/* right */}
          <div
            className={clsx(styles.rightHeader, "d-flex", "a-center", navBar)}
          >
            <div className={styles.itemRightHeader}>
              <a href="https://onthisinhvien.com/">trang chủ</a>
            </div>
            {/* khóa học */}
            <div
              className={styles.itemRightHeader}
              onMouseOver={handleShowCourses}
              onMouseOut={handleHideCourses}
            >
              <span
                className={clsx(
                  styles.customItemCourse,
                  styles.customButtonCourses
                )}
              >
                khóa học
              </span>
              <div className={clsx(styles.customBar, showCourses)}>
                <div className={styles.boxCourses}>
                  {isloaded ? (
                    <div className={styles.boxCoursesGrid}>
                      {courses.map((course) => {
                        return (
                          <Courses
                            key={course.id}
                            school={course.name}
                            url={
                              course.friendlyUrl &&
                              `https://onthisinhvien.com/truong/${course.friendlyUrl}`
                            }
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <ReactLoading type="bubbles" color="#000" />
                  )}
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.itemRightHeader}>
              <a href="https://onthisinhvien.com/tailieu">tài liệu</a>
            </div>

            {/* tin tuc */}
            <div
              className={clsx(
                styles.itemRightHeader,
                styles.customButtonCourses
              )}
              onMouseOver={handleShowNews}
              onMouseOut={handleHideNews}
            >
              <a href="https://onthisinhvien.com/tin-tuc">tin tức</a>
              <div className={clsx(styles.customBar, showNews)}>
                <div className={styles.boxCourses}>
                  {isloaded ? (
                    <div className={styles.boxCoursesGrid}>
                      {news.map((news) => {
                        return (
                          <Courses
                            key={news.id}
                            school={news.name}
                            url={
                              news.url &&
                              `https://onthisinhvien.com/danh-muc/${news.url}`
                            }
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <ReactLoading type="bubbles" color="#000" />
                  )}
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.itemRightHeader}>
              <a href="https://onthisinhvien.com/kich-hoat-khoa-hoc">
                kích hoạt
              </a>
            </div>
            <div className={styles.itemRightHeader}>
              <a href="https://onthisinhvien.com/gio-hang">
                <img
                  alt=""
                  src="https://onthisinhvien.com/resources/images/otsv/cart.svg"
                />
              </a>
            </div>
            <div className={clsx(styles.itemRightHeader, styles.customButton)}>
              <div
                className={clsx(
                  styles.buttonLoginRegister,
                  "d-flex",
                  "a-center"
                )}
              >
                <button className={styles.loginButton}>Đăng nhập</button>
                <button className={styles.loginButton}>đăng ký</button>
              </div>
            </div>
          </div>

          {/* mobile */}
          <div className={styles.displayMobile}>
            <div>
              <div className={styles.buttonNavbar} onClick={handleNavbar}>
                <BsChevronBarContract />
              </div>
              {/* <div className={styles.buttonNavbar} onClick ={handleHideNavbar}><BsChevronBarExpand /></div> */}
            </div>
            <div className={styles.loginMobile}>
              <button className={styles.buttonLoginMobile}>đăng nhập</button>
              <button className={styles.buttonLoginMobile}>đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

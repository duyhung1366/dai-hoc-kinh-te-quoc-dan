import { React, useEffect, useState } from "react";
import queryString from "query-string";
import styles from "./ListCourse.module.scss";
import Show from "./Show/Show";
import Pagination from "./Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import { changeValueInput } from "../../../../../actions/InputChange";

const ListCourse = ({ title, api }) => {
  //loading
  const [isloaded, setIsloaded] = useState(false);
  const [check, setCheck] = useState(false); // check và gán kết quả tìm kiếm ở ô tìm kiếm

  // search data
  const valueInput = useSelector((state) => state.searchData.valueInput);
  const value = useSelector((state) => state.input.value);

  // dispatch
  const dispatch = useDispatch();

  // call api + pagination (phân trang)
  const [courses, setCourses] = useState([]);
  //pagination
  const [pagination, setPagination] = useState({
    _limit: 8,
    _page: 1,
    _totalRow: 16,
  });

  const [filters, setFilters] = useState({
    _limit: 8,
    _page: 1,
  });

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
    localStorage.clear();
  };

  useEffect(() => {
    const paramsString = queryString.stringify(filters);
    const requestUrl = `${api}${paramsString}`;

    async function fetchCoursesList() {
      try {
        // console.log("hi");
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        const { data, pagination } = responseJson;
        setCourses(data);
        setPagination(pagination);
        setIsloaded(true);
        localStorage.setItem(requestUrl, JSON.stringify(responseJson));
      } catch (error) {
        setIsloaded(true);
        console.log("failed to fetch course list : ", error.message);
      }
    }
    // local storage
    const checkLocal = JSON.parse(localStorage.getItem(requestUrl));

    if (checkLocal === null) {
      // console.log("hung");
      setIsloaded(false);
      fetchCoursesList();
    } else {
      const { data, pagination } = checkLocal;
      setIsloaded(true);
      setCourses(data);
      setPagination(pagination);
    }
  }, [filters]);

  // handle search
  useEffect(() => {
    if (valueInput !== null) {
      console.log("search");
      if (valueInput.length > 0) {
        setCheck(
          courses.filter((course) => {
            return course.title == valueInput;
          })
        );
      }
    } else {
      setCheck(false);
    }
  }, [valueInput]);

  useEffect(() => {
    if (value !== null) {
      if (value.length === 0) {
        setCourses(courses);
        // console.log(courses);
        setCheck(false);
        // console.log("mouted");
        dispatch(changeValueInput(null));
      }
    } else {
    }
  }, [value]);

  // handle page change
  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.listCourse}>
        {isloaded ? (
          <Show courses={!check ? courses : check} />
        ) : (
          <ReactLoading type="bars" color="#000" />
        )}
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ListCourse;

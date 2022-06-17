import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { SearchData } from "../../../actions/SearchData";
import styles from "./HeaderCourse.module.css";
import InputItem from "./Input/Input";

const HeaderCourse = () => {
  const valueInput = useSelector((state) => state.input.value); // value from input field
  var check = useSelector((state) => state.input.check);
  // const [check, setCheck] = useState(false);
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();

  // async function getData() {
  //   try {
  //     await axios
  //       .get("http://localhost:3000/listCourses_limit=8&_page=1")
  //       .then((response) => {
  //         handleSearch(response.data.data);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const handleClick = () => {
    if (!check && valueInput.length > 0) {
      // getData();
      dispatch(SearchData(valueInput));
      check = true;
    }
  };

  return (
    <div className={styles.headerinCourse}>
      <div className={styles.nameSchool}>
        <img
          src="https://onthisinhvien.com/resources/images/icon-tag-school.svg"
          alt=""
        />
        <span>Đại học Kinh tế Quốc dân</span>
      </div>
      <div className={styles.searchCourse}>
        <InputItem />
        <button className={styles.iconSearch} onClick={handleClick}>
          <AiOutlineSearch />
        </button>
        {/* {data.length === 0 && <ReactLoading type="bars" color="#000" />} */}
      </div>
    </div>
  );
};

export default HeaderCourse;

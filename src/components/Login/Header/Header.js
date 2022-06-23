import { MdOutlineCancel } from "react-icons/md";
import styles from "./Header.module.scss";

const Header = (props) => {
  const { type } = props;
  // const dispatch = useDispatch();

  const handleToggle = () => {
    // dispatch(loginToggle(false));
  };
  return (
    <div className={styles.header}>
      <p>{type}</p>
      <button onClick={handleToggle}>
        <MdOutlineCancel />
      </button>
    </div>
  );
};

export default Header;

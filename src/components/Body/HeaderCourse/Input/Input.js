import React from "react";
import { useDispatch } from "react-redux";
import { changeValueInput } from "../../../../actions/InputChange";
import { SearchData } from "../../../../actions/SearchData";
import styles from "./Input.module.scss";

const InputItem = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeValueInput(e.target.value));
    if (e.target.value.length === 0) {
      dispatch(SearchData(""));
    }
  };

  return (
    <div>
      <input
        placeholder="Tìm kiếm khóa học..."
        className={styles.inputSearch}
        onInput={handleChange}
      />
    </div>
  );
};

export default InputItem;

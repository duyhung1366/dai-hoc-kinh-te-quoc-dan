import React from "react";
import clsx from "clsx";
import styles from "./Feedback.module.scss";
import ListFeedback from "./ListFeedback/ListFeedback";
import FooterPagination from "./FooterPagination";
import Title from "../../../common/Title/Title";

const Feedback = () => {
  return (
    <div className={clsx(styles.feedback)}>
      <Title title="PHẢN HỒI HỌC VIÊN" />
      <ListFeedback />
      <FooterPagination />
    </div>
  );
};

export default Feedback;

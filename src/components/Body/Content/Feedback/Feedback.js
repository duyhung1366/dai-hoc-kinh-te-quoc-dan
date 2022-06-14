import React from "react";
import clsx from "clsx";
import styles from "./Feedback.module.scss";
import ListFeedback from "./ListFeedback/ListFeedback";
import FooterPagination from "./FooterPagination";

const Feedback = () => {
  return (
    <div className={clsx(styles.feedback)}>
      <ListFeedback />
      <FooterPagination />
    </div>
  );
};

export default Feedback;

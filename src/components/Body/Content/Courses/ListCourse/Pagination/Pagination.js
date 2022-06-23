import clsx from "clsx";
import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = (props) => {
  const { pagination, onPageChange } = props;
  const { _limit, _page, _totalRow } = pagination;
  const totalPage = Math.ceil(_totalRow / _limit);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <div className={clsx(styles.pagination, "row")}>
      {/* <button
            disabled ={_page <= 1}
            onClick ={() => handlePageChange(_page - 1)}
        >
            prev
        </button>
        <button
            disabled ={_page >= totalPage}
            onClick ={() => handlePageChange(_page + 1)}
        >
            next
        </button> */}
      <button
        disabled={_page >= totalPage}
        onClick={() => handlePageChange(_page + 1)}
      >
        xem thêm
      </button>
    </div>
  );
};

export default Pagination;

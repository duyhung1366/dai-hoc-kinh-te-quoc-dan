import React, { useEffect, useRef, useState } from "react";
import FeedbackApi from "../../../../../api/FeedbackApi";
import Item from "./Item/Item";
import styles from "./ListFeedback.module.scss";
import { useSelector } from "react-redux";
import clsx from "clsx";

const ListFeedback = () => {
  // call api
  const [dataFeedback, setDataFeedback] = useState([]);
  const feedBack = useRef();

  useEffect(() => {
    const fetchImgFeedback = async () => {
      try {
        const response = await FeedbackApi.getAll();
        setDataFeedback(response);
      } catch (error) {
        console.log("fetch failed : ", error);
      }
    };

    fetchImgFeedback();
  }, []);

  // transform
  const [width, setWidth] = useState(1);
  const index = useSelector((state) => state.slideFeedback.index);
  const [slide, setSlide] = useState(index);
  useEffect(() => {
    // console.log(feedBack.current.clientWidth);
    // console.log(feedBack);
    setWidth(feedBack.current.clientWidth);
    setSlide(index);
  }, [index]);

  return (
    <div
      className={clsx(styles.listFeedback, styles.transformX)}
      ref={feedBack}
      style={{
        transform: `translate(-${width * slide}px, 0px)`,
      }}
    >
      {dataFeedback.map((data) => (
        <Item key={data.id} linkImg={data.linkImg} />
      ))}
    </div>
  );
};

export default ListFeedback;

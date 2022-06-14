import React from "react";
import { useSelector } from "react-redux";

const FirstCombo = () => {
  const firstCombo = useSelector((state) => state.showComboFirst.id);
  console.log(firstCombo);

  return <div>hung</div>;
};

export default FirstCombo;

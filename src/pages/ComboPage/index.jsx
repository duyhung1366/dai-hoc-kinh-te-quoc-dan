import React, { useEffect } from "react";
import Purchase from "../../components/Purchase/Purchase";

const Combo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Purchase />
    </div>
  );
};

export default Combo;

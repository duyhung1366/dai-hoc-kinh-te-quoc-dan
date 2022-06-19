export const slideCombo = (index) => {
  return {
    type: "SLIDE_COMBO",
    payload: index,
  };
};

export const numberNav = (sum) => {
  return {
    type: "SUM_COMBO",
    payload: sum,
  };
};

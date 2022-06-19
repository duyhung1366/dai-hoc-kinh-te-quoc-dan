const initialState = {
  index: 1,
  sum: null,
};

const SlideCombo = (state = initialState, action) => {
  switch (action.type) {
    case "SLIDE_COMBO":
      const newIndex = action.payload;
      return {
        ...state,
        index: newIndex,
      };

    case "SUM_COMBO":
      const newSum = action.payload;
      return {
        ...state,
        sum: newSum,
      };

    default:
      return state;
  }
};

export default SlideCombo;

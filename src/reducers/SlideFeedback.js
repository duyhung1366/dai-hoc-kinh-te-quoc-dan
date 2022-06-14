const initialState = {
  index: 0,
};

const SlideFeedback = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_INDEX":
      const newIndex = action.payload;
      return {
        index: newIndex,
      };

    default:
      return state;
  }
};

export default SlideFeedback;

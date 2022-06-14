const initialState = {
  value: null,
  check: true,
};

const InputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      // handle change value input
      const valueNew = action.payload;
      return {
        value: valueNew,
        check: false,
      };
    default:
      return state;
  }
};

export default InputReducer;

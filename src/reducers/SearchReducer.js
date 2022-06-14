const initialState = {
  valueInput: null,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_SEARCH":
      const data = action.payload;
      return {
        valueInput: data,
      };

    default:
      return state;
  }
};

export default SearchReducer;

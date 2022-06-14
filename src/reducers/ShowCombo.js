const initialState = {
  id: 0,
};

const ShowComboFirst = (state = initialState, action) => {
  switch (action.type) {
    case "TAB_COMBO":
      const newId = action.payload;
      return {
        id: newId,
      };

    default:
      return state;
  }
};

export default ShowComboFirst;

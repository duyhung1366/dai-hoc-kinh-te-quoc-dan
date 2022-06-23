const initialState = {
  toggle: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LOGIN":
      const toggle = action.payload;
      return {
        toggle: toggle,
      };
    default:
      return state;
  }
};

export default LoginReducer;

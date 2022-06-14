import { combineReducers } from "redux";
import InputReducer from "./InputValue";
import SearchReducer from "./SearchReducer";
import ShowComboFirst from "./ShowCombo";
import SlideFeedback from "./SlideFeedback";

const rootReducer = combineReducers({
  input: InputReducer,
  searchData: SearchReducer,
  slideFeedback: SlideFeedback,
  showComboFirst: ShowComboFirst,
});

export default rootReducer;

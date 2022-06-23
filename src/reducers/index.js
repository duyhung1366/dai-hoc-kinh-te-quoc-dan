import { combineReducers } from "redux";
import Login from "../components/Login/Login";
import InputReducer from "./InputValue";
import SearchReducer from "./SearchReducer";
import ShowComboFirst from "./ShowCombo";
import SlideCombo from "./slideCombo";
import SlideFeedback from "./SlideFeedback";

const rootReducer = combineReducers({
  input: InputReducer,
  searchData: SearchReducer,
  slideFeedback: SlideFeedback,
  showComboFirst: ShowComboFirst,
  slideCombo: SlideCombo,
  login: Login,
});

export default rootReducer;

import { combineReducers } from "redux";
import { reducer as formReducers } from "redux-form";
import authreducers from "./authreducers";
export default combineReducers({
  auth: authreducers,
  form: formReducers
});

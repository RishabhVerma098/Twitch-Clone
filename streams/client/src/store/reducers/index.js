import { combineReducers } from "redux";
import { reducer as formReducers } from "redux-form";
import authreducers from "./authreducers";
import streamReducer from "./streamReducers";
export default combineReducers({
  auth: authreducers,
  form: formReducers,
  streams: streamReducer
});

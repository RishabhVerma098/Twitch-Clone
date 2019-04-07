import streamsApi from "../api/streamsApi";
import history from "../../history";
export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

// [POST] create a stream and record the newly created stream value(id,title,description)
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streamsApi.post("/streams", { ...formValues, userId });

  dispatch({ type: "CREATE_STREAM", payload: response.data });
  history.push("/");
};

// [GET] get all the streams from our server
export const fetchStreams = () => async dispatch => {
  const response = await streamsApi.get("/streams");
  dispatch({ type: "FETCH_STREAMS", payload: response.data });
};

// [GET] get a single streams from our server
export const fetchStream = id => async dispatch => {
  const response = await streamsApi.get("/streams/" + id);
  dispatch({ type: "FETCH_STREAM", payload: response.data });
};

// [PUT] update aur record by taking that single record (get)and then updating that record by (post)
// combining fetchstream and createstream GET+POST , id => GET , POST => formvalues
export const editStream = (id, formValues) => async dispatch => {
  const response = await streamsApi.patch("/streams/" + id, formValues);
  dispatch({ type: "EDIT_STREAM", payload: response.data });
  history.push("/");
};

// [DELETE] delete that single stream chosen by the user payload is the deleted stream id , no response is recorded
export const deleteStream = id => async dispatch => {
  await streamsApi.delete("/streams/" + id);
  dispatch({ type: "DELETE_STREAM", payload: id });
  history.push("/");
};

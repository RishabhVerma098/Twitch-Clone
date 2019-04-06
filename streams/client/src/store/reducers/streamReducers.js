import _ from "lodash";
//NOTE - > here our reducers aur working with object rather than array which is usually the case
//that is why loadsh lib is used to delete(_.omit) and merge array to object(_.mapkeys)
const CREATE_STREAM = "CREATE_STREAM";
const FETCH_STREAMS = "FETCH_STREAMS";
const FETCH_STREAM = "FETCH_STREAM";
const EDIT_STREAM = "EDIT_STREAM";
const DELETE_STREAM = "DELETE_STREAM";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

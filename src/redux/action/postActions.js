import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST_STARTED,
  FETCH_POST_SUCCESS,
} from "./actionsTypes";
import axios from "axios";

export const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};

export const fetchPostfailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

export const fetchPostRequestStarted = () => {
  return {
    type: FETCH_POST_REQUEST_STARTED,
  };
};

export const fetchPost = () => {

    
  return (dispatch) => {
    dispatch(fetchPostRequestStarted());
    axios
      .get("https://gauravgitacc.github.io/postAppData/posts.json")
      .then((res) => {
        dispatch(fetchPostSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchPostfailure(error.message));
      })
  }
}

import { useDispatch } from "react-redux";

export const setThisError = (error) => {
  return dispatch(setErrorMessage(error));
};

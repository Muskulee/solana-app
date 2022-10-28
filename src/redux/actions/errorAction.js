import { CONSTANTS } from "../../api/constants";

export const setErrorMessage = (message) => {
  return {
    type: CONSTANTS.error,
    payload: {
      message,
    },
  };
};

export const setSuccessMessage = (message) => {
  return {
    type: CONSTANTS.success,
    payload: { message },
  };
};

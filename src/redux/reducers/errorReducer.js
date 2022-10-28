import { CONSTANTS } from "../../api/constants";

const initialState = {
  error: false,
  success: false,
  errorMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.error:
      return {
        ...state,
        error: true,
        success: false,
        errorMessage: action.payload.message,
      };

    case CONSTANTS.success:
      return {
        ...state,
        error: false,
        success: true,
        errorMessage: action.payload.message,
      };

    default:
      return state;
  }
};

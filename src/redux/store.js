import { createStore, combineReducers } from "redux";
import errorReducer from "./reducers/errorReducer";

const rootReducer = combineReducers({
  error: errorReducer,
});

export const store = createStore(rootReducer);

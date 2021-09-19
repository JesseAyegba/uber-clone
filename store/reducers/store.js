import { createStore, combineReducers } from "redux";
import { nativigation } from "./navigation";

const rootReducer = combineReducers({
  navigation: nativigation,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

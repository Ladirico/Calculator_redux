import { createStore } from "redux";
import reducers from "../reducers/combineReducers";

export const store = createStore(reducers, {});

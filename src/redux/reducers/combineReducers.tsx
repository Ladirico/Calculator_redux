import { combineReducers } from "redux";
import { calculatorReducer } from ".";

const reducers = combineReducers({
  result: calculatorReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

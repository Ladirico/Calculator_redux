import { InitialStateInterface } from "../../interfaces/reducersInterfaces";
import { Action } from "../actionTypes";

const initialState: InitialStateInterface = {
  firstNumber: 0,
  secondNumber: 0,
  operator: "",
};

export const calculatorReducer = (
  state: InitialStateInterface = initialState,
  action: Action
) => {
  console.log("Action", action);
  switch (action.type) {
    case "PLUS_OPERATOR":
      console.log("plus", state);
      console.log("plus payload", action.payload);
      return {
        // firstNumber: state.firstNumber,
        // secondNumber: state.secondNumber,
        // operator: "+",
        // result: state.firstNumber + state.secondNumber,
      };
    case "MINUS_OPERATOR":
      console.log("minus", state);
      console.log("minus payload", action.payload);
      return {
        firstNumber: action.payload.firstNumber,
        secondNumber: action.payload.secondNumber,
        operator: "+",
        // result: action.payload.firstNumber + action.payload.secondNumber,
      };
    default:
      return state;
  }
};

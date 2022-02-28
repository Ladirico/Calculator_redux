import { Action } from "redux";
import { InitialStateInterface } from "../../interfaces/reducersInterfaces";

const initialState: InitialStateInterface = {
  firstNumber: 0,
  secondNumber: 0,
  operator: "",
  result: 0,
};

console.log(initialState);

export const calculatorReducer = (
  state: InitialStateInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case "PLUS_OPERATOR":
      return {
        firstNumber: state.firstNumber,
        secondNumber: state.secondNumber,
        operator: "+",
        result: state.firstNumber + state.secondNumber,
      };
    case "MINUS_OPERATOR":
      return {
        firstNumber: state.firstNumber,
        secondNumber: state.secondNumber,
        operator: "-",
        result: state.firstNumber - state.secondNumber,
      };
    default:
      return state;
  }
};

import { InitialStateInterface } from "../../interfaces/reducersInterfaces";

export enum ActionType {
  PLUS_OPERATOR = "PLUS_OPERATOR",
  MINUS_OPERATOR = "MINUS_OPERATOR",
}

export interface PlusOperator {
  type: ActionType.PLUS_OPERATOR;
  payload: InitialStateInterface;
}

export interface MinusOperator {
  type: ActionType.MINUS_OPERATOR;
  payload: InitialStateInterface;
}

export type Action = PlusOperator | MinusOperator;

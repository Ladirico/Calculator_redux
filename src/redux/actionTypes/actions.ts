import { St } from "../../components/calculator/calculator";

export function plus() {
  return {
    type: "PLUS_OPERATOR",
  };
}

export function minus(uu: St) {
  return {
    type: "MINUS_OPERATOR",
    payload: uu,
  };
}

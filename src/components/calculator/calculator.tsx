import { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionType } from "../../redux/actionTypes";
import { store } from "../../redux/store/store";
export interface St {
  firstNumber: number;
  secondNumber: number;
  operator: string;
}
const Calculator = () => {
  const dispatch = useDispatch();
  const [st, setSt] = useState<St>({
    firstNumber: 1,
    secondNumber: 2,
    operator: "-",
  });

  return (
    <table>
      <tr>
        <td></td>
        <td>Schermo</td>
        <td></td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
      </tr>
      <tr>
        <td
          onClick={() =>
            dispatch({ type: ActionType.MINUS_OPERATOR, payload: st })
          }
        >
          -
        </td>
        <td onClick={() => console.log(store.getState())}>+</td>
        <td>=</td>
      </tr>
    </table>
  );
};

export default Calculator;

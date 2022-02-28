import { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { InitialStateInterface } from "../../interfaces/reducersInterfaces";
import { minus } from "../../redux/actionTypes/actions";
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
        <td onClick={() => dispatch(minus(st))}>-</td>
        <td>+</td>
        <td>=</td>
      </tr>
    </table>
  );
};

export default Calculator;

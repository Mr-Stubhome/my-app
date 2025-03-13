import { useState } from "react";
import "../../components/styles.css";

export function Counter({ countedNumber }) {
  const [count, setCount] = useState(0);

  const handleClickIncrement = () => {
    setCount((prevCount) => prevCount + countedNumber);
  };

  const handleClickDecrement = () => {
    setCount((prevCount) => prevCount - countedNumber);
  };

  const handleClickIncrease = () => {
    setCount((prevCount) => prevCount * countedNumber);
  };

  const handleClickDivide = () => {
    setCount((prevCount) => prevCount / countedNumber);
  };

  const handleClickReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="wrapper">
        <h1>Счетчик: {count}</h1>
        <div>
          <button className="reset" onClick={handleClickIncrement}>
            Прибавить
          </button>
          <button className="reset" onClick={handleClickDecrement}>
            Отнять
          </button>
          <button className="reset" onClick={handleClickIncrease}>
            Умножить
          </button>
          <button className="reset" onClick={handleClickDivide}>
            Разделить
          </button>
          <button className="reset" onClick={handleClickReset}>
            Сбросить
          </button>
        </div>
      </div>
    </>
  );
}

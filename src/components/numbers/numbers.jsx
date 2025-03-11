import { useState } from "react";
import { Counter } from "../counter/counter";
import "../../components/styles.css";

export function Numbers() {
  const [countedNumber, setCountedNumber] = useState(0);
  const [numberArray, setNumberArray] = useState([]);

  const addNumber = (num) => {
    setNumberArray((prevArray) => {
      const newArray = [...prevArray, num];
      const newCount = parseInt(newArray.join(""), 10); // Преобразуем в число
      setCountedNumber(newCount);
      return newArray;
    });
  };

  const handleClickReset = () => {
    setNumberArray([]);
    setCountedNumber(0);
  };

  return (
    <>
      <div className="main">
        <Counter countedNumber={countedNumber} />
        <div className="wrapperNumbers">
          <h1>Рабочее число: {countedNumber}</h1>
          <div className="numbersBlock">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
              <button
                key={num}
                className="numbers"
                onClick={() => addNumber(num)}
              >
                {num}
              </button>
            ))}
            <button className="reset" onClick={handleClickReset}>
              Сбросить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

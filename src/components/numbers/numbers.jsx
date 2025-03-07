import { Component } from "react";
import Counter from "../counter/counter";
import "../../components/styles.css";

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countedNumber: 0,
      numberArray: [],
    };
  }

  addNumber = (num) => {
    this.setState((prevState) => {
      const newArray = [...prevState.numberArray, num];
      const newCount = parseInt(newArray.join(""), 10); // Преобразуем в число
      return { numberArray: newArray, countedNumber: newCount };
    });
  };

  reset = () => {
    this.setState({ countedNumber: 0, numberArray: [] });
  };

  render() {
    console.log(this.state.countedNumber);
    return (
      <>
        <div className="main">
          <Counter countedNumber={this.state.countedNumber} />
          <div className="wrapperNumbers">
            <h1>Рабочее число: {this.state.countedNumber}</h1>
            <div className="numbersBlock">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                <button
                  key={num}
                  className="numbers"
                  onClick={() => this.addNumber(num)}
                >
                  {num}
                </button>
              ))}
              <button className="reset" onClick={this.reset}>
                Сбросить
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Numbers;

import { Component } from "react";
import "../../components/styles.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + this.props.countedNumber });
  };

  decrement = () => {
    this.setState({ count: this.state.count - this.props.countedNumber });
  };

  increase = () => {
    this.setState({ count: this.state.count * this.props.countedNumber });
  };

  divide = () => {
    this.setState({ count: this.state.count / this.props.countedNumber });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log(this.props.countedNumber);
    return (
      <>
        <div className="wrapper">
          <h1>Счетчик: {this.state.count}</h1>
          <div>
            <button className="reset" onClick={this.increment}>
              Прибавить
            </button>
            <button className="reset" onClick={this.decrement}>
              Отнять
            </button>
            <button className="reset" onClick={this.increase}>
              Умножить
            </button>
            <button className="reset" onClick={this.divide}>
              Разделить
            </button>
            <button className="reset" onClick={this.reset}>
              Сбросить
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;

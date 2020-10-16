import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      input: "",
      todos: [
        "do my homework",
        "watch Netflix"
      ]
    };
  }
  render() {
    return (
      <div className="shopping-list">
        <input onChange = {(event) => { this.setState({input: event.target.value})}} />
        <button onClick={()=> { this.setState({this.state.value, ...this.state.todos}) }}> Add </button>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
          <li>{this.state.input}</li>

       </ul>
      </div>
    );
  }
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

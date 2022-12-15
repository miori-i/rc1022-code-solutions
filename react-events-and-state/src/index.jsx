import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  // In your class component's constructor, set an initial state of { isClicked: false }
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // Add a method to your class component named handleClick
  // that uses this.setState to update isClicked to true.
  handleClick() {
    this.setState({ isClicked: true });
  }

  // In your component's render method, render a different <button> depending on whether
  // or not the component has been clicked (this.state.isClicked).
  render() {
    if (this.state.isClicked) {
      return <button>Thanks!</button>;
    }
    // Be sure to pass your handleClick to the <button>'s onClick prop.
    return <button onClick={this.handleClick}>Click Me!</button>;
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);

import React from 'react';

export class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const updatedCounts = this.state.counts + 1;
    this.setState({
      counts: updatedCounts
    });

  }

  render() {
    const counts = this.state.counts;
    if (counts < 3) {
      return (
        <button onClick={this.handleClick} style={{ backgroundColor: '#351C74', color: 'white' }} >Hot Button</button>
      );
    } else if (counts < 6) {
      return (
        <button onClick={this.handleClick} style={{ backgroundColor: '#674EA7', color: 'white' }} >Hot Button</button>
      );
    } else if (counts < 9) {
      return (
        <button onClick={this.handleClick} style={{ backgroundColor: '#E06666', color: 'white' }} >Hot Button</button>
      );
    } else if (counts < 12) {
      return (
        <button onClick={this.handleClick} style={{ backgroundColor: '#F6B26A', color: 'black' }} >Hot Button</button>
      );
    } else if (counts < 15) {
      return (
        <button onClick={this.handleClick} style={{ backgroundColor: '#FFFF00', color: 'black' }} >Hot Button</button>
      );
    } else if (counts < 18) {
      return (
        <button onClick={this.handleClick} style={{ backgroundColor: 'white', color: 'black' }} >Hot Button</button>
      );
    }

  }
}

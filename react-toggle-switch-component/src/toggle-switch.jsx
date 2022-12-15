import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  render() {
    if (this.state.isOn) {
      return <div className='switch on' onClick={this.handleClick}><span>ON</span></div>;
    }
    return <div className='switch' onClick={this.handleClick}><span>OFF</span></div>;
  }
}

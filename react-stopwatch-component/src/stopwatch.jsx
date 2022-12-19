import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlayed: false,
      time: 0
    };
    this.startTime = this.startTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
  }

  startTime() {
    this.setState({
      isPlayed: true
    });
    if (!this.state.isPlayed) {
      this.intervalID = setInterval(() => {
        const currentTime = this.state.time + 1;
        this.setState({
          time: currentTime
        });
      }, 1000);
    }
  }

  stopTime() {
    this.setState({
      isPlayed: false
    });
    if (this.state.isPlayed) {
      clearInterval(this.intervalID);
    }
  }

  resetTime() {
    if (this.state.isPlayed) {
      return;
    }
    this.setState({
      time: 0
    });
  }

  render() {
    const icon = this.state.isPlayed ? 'fa-sharp fa-solid fa-pause' : 'fa-sharp fa-solid fa-play';
    const useFunction = this.state.isPlayed ? this.stopTime : this.startTime;
    return (
      <div>
        <p className='time' onClick={this.resetTime}>{this.state.time}</p>
        <i className={icon} onClick={useFunction}></i>
      </div>
    );
  }
}

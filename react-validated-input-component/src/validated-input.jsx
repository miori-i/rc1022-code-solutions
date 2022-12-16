import React from 'react';

export class Validated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    // update its respective state property in the form component.
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const emptyMessage = this.state.password === '' ? 'A password is required.' : null;
    const shortMessage = this.state.password !== '' && this.state.password.length < 8 ? 'Your password is to  short.' : null;
    const icon = this.state.password === '' || this.state.password.length < 8 ? 'fa-sharp fa-solid fa-xmark' : 'fa-solid fa-check';
    return (
      <form>
        <label htmlFor="password">Password</label>
        <div className='input-wrapper'>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
          <i className={icon}></i>
          <p className='error-message' >{emptyMessage}{shortMessage}</p>
        </div>
      </form>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // We can set
    // onSubmit={e => this.handleSubmit(e)}
    // onChange={e => this.handleUsernameChange(e)}
    // onChange={e => this.handlePasswordChange(e)}
    // in render function instead of having line 11-13 and using bind.
  }

  handleUsernameChange(event) {
    // update its respective state property in the form component.
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    // update its respective state property in the form component.
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    // prevent the default form submission behavior.
    event.preventDefault();
    // reset the form.
    this.setState({
      username: '',
      password: ''
    });
    // log the component's state to the console.
    console.log('state:', this.state);

  }

  render() {
    // console.log('this.state:', this.state); this shows updated this.state every time user types
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='signUp-username'>Username</label>
        <input
          type="text"
          name="username"
          id="signUp-username"
          value={this.state.username}
          onChange={this.handleUsernameChange} />
        <label htmlFor='signUp-password'>Password</label>
        <input
        type="password"
        name="password"
        id="signUp-password"
        value={this.state.password}
        onChange={this.handlePasswordChange} />
        <button>Sign Up</button>
      </form>
    );
  }
}

const element = (
  <div>
    <RegistrationForm />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);

import React from "react";
import "./login.css";
import { TextInput, Button } from "evergreen-ui";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(formData);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div className='container'>
        <h3>
          LOGIN <span role='img'>🤩</span>
        </h3>
        <form className='login' onSubmit={this.handleSubmit}>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <br />
            <TextInput
              type='text'
              name='email'
              placeholder='abc@yahoo.com'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
          </div>
          <div className='password'>
            <label htmlFor='password' name='password' align='left'>
              Password
            </label>
            <br />
            <TextInput
              type='password'
              placeholder='123abc'
              value={this.state.password}
              name='password'
              onChange={this.handleChange}
            />
            <br />
          </div>
          <br />
          <Button appearance='primary'>Login</Button>
        </form>
        <div className='register-form-login'>
          <h4>Not a Member ? Register</h4>
          <Link to='/register'>
            <h5>Register</h5>
          </Link>
        </div>
      </div>
    );
  }
}
export default Login;

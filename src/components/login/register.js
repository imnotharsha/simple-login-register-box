import React from "react";
import "./login.css";
import { TextInput, Button } from "evergreen-ui";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      address: "",
      businessName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      businessName: this.state.businessName,
    };
    console.log(formData);
  }
  render() {
    return (
      <div className=' '>
        <h3>
          Register with US <span role='img'>😊</span>
        </h3>
        <form className='form' onSubmit={this.handleSubmit}>
          <div className='username'>
            <label htmlFor='username'>Username</label>
            <br />
            <TextInput
              type='text'
              name='username'
              required
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />
          </div>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <br />
            <TextInput
              type='text'
              name='email'
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
          </div>
          <div className='password'>
            <label htmlFor='password' name='password'>
              Password
            </label>
            <br />
            <TextInput
              type='password'
              name='password'
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
          </div>
          <div className='businessName'>
            <label htmlFor='businessName'>Business Name</label>
            <br />
            <TextInput
              type='text'
              name='businessName'
              value={this.state.businessName}
              onChange={this.handleChange}
            />
            <br />
          </div>
          <div className='address'>
            <label htmlFor='address'>Address</label>
            <br />
            <TextInput
              type='text'
              name='address'
              value={this.state.address}
              onChange={this.handleChange}
            />
            <br />
          </div>
          <br />
          <div className='button'>
            <Button appearance='primary'>Register</Button>
          </div>
        </form>

        <div className='register-form-login'>
          <h4>
            Already a Member ?
            <Link to='/'>
              <h5>Login</h5>
            </Link>
          </h4>
        </div>
      </div>
    );
  }
}
export default Register;

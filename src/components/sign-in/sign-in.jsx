import React from "react";

import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I allready have an account</h1>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label for="email">E-Mail</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <label for="password">Password</label>
          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;

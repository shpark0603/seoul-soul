import React, { Component } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  createGoogleSignInStartAction,
  createEmailSignInStartAction,
} from "../../redux/user/user.actions";
import "./sign-in.styles.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2 className="title">Already have an account?</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <Button type="submit">Sign in</Button>
            <Button onClick={googleSignInStart} type="button" isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(createGoogleSignInStartAction()),
  emailSignInStart: (email, password) =>
    dispatch(createEmailSignInStartAction({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

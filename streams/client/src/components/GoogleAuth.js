import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut, signIn } from "../store/actions";
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "213753653509-8t1abh2epkl6tq8f4vcjb0erommr9hl8.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  authbutton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.auth.signOut}
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.auth.signIn}
        >
          <i className="fab fa-google" /> Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.authbutton()}</div>;
  }
}

const mapsStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapsStateToProps,
  { signIn, signOut }
)(GoogleAuth);

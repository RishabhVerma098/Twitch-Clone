import React, { Component } from "react";
class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  };
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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  authbutton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
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
          <i class="fab fa-google" /> Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.authbutton()}</div>;
  }
}

export default GoogleAuth;

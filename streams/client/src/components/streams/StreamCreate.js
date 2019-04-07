import React, { Component } from "react";
import { createStream } from "../../store/actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";
class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <h3>Create your Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);

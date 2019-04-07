import React, { Component } from "react";
import Model from "../Model";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteStream, fetchStream } from "../../store/actions";
import history from "../../history";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  ModelButtons = () => {
    return (
      <React.Fragment>
        <Button variant="danger" onClick={this.deleteStreamRender}>
          Delete
        </Button>
        <Button variant="primary" onClick={() => history.push("/")}>
          Cancel
        </Button>
      </React.Fragment>
    );
  };

  deleteStreamRender = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="container" style={{ marginTop: "3em" }}>
        <h1 style={{ textAlign: "center" }}>StreamDelete</h1>
        <Model
          title="Delete stream"
          content="Are you sure to delete this stream?"
          Button={this.ModelButtons()}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { deleteStream, fetchStream }
)(StreamDelete);

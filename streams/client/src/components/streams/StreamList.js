import React, { Component } from "react";
import { fetchStreams } from "../../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <span>
          <Link to={"/streams/edit/" + stream.id} className="btn btn-primary">
            EDIT
          </Link>
          {"  "}
          <span className="btn btn-danger">DELETE</span>
        </span>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link
          to="/"
          className="list-group-item list-group-item-action flex-column align-items-start"
          key={stream.id}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{stream.title}</h5>
            {this.renderAdmin(stream)}
          </div>
          <p className="mb-1">{stream.description}</p>
        </Link>
      );
    });
  }

  renderCreateStream() {
    if (this.props.isUserSignedIn) {
      return (
        <Link
          to="/streams/new"
          className="btn btn-info"
          style={{ float: "right", marginTop: "1em" }}
        >
          Create your Own stream
        </Link>
      );
    }
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "4em" }}>
        <div className="list-group">{this.renderList()}</div>
        {this.renderCreateStream()}
      </div>
    );
  }
}

const mapsStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isUserSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapsStateToProps,
  { fetchStreams }
)(StreamList);

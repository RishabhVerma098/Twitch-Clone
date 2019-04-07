// component should work in isolations
import React, { Component } from "react";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../store/actions";
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    console.log("this =>", this.props);

    if (!this.props.streams) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{this.props.streams.title}</h1>
      </div>
    );
  }
}

// ownProps is a pre defined param to access props that is only avaible in the above class
const mapsStateToProps = (state, ownProps) => {
  return { streams: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapsStateToProps,
  { editStream, fetchStream }
)(StreamEdit);

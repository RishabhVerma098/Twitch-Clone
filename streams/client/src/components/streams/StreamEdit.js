// component should work in isolations
import React, { Component } from "react";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../store/actions";
import StreamForm from "./StreamForm";
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.streams) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <h3>Edit Your Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          //here intialValues are the pre defined name by our redux form
          initialValues={{
            title: this.props.streams.title,
            description: this.props.streams.description
          }}
          //we can also use lodash(_.pick()) to make initalValues more consise
        />
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

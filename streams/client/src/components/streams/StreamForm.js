import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ marginTop: "0.5em" }}
        >
          {error}
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="form-group ">
        <label htmlFor="formGroupExampleInput" style={{ fontSize: "1.5em" }}>
          {label}
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="formGroupExampleInput"
          autoComplete="false"
          {...input}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  handleSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label=" Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="btn btn-primary">Done</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "you must enter a title";
  }
  if (!formValues.description) {
    errors.description = "you must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);

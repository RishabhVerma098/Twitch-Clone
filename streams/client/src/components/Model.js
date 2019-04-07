import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";

// edit this into ACTUAL modal in future
const Model = props => {
  return ReactDOM.createPortal(
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{props.content}</p>
      </Modal.Body>

      <Modal.Footer>{props.Button}</Modal.Footer>
    </Modal.Dialog>,
    document.querySelector("#modal")
  );
};

export default Model;

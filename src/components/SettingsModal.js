import React from "react";
import { Modal, Button } from "react-bootstrap";

const SettingsModal = (props) => {
    console.log("Settings Modal");
    console.log(props);

    return (
        <Modal show={!props.show}>
            <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" href="/" onClick={() => props.setShow(!props.show)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SettingsModal;

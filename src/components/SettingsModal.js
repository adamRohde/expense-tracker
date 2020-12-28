import React, { useState } from "react";
import { Modal, Button, Form, ButtonGroup, ToggleButton } from "react-bootstrap";

const SettingsModal = (props) => {
    const [radioValue, setRadioValue] = useState("1");
    console.log("Settings Modal");
    console.log(props);

    const radios = [
        { name: "Light Mode", value: "1" },
        { name: "Dark Mode", value: "2" },
    ];

    return (
        <Modal show={!props.show}>
            <Modal.Header>
                <Modal.Title>Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>App Settings</Modal.Body>
            <Modal.Footer>
                <ButtonGroup toggle>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>

                <Button variant="primary" href="/" onClick={() => props.setShow(!props.show)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SettingsModal;

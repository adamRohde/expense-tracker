import React, { useState, useEffect } from "react";
import { Modal, Button, ButtonGroup, ToggleButton } from "react-bootstrap";

const SettingsModal = (props) => {
    const [radioValue, setRadioValue] = useState("1");

    const radios = [
        { name: "Light Mode", value: "1" },
        { name: "Dark Mode", value: "2" },
    ];

    useEffect(() => {
        console.log("Use Effect - Modal");
        props.setTheme(!props.theme);
    }, [radioValue]);

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
                            checked={true}
                            checked={radioValue === radio.value}
                            // checked={props.theme}
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

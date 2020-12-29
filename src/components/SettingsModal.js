import React, { useState, useEffect } from "react";
import { Modal, Button, ButtonGroup, ToggleButton } from "react-bootstrap";

const SettingsModal = (props) => {
    const [radioValue, setRadioValue] = useState("0");

    const radios = [
        { name: "Light Mode", value: "0" },
        { name: "Dark Mode", value: "1" },
    ];

    useEffect(() => {
        props.setTheme(!props.theme);
    }, [radioValue]);

    function modalOnChange(e) {
        setRadioValue(e.currentTarget.value);
        console.log("modal changed");
        console.log("theme " + props.theme);
        console.log("radio value " + radioValue);
        console.log("show value " + props.show);
    }

    return (
        <Modal show={props.show}>
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
                            // variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={modalOnChange}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>

                <Button variant="primary" onClick={() => props.setShow(!props.show)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SettingsModal;

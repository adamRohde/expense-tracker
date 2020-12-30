import React, { useState, useEffect } from "react";
import { Modal, Button, ButtonGroup, ToggleButton } from "react-bootstrap";

const SettingsModal = (props) => {
    const [radioValue, setRadioValue] = useState("0");

    const radios = [
        { name: "Light Mode", value: "0" },
        { name: "Dark Mode", value: "1" },
    ];
    const localstorage = [
        { name: "Save Expenses", value: "0" },
        { name: "No Save", value: "1" },
    ];

    useEffect(() => {
        props.setTheme(!props.theme);
    }, [radioValue]);

    function themeChange(e) {
        setRadioValue(e.currentTarget.value);
    }

    function storageChange(e) {
        props.setStorage(e.currentTarget.value);
    }

    const handleClose = () => props.setShow(false);

    return (
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            className="radiobuttons"
                            variant="link"
                            key={idx}
                            type="radio"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={themeChange}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
                <div>
                    <ButtonGroup>
                        {localstorage.map((store, idx) => (
                            <ToggleButton
                                className="radiobuttons"
                                variant="link"
                                key={idx}
                                type="radio"
                                name="storage"
                                value={store.value}
                                checked={props.storage === store.value}
                                onChange={storageChange}
                            >
                                {store.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SettingsModal;

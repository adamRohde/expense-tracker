import React, { useState } from "react";
import "./Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";

const Popup = (props) => {
    const showModalHandler = () => {
        console.log("settings clicked");
        props.setShow(true);
    };

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="dropdown">
                    Settings
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdownMenu">
                    <Dropdown.Item className="drowndown-item" onClick={showModalHandler}>
                        Settings
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
export default Popup;

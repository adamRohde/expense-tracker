import React, { useState } from "react";
import "./Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";

const Popup = (props) => {
    console.log("from the popup");
    console.log(props);

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown">
                    Settings
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/settings">Settings</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
export default Popup;

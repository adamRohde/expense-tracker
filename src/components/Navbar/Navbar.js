import React, { useState } from "react";
import "./Navbar.css";
import Popup from "./Popup";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
    let counter = 0;
    const [dropDownMenu, setDropdown] = useState("");
    return (
        <nav className="navbar navbar-expand-xl">
            <Popup dropDownMenu={dropDownMenu} setDropdown={setDropdown} />
        </nav>
    );
};

export default Navbar;

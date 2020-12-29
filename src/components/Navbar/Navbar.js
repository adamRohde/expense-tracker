import React, { useState } from "react";
import "./Navbar.css";
import Popup from "./Popup";

const Navbar = (props) => {
    const [dropDownMenu, setDropdown] = useState("");

    return (
        <nav className="navbar navbar-expand-xl">
            <Popup dropDownMenu={dropDownMenu} setDropdown={setDropdown} show={props.show} setShow={props.setShow} />
        </nav>
    );
};

export default Navbar;

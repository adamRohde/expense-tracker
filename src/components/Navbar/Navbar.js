import React, { useState } from "react";
import "./Navbar.css";
import Popup from "./Popup";

const Navbar = () => {
    const [dropDownMenu, setDropdown] = useState("");

    return (
        <nav className="navbar navbar-expand-xl">
            <Popup dropDownMenu={dropDownMenu} setDropdown={setDropdown} />
        </nav>
    );
};

export default Navbar;

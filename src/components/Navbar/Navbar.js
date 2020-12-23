import React, { useState } from "react";
import "./Navbar.css";
import Popup from "./Popup";

const Navbar = () => {
    let counter = 0;
    const [dropDownMenu, setDropdown] = useState("");
    return (
        <nav className="navbar navbar-expand-xl">
            <div class="dropdown">
                <div
                    className="burger"
                    onClick={() => {
                        console.log("click");
                        setDropdown((counter += 1));
                    }}
                >
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
            </div>
            <Popup dropDownMenu={dropDownMenu} setDropdown={setDropdown} />
        </nav>
    );
};

export default Navbar;

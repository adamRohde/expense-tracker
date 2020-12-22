import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from "./Hamburger";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

<link
    src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"
></link>;

//

const Navbar = () => {
    const updateNavBar = () => {
        console.log("updateNavBar");
        setNavBar();
    };

    const [navBar, setNavBar] = useState("");
    return (
        <nav className="navbar navbar-expand-xl">
            <div class="dropdown">
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>
            <Hamburger />
        </nav>
    );
};

export default Navbar;

{
    /* <div className="burger">
<div className="burger-line"></div>
<div className="burger-line"></div>
<div className="burger-line"></div>
</div> */
}

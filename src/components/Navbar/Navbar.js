import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import Hamburger from "./Hamburger";

<link
    src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"
></link>;

//

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-xl">
                <Hamburger />
            </nav>
        );
    }
}
export default Navbar;

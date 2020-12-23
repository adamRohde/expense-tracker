import React, { useState } from "react";
import "./Navbar.css";

const getPopup = (menu) => {
    if (menu <= 1) {
        return " ";
    } else {
        return "none";
    }
};

const Popup = (props) => {
    console.log(props.dropDownMenu);
    const popUpDisplay = getPopup(props.dropDownMenu);

    return (
        <div className="dropDownMenu" style={{ display: popUpDisplay }}>
            <ul>
                {popUpDisplay}
                <li>Settings</li>
                <li>Home</li>
                <li>Something Else</li>
            </ul>
        </div>
    );
};
export default Popup;

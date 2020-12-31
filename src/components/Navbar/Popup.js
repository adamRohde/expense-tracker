import React from "react";
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
                <Dropdown.Toggle bsPrefix="burger" variant="link">
                    <div className="burger">
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                    </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className="drowndown-item" onClick={showModalHandler}>
                        Settings
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
export default Popup;

import React from 'react';
import '../CSS/App.css';

<link src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
crossorigin="anonymous"></link>

const dropDownMenu = () =>{

    console.log("Hello dropdown");
    let root = document.querySelector(":root");

    document.getElementById("dark-mode").onclick = function () {
        root.style.setProperty("--theme-color-nav", "rgb(73, 73, 73)");
        root.style.setProperty("--theme-color-back", "#131313");
        root.style.setProperty("--theme-color-keys", "#0E4F9E");
        root.style.setProperty("--theme-color-keys-secondary", "#8FB3E0");
        root.style.setProperty("--theme-color-text", "rgb(255, 255, 255)");
        root.style.setProperty("--theme-color-burger", "rgb(255, 255, 255)");
    };

    document.getElementById("light-mode").onclick = function () {
        root.style.setProperty("--theme-color-nav", "rgb(213, 213, 213)");
        root.style.setProperty("--theme-color-back", "rgb(255, 255, 255)");
        root.style.setProperty("--theme-color-keys", "rgb(220, 220, 220)");
        root.style.setProperty("--theme-color-keys-secondary", "rgb(191, 191, 191)");
        root.style.setProperty("--theme-color-text", "rgb(0, 0, 0)");
        root.style.setProperty("--theme-color-burger", "rgb(64, 64, 64)");
    };
}

const  Navbar = ({}) => {
    return(
        <nav className="navbar navbar-expand-xl">    
            <div className="dropdown">
                <button onClick={dropDownMenu} className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">            
                    <div className="burger"></div>
                    <div className="burger"></div>
                    <div className="burger"></div>
                </button>
                 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item">
                        <input type="radio" name="rad2" id="dark-mode"></input>
                        <label className="dark-mode" for="dark_mode">Dark Mode</label>
                    </a> 

                    <a className="dropdown-item">
                        <input className="radio" name="rad2" id="light-mode" checked="checked"></input>
                        <label className="light-mode" for="light_mode">Light Mode</label>
                    </a> 
                </div>            
            </div>
        </nav>
    )};
export default Navbar;
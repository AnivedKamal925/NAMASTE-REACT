import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-app" src={LOGO_URL} alt="App Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">🏠</Link></li>
                    <li> <Link to="/contact">📧</Link></li>
                    <li>🛒</li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
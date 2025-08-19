import {LOGO_URL} from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className= "logo-app" src={LOGO_URL} alt="App Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>🏠</li>
                    <li>📧</li>
                    <li>🛒</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
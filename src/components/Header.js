import { LOGO_URL } from "../utils/constants";

export const Header = () => {
    return (
        <div className="header">
            <div className="logo=container">
                {/* <img className="logo" src = "https://static.vecteezy.com/system/resources/previews/010/149/586/non_2x/food-delivery-icon-sign-symbol-design-free-png.png"></img> */}
                <img className="logo" src = {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
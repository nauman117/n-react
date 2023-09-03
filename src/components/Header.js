import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus();
    useEffect(() => {
        // console.log("no dependency array => useEffect called on every component render")
    })
    useEffect(() => {
        // console.log("[] empty dependency array => useEffect called on initial render(only once)")
    }, [])
    useEffect(() => {
        // console.log("[dependency] array => useEffect called everytime depenendency changes")
    }, [btnNameReact])
    let btnName = "login";
    // console.log("Header Rendered")
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
        {/* // <div className="flex justify-between shadow-lg sm:bg-yellow-200 md:bg-green-200 lg:bg-pink-200"> */}

            <div className="m-5">
                {/* <img className="logo" src = "https://static.vecteezy.com/system/resources/previews/010/149/586/non_2x/food-delivery-icon-sign-symbol-design-free-png.png"></img> */}
                <img className="w-48" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 "> 
                    <li className="px-4">
                        OnlineStatus : {onlineStatus ? "🟢" : "🟠"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" onClick={() => { btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
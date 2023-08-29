import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
    const [btnNameReact,setBtnNameReact]=useState("Login")

    useEffect(()=>{
        // console.log("no dependency array => useEffect called on every component render")
    })
    useEffect(()=>{
        // console.log("[] empty dependency array => useEffect called on initial render(only once)")
    },[])
    useEffect(()=>{
        // console.log("[dependency] array => useEffect called everytime depenendency changes")
    },[btnNameReact])
    let btnName = "login";
    // console.log("Header Rendered")
    return (
        <div className="header">
            <div className="logo=container">
                {/* <img className="logo" src = "https://static.vecteezy.com/system/resources/previews/010/149/586/non_2x/food-delivery-icon-sign-symbol-design-free-png.png"></img> */}
                <img className="logo" src = {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link></li>
                    <li>
                        <Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{btnNameReact=="Login" ? setBtnNameReact("Logout"):setBtnNameReact("Login")}}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
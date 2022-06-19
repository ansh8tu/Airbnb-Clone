import React from "react"
import AirbnbLogo from "../images/airbnb.png"
export default function Navbar() {
    return (
        <>
            <nav>
                <img className="nav--img" src = {AirbnbLogo} width="40px" alt="Airbnb"></img>
                <h3 className="nav--title">airbnb</h3>
            </nav>
        </>
    )
}
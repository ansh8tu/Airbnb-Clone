import React from "react"
import MidSectionImg from "../images/mid-section-img.png"

export default function MidSection () {
    return (
        <>
            <div className="mid--div">
                    <img className="mid-sec-img" src={MidSectionImg}  alt="about-airbnb"></img>
                    <h1 className="mid--heading">Online Experiences</h1>
                    <p className="mid--para">Join unique interactive activities led by 
                    one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </>
    )
}
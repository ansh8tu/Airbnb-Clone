import React from "react"
import Navbar from "./components/Navbar"
import MidSection from "./components/MidSection"
import Card from "./components/Card"
import KatieImg from "./images/katie-zaferes.png"

export default function App() {
    return (
        <>
            <Navbar />
            <MidSection />
            <Card 
                img={KatieImg}
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </>
    )
}

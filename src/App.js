import React from "react"
import Navbar from "./components/Navbar"
import MidSection from "./components/MidSection"
import Card from "./components/Card"

export default function App() {
    return (
        <>
            <Navbar />
            <MidSection />
            <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </>
    )
}

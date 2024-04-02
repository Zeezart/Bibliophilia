import React from "react"
import Group from "../assets/Group.png"

function OtherSection(){
    return(
        <>
        <section className="key-features">
            <div className="feature-div">
            <p>Our Core Features</p>
            <h1>Explore our Key Features</h1>
            <img src={Group} alt="plus-group" className="plus"/>
            </div>
            
        </section>
        </>
    )
}

export default OtherSection
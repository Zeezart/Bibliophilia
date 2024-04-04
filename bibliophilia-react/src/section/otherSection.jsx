import React from "react"
import Group from "../assets/Group.png"
import girlReading from "../assets/girlReading.png"
import hourglass from "../assets/hourglass.png"
import community from "../assets/community.png"
import readingFormat from "../assets/readingFormat.png"
import swirl from "../assets/swirl.png"




function OtherSection(){
    return(
        <>
        <section className="key-features">
            <img src={swirl} alt="swirl" className="swirl"/>
            <div className="feature-div">
            
            <p>Our Core Features</p>
            
            <img src={Group} alt="plus-group" className="plus"/> 
            
            <h1>Explore our Key Features</h1>
            </div>
            
            <div>
                <div className="sec-one">

                    <img src={girlReading} alt="girl-reading" className="girl-reading"/>
                    <img src={hourglass} alt="hourglass" className="hourglass"/>
                    
                </div>
                <div className="sec-two">
                    <img src={community} alt="community-interaction" className="community"/>
                    <img src={readingFormat} alt="reading-format" className="reading-format"/>
                </div>
            </div>
        </section>

        <section className="book">

        </section>
        </>
    )
}

export default OtherSection
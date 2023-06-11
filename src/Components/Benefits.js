import React from "react";
import BenefitsCards from "./BenefitsCards"
import BenefitsData from "./BenefitsData"

export default function Benefits() {
    const BenefitsCard = BenefitsData.map(item => {
        return (
        <BenefitsCards 
            id={item.id}
            {...item}
        />
        )
    })

    return (
        <section className="benefits-section">
            {BenefitsCard}

            <div className="benefits--bottom-area">
                <h3 className="benefits--bottom-header">Ready To Build Your Community</h3>
                <button className="benefits--bottom-button">Get Started For Free</button>
            </div>
        </section>
    )
}
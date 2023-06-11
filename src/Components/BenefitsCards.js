import React from "react";

export default function BenefitsCards(props) {
    return (
        <article className="benefits--card-container">
                    <img className="benefits--card-image" src={`images/${props.cardImgUrl}`} alt={props.cardImgAlt} />

                <div className="benefits--card-text-box">
                    <h3 className="benefits--card-header">{props.cardHeader}</h3>
                    <p className="benefits--card-text">{props.cardText}</p>
                </div>
        </article>   
    )
}
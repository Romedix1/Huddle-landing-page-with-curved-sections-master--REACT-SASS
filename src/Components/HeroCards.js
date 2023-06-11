import React from "react";

export default function HeroCard(props) {
    return (
        <article className="hero--bottom-box">
            <img className="hero--bottom-box-image" src={`./images/${props.cardImgUrl}`} alt={props.cardImgAlt} />
            <h2 className="hero--bottom-box-header">{props.cardHeader}</h2>
            <p className="hero--bottom-box-text">{props.cardText}</p>
        </article>
    )
}
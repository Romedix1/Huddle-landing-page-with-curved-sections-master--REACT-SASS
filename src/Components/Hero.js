import React from "react";
import HeroCards from './HeroCards'
import HeroData from './HeroData'

export default function Hero() {

    const HeroCard = HeroData.map(item => {
        return (
            <HeroCards 
             id={item.id}
             {...item}
            />
        )
    })

    return (
        <section className="hero-section">
            <h1 className="hero--header">Build The Community Your Fans Will Love</h1>

            <p className="hero--text">Huddle re-imagines the way we build communities. You have a voice, but so does 
            your audience. Create connections with your users as you engage in genuine discussion.</p>

            <button className='hero--button'>Get Started For Free</button>

            <img className="hero--img" src="./images/screen-mockups.svg" alt="hero section image" />

            <div className="hero--cards-container">
                {HeroCard}
            </div>
        </section>
    )
}
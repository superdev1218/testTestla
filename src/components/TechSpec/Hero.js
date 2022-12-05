import React from 'react'
import style from './TechSpec.module.scss'

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={style.image_bg}>
                <picture>
                    <img src="images/model-3.jpg" alt="hero-mobile" style={{ height: "100%", width: "100%" }} />
                </picture>
            </div>
            <div className={style.text_content}>
                <header>
                    <h2>Roadster</h2>
                </header>
                <div className={style.arrow_down} style={{ opacity: "1" }}></div>
            </div>
        </div>
    )
}

export default Hero

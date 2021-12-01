import React, { useState } from 'react'
import Title from '../UI/Title/Title'
import { slider } from '../Data/DataCarousel'
import "./Style.scss"

const About = () => {

    const [index, setIndex] = useState(0);

    const prevSlider = () => {
        index > 0 && setIndex(index - 1)
    }

    const nextSlider = () => {
        index < slider.length - 1 && setIndex(index + 1);
    }

    return (
        <section className="about" dir="rtl">
            <div className="container">
                <Title>ما برای چه اینجاییم!؟</Title>
                <div className="about-content">
                    <span className={index === 0 ? "about-content__arrow arrow-right btn-disabled" : "about-content__arrow arrow-right"} onClick={prevSlider}>
                        <i className="fa fa-arrow-right"></i>
                    </span>
                    <div className="about-content__wraps">
                        <div className="about-content__wraps-box">
                            <div className="about-content__wraps-box__header">
                                {slider[index].title}
                            </div>
                            <div className="about-content__wraps-box__body">
                                {slider[index].subtitle}
                            </div>
                        </div>
                    </div>
                    <span className={index > 1 ? "about-content__arrow arrow-left btn-disabled" : "about-content__arrow arrow-left"} onClick={nextSlider}>
                        <i className="fa fa-arrow-left"></i>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About

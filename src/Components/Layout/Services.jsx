import React, { useState } from 'react'
import Title from '../UI/Title/Title'
import "./Style.scss"

const Services = () => {

    const [activeTabs, setActiveTabs] = useState(1);

    const toggleTabs = (index) => setActiveTabs(index);


    return (
        <div dir="rtl" className="services">
            <div className="container">
                <Title>خدمات بوکاره</Title>
                <div className="services-content">
                    <div className="services-content__tabs">
                        <div className={activeTabs === 1 ? "services-content__tabs-text active-text" : "services-content__tabs-text"} onClick={() => toggleTabs(1)}>خدمات 1</div>
                        <div className={activeTabs === 2 ? "services-content__tabs-text active-text" : "services-content__tabs-text"} onClick={() => toggleTabs(2)}>خدمات 2</div>
                        <div className={activeTabs === 3 ? "services-content__tabs-text active-text" : "services-content__tabs-text"} onClick={() => toggleTabs(3)}>خدمات 3</div>
                        <div className={activeTabs === 4 ? "services-content__tabs-text active-text" : "services-content__tabs-text"} onClick={() => toggleTabs(4)}>خدمات 4</div>
                    </div>
                    <div className="line"></div>
                    <div className="services-content__body">
                        <div className={activeTabs === 1 ? "services-content__body-box active-box" : "services-content__body-box"}>
                            <div className="services-content__body-box__title">لورم 1</div>
                            <div className="services-content__body-box__desc">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                            </div>
                            <div className="services-content__body-box__subtitle">لورم 1.5</div>
                            <div className="services-content__body-box__desc">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                            </div>
                        </div>
                        <div className={activeTabs === 2 ? "services-content__body-box active-box" : "services-content__body-box"}>
                            <div className="services-content__body-box__title">لورم 2</div>
                            <div className="services-content__body-box__desc">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                            </div>
                            <div className="services-content__body-box__subtitle">لورم 2.5</div>
                            <div className="services-content__body-box__desc">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                            </div>
                        </div>
                        <div className={activeTabs === 3 ? "services-content__body-box active-box" : "services-content__body-box"}>
                            <div className="services-content__body-box__title">لورم 3</div>
                            <div className="services-content__body-box__desc">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                            </div>
                            <div className="services-content__body-box__subtitle">لورم 3.5</div>
                            <div className="services-content__body-box__desc">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                            </div>
                        </div>
                        <div className={activeTabs === 4 ? "services-content__body-box active-box" : "services-content__body-box"}>
                            <div className="services-content__body-box__title">لورم 4</div>
                            <div className="services-content__body-box__desc">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                            </div>
                            <div className="services-content__body-box__subtitle">لورم 4.5</div>
                            <div className="services-content__body-box__desc">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

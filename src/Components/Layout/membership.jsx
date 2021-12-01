import React from 'react'
import Title from './../UI/Title/Title';
import "./Style.scss"

const membership = () => {

    let price = 100;

    return (
        <section className="member" dir="rtl">
            <div className="container">
                <Title>اشتراک های بوکاره</Title>
                <div className="member-content">
                    <div className="member-content__box">
                        <div className="member-content__box-title">اشتراک 1 ماهه</div>
                        <ul className="member-content__box-list">
                            <li className="member-content__box-list__item">25% تخفیف اولین سفارش</li>
                            <li className="member-content__box-list__item">دانلود رایگان 1 کتاب صوتی</li>
                            <li className="member-content__box-list__item">اجاره 9 کتاب در ماه</li>
                        </ul>
                        <div className="member-content__box-price">{price * 1}/000</div>
                    </div>
                    <div className="member-content__box">
                        <div className="member-content__box-title">اشتراک 3 ماهه</div>
                        <ul className="member-content__box-list">
                            <li className="member-content__box-list__item">50% تخفیف اولین سفارش</li>
                            <li className="member-content__box-list__item">دانلود رایگان 2 کتاب صوتی</li>
                            <li className="member-content__box-list__item">اجاره 11 کتاب در ماه</li>
                        </ul>
                        <div className="member-content__box-price">{price * 2}/000</div>

                    </div>
                    <div className="member-content__box">
                        <div className="member-content__box-title">اشتراک 6 ماهه</div>
                        <ul className="member-content__box-list">
                            <li className="member-content__box-list__item">75% تخفیف اولین سفارش</li>
                            <li className="member-content__box-list__item">دانلود رایگان 4 کتاب صوتی</li>
                            <li className="member-content__box-list__item">اجاره 13 کتاب در ماه</li>
                        </ul>
                        <div className="member-content__box-price">{price * 3}/000</div>

                    </div>
                    <div className="member-content__box">
                        <div className="member-content__box-title">اشتراک 12 ماهه</div>
                        <ul className="member-content__box-list">
                            <li className="member-content__box-list__item">100% تخفیف اولین سفارش</li>
                            <li className="member-content__box-list__item">دانلود رایگان 8 کتاب صوتی</li>
                            <li className="member-content__box-list__item">اجاره 15 کتاب در ماه</li>
                        </ul>
                        <div className="member-content__box-price">{price * 4}/000</div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default membership

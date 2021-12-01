import React from 'react'
import './Style.scss'
const Support = () => {
    return (
        <section className="support">
            <div className="container">
                <div className="support-content">
                    <div className="support-content__title">روش های پشتیبانی</div>
                    <div className="support-content__box">
                        <form>
                            <input type="email" placeholder="example@gmail.com" />
                            <i className="fa fa-arrow-right"></i>
                        </form>
                    </div>
                    <div className="line"></div>
                    <div className="support-content__chatroom">
                       <p>لطفا وارد حساب کاربری شوید</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support

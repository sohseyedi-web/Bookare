import React from 'react'
import logo from '../../assets/logo.svg'
import "./Style.scss"

const Footer = () => {
    return (
        <footer className="footer" dir="rtl">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-content__logo">
                        <img src={logo} alt="logo" />
                        سیدرو
                    </div>
                    <div className="footer-content__copy">
                        <p>تمامی حقوق وبسایت متعلق به سیدرو میباشد</p>
                        <span>1400/2021</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

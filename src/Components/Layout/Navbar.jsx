import React from 'react'
import "./Style.scss"
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = ({onShow}) => {
    return (
        <nav className="navbars" dir="rtl">
            <Link to="/">
                <div className="navbars-logo">
                    <img src={logo} alt="logo" />
                    سیدرو
                </div>
            </Link>
            <div className="navbars-links">
                <span onClick={onShow} className="navbars-links__text"> پشتیبانی </span>
                <Link to="/login" className="navbars-links__text">
                    <button className="navbars-links__text-login">ورود</button>
                </Link>
                <Link to="/register" className="navbars-links__text">
                    <button className="navbars-links__text-register">ثبت نام</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar

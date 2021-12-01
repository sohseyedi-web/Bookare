import React from 'react'
import { Link } from 'react-router-dom'
import header from '../../assets/header.svg'
import "./Style.scss"

const Header = () => {
    return (
        <div className="header" dir="rtl">
            <div className="container">
                <div className="header-content">
                    <div className="header-content__right">
                        <h1 className="header-content__right-title"><span>بوکاره،</span>  پلتفرم اجاره کتاب</h1>
                        <div className="header-content__right-subtitle">
                            کتابخانه ای به گستردگی و عظمت ایران روبروی شماست
                        </div>
                        <Link to="/asss" className="header-content__right-button">
                            <button>همین حالا شروع کن</button>
                        </Link>
                    </div>
                    <div className="header-content__left">
                        <img src={header} alt="book" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header

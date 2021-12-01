import React from 'react'
import { Link } from 'react-router-dom'
import NotFounds from '../../../assets/404.png'
import './NotFound.scss'
const NotFound = () => {
    return (
        <section className="not">
            <div className="container">
                <div className="not-content">
                    <div className="not-content__title">
                    !....صفحه درخواستی شما وجود ندارد
                    </div>
                    <img src={NotFounds} alt="404" />
                    <Link className="not-content__link" to="/">صفحه اصلی</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound

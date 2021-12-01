import React from 'react'

const Download = () => {
    return (
        <div className="download" dir="rtl">
            <div className="container">
                <div className="download-content">
                    <button className="download-content__button btn-cafe">دانلود از کافه بازار</button>
                    <button className="download-content__button btn-google">دانلود از گوگل پلی </button>
                    <button className="download-content__button btn-apple">دانلود از  اپ استور</button>
                </div>
                <div className="download-input">
                    <input type="email" placeholder="برای اطلاع از خبر ها ایمیل خود را وارد کنید"/>
                    <input type="submit" value="اشتراک" />
                </div>
            </div>
        </div>
    )
}

export default Download

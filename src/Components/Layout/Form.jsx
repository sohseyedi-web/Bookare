import React, { useState } from 'react'
import "./Style.scss"
import { Link } from 'react-router-dom';
import Title from '../UI/Title/Title';
import { toast } from 'react-toastify';

const Form = () => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name , email , message);
        toast.success("درخواست شما با موفقیت ارسال شد")
        setName('');
        setEmail('');
        setMessage('');
        
    }

    return (
        <section className="form" dir="rtl" name="Contact" id="Contact">
            <div className="container">
                <Title>راه های ارتباطی</Title>
                <div className="form-content">
                    <div className="form-content__social">
                        <Link to="/"><i className="fa fa-instagram"></i></Link>
                        <Link to="/"><i className="fa fa-twitter"></i></Link>
                        <Link to="/"><i className="fa fa-linkedin"></i></Link>
                        <Link to="/"><i className="fa fa-github"></i></Link>
                        <Link to="/"><i className="fa fa-telegram"></i></Link>
                    </div>
                    <div className="form-content__location">
                        <div className="form-content__location-icon">
                            <i className="fa fa-map"></i>
                            <span>ایران تهران تهران</span>
                        </div>
                        <div className="form-content__location-icon">
                            <i className="fa fa-envelope"></i>
                            <span>sohseyedi@gmail.com</span>
                        </div>
                        <div className="form-content__location-icon">
                            <i className="fa fa-phone"></i>
                            <span>0831111111</span>
                        </div>
                        <div className="form-content__location-icon">
                            <i className="fa fa-fax"></i>
                            <span>0831111111</span>
                        </div>
                    </div>
                    <form className="form-content__contact" onSubmit={handleSubmit}>
                        <div className="form-content__contact-box">
                            <input type="text" placeholder="نام و نام خانوادگی"  value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="form-content__contact-box" dir="ltr">
                            <input type="email" placeholder="example@gmail.com"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-content__contact-box">
                            <textarea placeholder="پیام خود را وارد کنید" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div className="form-content__contact-box">
                            <input type="submit" value="ارسال درخواست" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form

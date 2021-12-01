import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';
import './Style.scss'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, forceUpdate] = useState();


    useEffect(() => {
        return () => {
            setEmail();
            setPassword();
            forceUpdate();
        }
    })
    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی است",
            min: "کمتر از 8 کاراکتر نباید باشد",
            email: "ایمیل به طور صحیح وارد نشده"
        },
        element: message => <div className="form-wrap__box-error">{message}</div>
    }))


    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email, password
        }

        if (validator.current.allValid()) {
            toast.success("ورود موفقیت آمیز بود");
            console.log(user);
        } else {
            validator.current.showMessages()
            forceUpdate(1)
            toast.error("لطفا فرم بدون خطا باشد");

        }
    }

    return (
        <section className="form">
            <form className="form-wrap" onSubmit={handleSubmit}>
                <h3 className="form-wrap__title">ورود به سایت</h3>
                <div className="form-wrap__box">
                    <input type="email" className="form-wrap__box-input" placeholder=" " name="email" value={email} onChange={(e) => {
                        setEmail(e.target.value);
                        validator.current.showMessageFor("email")
                    }} />
                    <label htmlFor="email" className="form-wrap__box-label">ایمیل</label>
                    {validator.current.message("email", email, "required|email")}
                </div>
                <div className="form-wrap__box">
                    <input type="password" className="form-wrap__box-input" placeholder=" " name="password" value={password} onChange={(e) => {
                        setPassword(e.target.value);
                        validator.current.showMessageFor("password")
                    }} />
                    <label htmlFor="password" className="form-wrap__box-label">رمز عبور</label>
                    {validator.current.message("password", password, "required|min:8")}
                </div>
                <input type="submit" className="form-wrap__button" value="ثبت" />
            </form>
        </section>
    )
}

export default Login

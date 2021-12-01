import React, { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, forceUpdate] = useState();


    useEffect(() => {
        return () => {
            setName();
            setEmail();
            setPassword();
            forceUpdate();
        }
    })

    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی است",
            min: "کمتر از 8 کاراکتر نباید باشد",
            email: "ایمیل به طور صحیح وارد نشده",
            name: "کمتر از 5 کلمه نباید باشد"
        },
        element: message => <div className="form-wrap__box-error">{message}</div>
    }))
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name, email, password
        }

        if (validator.current.allValid()) {
            toast.success("ثبت نام موفقیت آمیز بود");
            console.log(user);
        } else {
            validator.current.showMessages();
            forceUpdate(1);
            toast.error("لطفا فرم بدون خطا باشد")
        }
    }

    return (
        <section className="form">
            <form className="form-wrap" onSubmit={handleSubmit}>
                <h3 className="form-wrap__title">ثبت نام در سایت</h3>
                <div className="form-wrap__box">
                    <input type="text" className="form-wrap__box-input" placeholder=" " name="name" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <label htmlFor="text" className="form-wrap__box-label">نام</label>
                    {validator.current.message("name", name, "required|name")}
                </div>
                <div className="form-wrap__box">
                    <input type="email" className="form-wrap__box-input" placeholder=" " name="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <label htmlFor="email" className="form-wrap__box-label">ایمیل</label>
                    {validator.current.message("email", email, "required|email")}
                </div>
                <div className="form-wrap__box">
                    <input type="password" className="form-wrap__box-input" placeholder=" " name="password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <label htmlFor="password" className="form-wrap__box-label">رمز عبور</label>
                    {validator.current.message("password", password, "required|min:8")}

                </div>
                <input type="submit" className="form-wrap__button" value="ثبت" />
            </form>
        </section>
    )
}

export default Register

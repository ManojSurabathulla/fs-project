import React, { useState } from 'react'
import { images } from '../../assests/img'
import './login-page.scss'

const LoginPresentational = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const { email, password } = {...data};

    const changehndler = e =>{
        setData({...data,[e.target.name]: e.target.value})
    }
    const login = e => {
        e.preventDefault()
        setData('')
       
        // auth.createUserWithEmailAndPassword(email,password).then(user => console.log(user)).catch(err =>console.log(err))
        console.log('clicked', data)
    }

    return (
        <>
            <section className='login_side'>
                <div className=''>
                    <div className='login_side_logo'>
                        <img className='login_side_logo_img' src={images?.fslogo} alt='fs-logo' />
                    </div>
                </div>
                <div className='login_side_parent'>
                    <div className='login_side_container'>
                        <div className='login_side_title'>
                            <h1>Login</h1>
                        </div>
                        <form className='login_side_form' autoComplete='off' onSubmit={login}>
                            <label className='login_side_form_label'>
                                <span className='login_side_form_label_emailtext login_side_form_label_email'>
                                    Email:
                                </span>
                                <input className='login_side_form_label_input login_side_form_label_email_input' placeholder='type email.com' type='email' name='email' value={email} onChange={changehndler} />
                            </label>
                            <label className='login_side_form_label'>
                                <span className='login_side_form_label_passwordtext login_side_form_label_password'>
                                    Password:
                                </span>
                                <input className='login_side_form_label_input login_side_form_label_password_input' placeholder='password' type="password" name='password' value={password} onChange={changehndler} />
                            </label>
                            <div className='login_side_form_forgot'>
                                <a href=''>Forgot password?</a>
                            </div>
                        </form>
                        <div className='login_side_login'>
                            <button className='login_side_login_btn' onClick={login}>Login</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPresentational
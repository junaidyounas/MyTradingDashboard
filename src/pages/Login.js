import React from 'react'
import Logo from '../assets/images/aquila360.png';
import illustration from '../assets/images/login.png';
const Login = () => {
    return (
        <div className='login'>
            <div className="row g-0 align-items-center">
                <div className="col-xxl-8 col-lg-7 col-md-6 d-none d-md-block">
                        <div className="imgWrapper">
                            <img src={illustration} alt="" />
                        </div>
                </div>
                <div className="col-xxl-4 col-lg-5 col-md-6">
                    <div className="formLogin">
                        <div className="brandName">
                            <img src={Logo} alt="" />
                        </div>
                        <h2>Welcome back!</h2>
                        <p>Please sign in to continue.</p>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="user name"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder="*****"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
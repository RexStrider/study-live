import React from "react";
import "../index.css";


const Login = () => (
    <>
        <nav className="navbar navbar-dark bg-dark">

            <a className="navbar-brand offset-5" href="/" style={{color: '#ff4500', fontSize: '30px'}}>study live</a>

            
            
            <a href='http://localhost:3001/api/logout'><button className="btn btn-secondary btn-block" >Logout</button></a>

        </nav>

        <div id="bar" className="row">
            <div className="col-md-12">
            </div>
        </div>

        <div className="row mt-5">
        <div className="col-md-6 offset-3 mt-5">
            <div className='text-white h3 text-center mb-4'>
                <p>Welcome to Study-Live!</p>
                <p>Login to study and talk to your peers!</p>
            </div>
            <a href='http://localhost:3001/auth/google'><button className="btn btn-secondary btn-block">Login with Google</button></a>
        </div>
        </div>
    </>
)

export default Login;
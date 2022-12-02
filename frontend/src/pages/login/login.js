import React from 'react';
import { LoginContainer } from './login.styles';
import apple from "../../assets/icons/appstore.png";
import google from "../../assets/icons/playstore.png"

const LoginPage = () => {

    return (
        <LoginContainer>
            <div className='main'>
                <div className='signup'>
                    <h5>Don't have an account?</h5>
                    <button className='miniglow'>SIGN UP</button>
                </div>
                <div className='logincontainer'>
                    <p className='amazing-h2'># CONNECT</p>
                    <form>
                        <input className='email' placeholder='Email' type='text'></input>
                        <input className='pw' placeholder='Password' type='password'></input>
                        <button className='glow'>SIGN IN</button>
                    </form>
                    <h5>Stay close to your friends and the world around you with #connect.</h5>
                    <div className='stores'>
                        <img src={apple}/>
                        <img src={google}/>
                    </div>
                    <h6>© #connect 2022. All rights reserved.</h6>
                </div>
            </div>
        </LoginContainer>
    )

}

export default LoginPage
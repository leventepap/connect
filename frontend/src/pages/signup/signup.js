import React from 'react';
import { SignupContainer } from './signup.styles';
import apple from "../../assets/icons/appstore.png";
import google from "../../assets/icons/playstore.png";
import dot from "../../assets/icons/dot.png";
import circle from "../../assets/icons/circle.png";

const SignupPage = () => {

    return (
        <SignupContainer>
            <div className='main'>
                <div className='signup'>
                    <h5>Already have an account?</h5>
                    <button className='miniglow'>SIGN IN</button>
                </div>
                <div className='logincontainer'>
                    <p className='amazing-h2'># CONNECT</p>
                    <h4>Sign Up</h4>
                    <form>
                        <input className='email' placeholder='Email' type='text'></input>
                        <button className='glow'>START</button>
                    </form>
                    <div className='circles'>
                        <img src={dot}/>
                        <img src={circle}/>
                        <img src={circle}/>
                    </div>
                    <h5>Stay close to your friends and the world around you with #connect.</h5>
                    <div className='stores'>
                        <img src={apple}/>
                        <img src={google}/>
                    </div>
                    <h6>© #connect 2022. All rights reserved.</h6>
                </div>
            </div>
        </SignupContainer>
    )

}

export default SignupPage
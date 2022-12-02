import React from 'react';
import { VerifyContainer } from './verify.styles';
import apple from "../../assets/icons/appstore.png";
import google from "../../assets/icons/playstore.png";
import dot from "../../assets/icons/dot.png";

const VerifyPage = () => {

    return (
        <VerifyContainer>
            <div className='main'>
                <div className='signup'>
                    <h5>Already have an account?</h5>
                    <button className='miniglow'>SIGN IN</button>
                </div>
                <div className='logincontainer'>
                    <p className='amazing-h2'># CONNECT</p>
                    <form>
                        <div className='top'>
                            <div className='col'>
                                <label>Email</label>
                                <input className='email' type='text'></input>
                                <label>First Name</label>
                                <input className='first_name' type='text'></input>
                                <label>Password</label>
                                <input className='pw' type='password'></input>
                            </div>
                            <div className='col'>
                                <label>Validaton Code</label>
                                <input className='val' type='text'></input>
                                <label>Last Name</label>
                                <input className='last_name' type='text'></input>
                                <label>Password Confirm</label>
                                <input className='pwc' type='password'></input>
                            </div>
                        </div>
                        <div className='bottom'>
                            <button className='glow'>COMPLETE</button>
                        </div>
                    </form>
                    <div className='circles'>
                        <img src={dot}/>
                        <img src={dot}/>
                        <img src={dot}/>
                    </div>
                    <h5>Stay close to your friends and the world around you with #connect.</h5>
                    <div className='stores'>
                        <img src={apple} />
                        <img src={google} />
                    </div>
                    <h6>© #connect 2022. All rights reserved.</h6>
                </div>
            </div>
        </VerifyContainer>
    )

}

export default VerifyPage
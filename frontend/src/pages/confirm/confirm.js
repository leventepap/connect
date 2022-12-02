import React from 'react';
import { ConfirmContainer } from './confirm.styles';
import apple from "../../assets/icons/appstore.png";
import google from "../../assets/icons/playstore.png";
import confirm from "../../assets/icons/confirm.png";
import dot from "../../assets/icons/dot.png";
import circle from "../../assets/icons/circle.png";

const ConfirmPage = () => {

    return (
        <ConfirmContainer>
            <div className='main'>
                <div className='signup'>
                    <h5>Already have an account?</h5>
                    <button className='miniglow'>SIGN IN</button>
                </div>
                <div className='logincontainer'>
                    <p className='amazing-h2'># CONNECT</p>
                    <h4>Congratulations!</h4>
                    <img className='confirm' src={confirm} />
                    <h3>We've sent a confirmation code to your email johnsmith@gmail.com</h3>
                    <button className='glow'>CONTINUE</button>
                    <div className='circles'>
                        <img src={dot}/>
                        <img src={dot}/>
                        <img src={circle}/>
                    </div>
                    <h5>Stay close to your friends and the world around you with #connect.</h5>
                    <div className='stores'>
                        <img src={apple} />
                        <img src={google} />
                    </div>
                    <h6>© #connect 2022. All rights reserved.</h6>
                </div>
            </div>
        </ConfirmContainer>
    )

}

export default ConfirmPage
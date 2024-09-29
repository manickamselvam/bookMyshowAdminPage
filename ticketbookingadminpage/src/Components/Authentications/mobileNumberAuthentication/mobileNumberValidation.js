import React from 'react'
import './mobileNumberValidation.css';
import { RecaptchaVerifier } from 'firebase/auth';

const MobileNumberValidation = () => {
   
    const onSignInSubmit = () => {

    }
    return (
        <>
            <div className='p-6 bg-slate-800'>
                <p className='text-white tracking-widest mb-5'>Verify your mobile number</p>
                <div className='flex flex-col'>
                    <input className='mb-5' type='number' placeholder='Phone Number'></input>
                    <input className='mb-5' type='number' placeholder='OTP'></input>
                    <button className='bg-amber-900 p-2'><span className='text-white'>Submit</span></button>
                </div>
            </div>
        </>
    )
}

export default MobileNumberValidation

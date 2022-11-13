import React, { useEffect, useRef, useState } from 'react'
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import './signup.css';
export default function SignUpPage() {
    const refContainer = useRef();
    useEffect(()=>{

    })

  return (
    <div className="h-full 
    bg-[#f8f9fa] flex justify-center items-center
    ">
        <div id="container" ref={refContainer}
        className="bg-white w-[768px] max-w-full min-h-[480px]
            relative overflow-hidden shadow-xl rounded-xl	">
                <div className="form-container sign-up-container">
                    <SignUp/>
                </div>
                <div className="form-container sign-in-container">
                    <SignIn/>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="font-bold text-3xl mb-6">Welcome!</h1>
                            <p className="mb-6">Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
                            <button className="ghost border-white border-2 px-10 py-2
                                            uppercase rounded-3xl font-medium text-sm
                            " id="signIn"
                            onClick={()=>{refContainer.current.classList.remove("right-panel-active")}}
                            >Đăng nhập</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="font-bold text-3xl mb-6">Chào, Bạn!</h1>
                            <p className="mb-6">Nếu bạn chưa có tài khoản, vui lòng đăng ký</p>
                            <button className="ghost border-white border-2 px-10 py-2
                                            uppercase rounded-3xl font-medium text-sm
                            " id="signUp"
                            onClick={()=>{refContainer.current.classList.add("right-panel-active")}}
                            >Đăng ký</button>
                        </div>                            
                    </div>    
                </div>                
            </div>
    </div>
  )
}

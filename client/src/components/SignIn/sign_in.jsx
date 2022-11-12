import axios from 'axios';
import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import axiosClient from '../../axios/axiosClient';

export const SignIn = (props) => {
    const [showPassword,setShowPassword]=useState(false);
    const handleClickShowPassword=()=>{
        if(showPassword){
            setShowPassword(false);
        }else{
            setShowPassword(true)
        }
    }
    const refAccount = useRef();
    const refPassword = useRef();
    const [valAccount,setValAccount]=useState(true);
    const [valPassword,setValPassword]=useState(true);
    // const handleSignIn= async ()=>{
    //     try{
    //         const response = await axiosClient.post(`sign`);
    //         const data = response.data;
    //         console.log(data);
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    const handleSignIn=(e)=>{
        if(!refAccount.current.value){
            setValAccount(false);
        }
        else{
            setValAccount(true);
        }
        if(!refPassword.current.value){
            setValPassword(false);
        }
        else{
            setValPassword(true);
        }
        if(refAccount.current.value!=='' && refPassword.current.value!==''){
            axios.post(`http://localhost:666/account/sign`,{
                account: refAccount.current.value,
                password: refPassword.current.value
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
            }).then((response)=>{
                console.log(response.status);
            })
            
        }
        e.preventDefault();
    }
  return (
    <div className="h-full w-full flex justify-center items-center">
        <form className="w-full" action="" method="post" onSubmit={handleSignIn}>
            <h1 className="text-3xl font-bold mb-4">Đăng nhập</h1>
            {/* <p>or use your account</p> */}
            <div>
                <div className="py-2 flex flex-wrap justify-center">
                    <input ref={refAccount} className="h-10 p-4 w-4/6 bg-slate-200" 
                    type="text" name="account" id="" 
                    autoComplete="off"
                    placeholder="Tên đăng nhập"
                    />
                    {valAccount?"":
                    <div className="error_mess text-start w-4/6">
                        * Chưa nhập tên đăng nhập    
                    </div>}
                </div>
                
                <div className="py-2 relative flex flex-wrap justify-center">
                    <input ref={refPassword} className="h-10 p-4 w-4/6 bg-slate-200" 
                    type={!showPassword?"password":"text"} name="password"
                    autoComplete="off"
                    placeholder="Mật khẩu"
                    />
                    <span className="showPassword absolute top-[25%] right-[20%] cursor-pointer"
                        onClick={handleClickShowPassword}
                    >
                        {!showPassword?<span><i class="fa fa-eye"></i></span>
                        :
                        <span><i class="fa fa-eye-slash"></i></span> 
                    }
                    </span>
                    {valPassword?"":
                    <div className="error_mess text-start w-4/6">
                        * Chưa nhập mật khẩu   
                    </div>}
                </div>
            </div>
            <div className="my-4">
                <a className="text-[14px]" href="/rememberpsw">
                    Quên mật khẩu
                </a>
            </div>
            <button type="submit" className="border-white rounded-3xl bg-red-700 
            text-white py-2 px-8 uppercase"
            >
                Đăng nhập
                </button>
        </form>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
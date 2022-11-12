import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'

export const SignUp = (props) => {
  const [showPassword,setShowPassword]=useState(false);
  const handleClickShowPassword=()=>{
      if(showPassword){
          setShowPassword(false);
      }else{
          setShowPassword(true)
      }
  }
  const refUsername = useRef();
  const refAccount = useRef();
  const refPassword = useRef();
  const refDay=useRef();
  const refMonth=useRef();
  const refYear=useRef();
  const [valUsername,setValUsername]=useState(true);
  const [valAccount,setValAccount]=useState(true);
  const [valPassword,setValPassword]=useState(true);
  const [valDate,setValDate]=useState(true);
  const [days,setDays]=useState([]);
  const [months,setMonths]=useState([]);
  const [years,setYears]=useState([]);
  const currentYear = new Date().getFullYear();
  useEffect(()=>{
      for(let i=1;i<=31;i++){
        setDays(days=>[...days,i]);
      }
      for(let i=1;i<=12;i++){
          setMonths(months=>[...months,i]);
      }
      for(let i=1905;i<=currentYear;i++){
          setYears(years=>[...years,i]);
      }

  },[])
  
  const handleSignIn=(e)=>{
      if(!refUsername.current.value){
          setValUsername(false);
      }
      else{
          setValUsername(true);
      }
      if(!refPassword.current.value){
          setValPassword(false);
      }
      else{
          setValPassword(true);
      }
      
      if(!refAccount.current.value){
        setValAccount(false);
    }
    else{
        setValAccount(true);
    }
    // const date=new Date(`${refYear.current.value} - ${refMonth.current.value}-${refDay.current.value}`);
    const date=moment(`${refYear.current.value}-${refMonth.current.value}-${refDay.current.value}`,'YYYY MM DD');
    if(date>=new Date() || !date.isValid()){
        setValDate(false)
    }
    else{
        console.log(date)
        setValDate(true)
    }
      e.preventDefault();
  }
  return (
    <div className="h-full w-full flex justify-center items-center">
        <form className="w-full" action="" method="post" onSubmit={handleSignIn}>
            <h1 className="text-3xl font-bold mb-4">Đăng ký</h1>
            {/* <p>or use your account</p> */}
            <div>
            <div className="py-2 flex flex-wrap justify-center">
                    <input ref={refAccount} className="h-10 p-4 w-4/6 bg-slate-200" 
                    type="text" name="username" id="" 
                    autoComplete="off"
                    placeholder="Tên đăng nhập"
                    />
                    {valAccount?"":
                    <div className="error_mess text-start w-4/6">
                        * Chưa nhập tên đăng nhập    
                    </div>}
                </div>
                <div className="py-2 flex flex-wrap justify-center">
                    <input ref={refUsername} className="h-10 p-4 w-4/6 bg-slate-200" 
                    type="text" name="username" id="" 
                    autoComplete="off"
                    placeholder="Tên người dùng"
                    />
                    {valUsername?"":
                    <div className="error_mess text-start w-4/6">
                        * Chưa nhập tên người dùng    
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
                <div className="py-1 flex justify-center flex-wrap">
                    <div className="block text-left	w-4/6">Ngày sinh</div>
                    {valDate?"":
                    <div className="error_mess text-start w-4/6">
                        * Ngày sinh không hợp lệ   
                    </div>}
                    <div className="flex justify-between w-4/6">

                      <select className="w-1/4 rounded border-[1px] border-gray-700 outline-0	" 
                            ref={refDay} name="day" id="">
                            {days.map((value)=>
                                <option value={value}>{value}</option>
                        )}
                      </select>
                      <select className="w-1/4 rounded border-[1px] border-gray-700 outline-0	" 
                            ref={refMonth} name="month" id="">
                            {months.map((value)=>
                                <option value={value}>{value}</option>
                        )}
                      </select>
                      <select className="w-1/4 rounded border-[1px] border-gray-700 outline-0	" 
                            ref={refYear} name="year" id="">
                            {years.map((value)=>
                                <option value={value}>{value}</option>
                        )}
                      </select>
                    </div>
                </div>
                <div className="py flex justify-center flex-wrap">
                    <div className="block text-left	w-4/6">Giới tính</div>
                    <div className="flex w-4/6">
                        <div className="mr-8 flex items-center ">
                            <label className="pr-2 cursor-pointer" htmlFor="man">Nam</label>
                            <input className="cursor-pointer" type="radio" checked name="gender" id="man" value="0"/>
                        </div>

                        <div className=" flex items-center ">
                            <label className="pr-2 cursor-pointer" htmlFor="female">Nữ</label>
                            <input className="cursor-pointer" type="radio" name="gender" id="female" value="1"/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="my-1">
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
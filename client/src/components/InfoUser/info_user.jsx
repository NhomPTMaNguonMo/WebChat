import React, { useEffect } from 'react'

export default function InfoUser(props) {
  return (
    <div className="fixed w-full h-full top-0 bottom-0 left-0 right-0
        flex justify-center items-center">
        <div id="overlay"
        onClick={(e)=>{
            props.openInfo(0)
            e.target.style.display='none'
    
        }}></div>

        <div className="info_user w-[350px] h-[600px] bg-white z-20" 
        >
          <div className="h-[50px] w-full flex items-center justify-between px-4">
            <div className="font-semibold">
              Thông tin tài khoản
            </div>
            <div className="w-[30px] h-[30px] rounded-full hover:bg-slate-200
               flex items-center justify-center cursor-pointer"
               onClick={()=>{
                props.openInfo(0)
            }}>
              <i className="fa fa-times"></i>
            </div>
          </div>
          <div className="w-full table">
              <img className="object-cover h-[130px] w-full" src="/bg_default.png" alt="" />
          </div>
          <div className="w-full flex justify-center relative">
            <div className="w-[60px] h-[60px] border-2 border-white rounded-full 
            bg-white cursor-pointer absolute bottom-[50px]">
                  <img className="rounded-full" src="/user.png" alt="" />
              </div>
            <div className="h-[80px] w-full flex items-center justify-center">
              <div className="font-semibold text-lg pt-8">
                Thanh Cương
              </div>
            </div>
          </div>
          <div className="text-left w-full px-4">
            <div className="text-sm font-semibold">
              Thông tin cá nhân
            </div>
            <table className="mt-2 text-[15px]">
              <tbody>
                <tr>
                  <td className="w-28 h-8 text-gray-400">Email</td>
                  <td>cuongho875@gmail.com</td>
                </tr>
                <tr>
                  <td className="w-28 h-8 text-gray-400">Giới tính</td>
                  <td>Nam</td>
                </tr>
                <tr>
                  <td className="w-28 h-8 text-gray-400">Ngày sinh</td>
                  <td>13 tháng 04, 2001</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</div>
  )
}

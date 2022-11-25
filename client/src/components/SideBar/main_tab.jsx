import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import InfoUser from '../InfoUser/info_user';

export const MainTab = (props) => {
    const [active,setActive]=useState("message");
    const refInfo=useRef();
    document.body.addEventListener('click',()=>{
        refInfo.current.style.display='none';
    })
  return (
    <div className="w-[65px] h-full bg-blue-600  pt-6 relative">
        {props.userId?
        <InfoUser openInfo={props.openInfo}/>
        :''}
        <div className="w-full pb-2 cursor-pointer flex justify-center items-center"
            onClick={(e)=>{
                refInfo.current.style.display='block';
                e.stopPropagation();
            }}>
            <div className="w-[42px] h-[42px] border rounded-full">
                <img className="rounded-full" src="/user.png" alt="" />
            </div>
        </div>
        <div ref={refInfo}
             className="absolute w-[300px] text-left border hidden
            left-[4.1rem] top-8 bg-white drop-shadow-md rounded-sm"
            onClick={(e)=>{
                e.stopPropagation()
            }}>
            <div className="w-full px-3 border-b h-10 flex items-center">
                Thanh Cương
            </div>
            <div className="w-full py-1">
                <div className="w-full py-1  px-3 cursor-pointer hover:bg-zinc-100"
                onClick={()=>{
                    props.openInfo(1)
                    refInfo.current.style.display='none'
                }}>
                    Hồ sơ của bạn
                </div>
                <div className="w-full py-1 px-3 cursor-pointer hover:bg-zinc-100">
                    Cài đặt
                </div>
            </div>
            <div className="w-full py-1 h-10 border-t 
             cursor-pointer ">
                <div className="hover:bg-zinc-100 w-full px-3 h-full flex items-center">
                    Đăng xuất
                </div> 
            </div>
        </div>
        <div className="w-full cursor-pointer ">
            <div className={active==="message"?"h-[65px] flex justify-center items-center bg-blue-700"
            :"h-[65px] flex justify-center items-center hover:bg-blue-500"}
            onClick={()=>{
                setActive("message")
            }}>
                <img className="" src="/chat.png" alt="" />
            </div>
        </div>
        <div className="w-full cursor-pointer ">
            <div className={active==="contact"?"h-[65px] flex justify-center items-center bg-blue-700"
            :"h-[65px] flex justify-center items-center hover:bg-blue-500"}
            onClick={()=>{
                setActive("contact")
            }}>
                <img className="" src="/contact-books.png" alt="" />
            </div>
        </div>
  </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch)=>{

}

export default connect(mapStateToProps, mapDispatchToProps)(MainTab)
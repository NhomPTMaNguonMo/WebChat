import React, { useRef, useState } from 'react'
import History from './history';
import Results from './results';

export default function SearchFriend() {
    const refInput = useRef();
    const refBtnClose =useRef();
    const refClearInput =useRef();
    const [isFocus,setIsFocus]=useState(false)
    const [value,setValue]=useState('');
  return (
    <div className="h-[35px] w-[240px] relative">
        <div className="w-full h-full px-4">
            <div className="absolute top-0 bottom-0 flex items-center left-6
            cursor-pointer text-zinc-600"
            onClick={()=>{
                refInput.current.focus()
            }}>
                <i className="fa fa-search"></i>
            </div>
            <input ref={refInput} className="h-full w-[240px] pl-8 bg-[#eaedf0]
                rounded focus:outline focus:outline-blue-500 focus:bg-white" type="text"
                onFocus={()=>{
                    refBtnClose.current.style.display='flex'
                    setIsFocus(true)
                }} 
                onChange={(e)=>{
                    setValue(e.target.value);
                    refClearInput.current.style.display='flex'
                }}/>
            <div ref={refClearInput} className="absolute top-0 bottom-0 left-full z-10
                hidden items-center cursor-pointer"
                onClick={()=>{
                    refInput.current.value=''
                    setValue('');
                    refInput.current.focus()
                    refClearInput.current.style.display='none'
                }}>
                <i className="fa fa-times"></i>
            </div>
            <div ref={refBtnClose} className="absolute top-0 bottom-0 left-full hidden items-center">
                <button className="ml-5 px-3 h-full rounded hover:bg-[#eaedf0]"
                onClick={()=>{
                    refBtnClose.current.style.display='none'
                    refClearInput.current.style.display='none'
                    setIsFocus(false)
                    refInput.current.value=''
                    setValue('')
                }}>
                    Đóng
                </button>
            </div>
        </div>
        <div className="mt-4">
            {isFocus
            ?
            !value?<History/>:<Results value={value}/>
            :''}
        </div>
    </div>
  )
}

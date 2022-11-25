import React, { useEffect ,useState} from 'react'
import {getData, storeData} from '../localStorage/localStorage'

export default function History() {
    const [history,setHistory]=useState(getData(`history`)?getData(`history`):[]);
    useEffect(()=>{
        storeData(`history`,history);

    },[history])
  return (
    <div className="w-full">
        <div className="text-left px-4">
            Tìm gần đây
        </div>
        <div className="w-[345px]">
        {
            history.map((item,index)=>{
                return(
                    <div key={index} className="w-full h-[70px] hover:bg-stone-100 cursor-pointer
                    flex justify-between items-center text-left px-4"
                    onMouseEnter={(e)=>{
                        e.target.querySelector('.close_item').style.display='block'
                    }}
                    onMouseLeave={(e)=>{
                        e.target.querySelector('.close_item').style.display='none'
                    }}>
                    <div className="flex items-center">
                        <div className="mr-4">
                            <img className="w-[45px] h-[45px] rounded-full" 
                            src={item.avatar==='anh'?'/user.png':item.avatar} alt="" />
                        </div>
                        <div className="font-medium">
                            {item.nameUser}
                        </div>
                    </div>
                    <div className="text-gray-500 hidden close_item">
                        <i className="fa fa-times"></i>
                    </div>
                </div>
                )
            })
        }
        </div>
    </div>
  )
}

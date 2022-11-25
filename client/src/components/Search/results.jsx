import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {getData, storeData} from '../localStorage/localStorage'
export default function Results(props) {
    
    const [listFriend,setListFriend]=useState([]);
    const [history,setHistory]=useState(getData(`history`)?getData(`history`):[]);
    const fetchData = async ()=>{
        const response = await axios.post('/friends');
        if(response.status=200){
            setListFriend(response.data.listFirends)
        }
    }
    useEffect(()=>{
        fetchData();
        storeData(`history`,history);
    },[])
    const results = listFriend.filter((item)=>{
        if(item.nameUser.includes(props.value))
             return item
    })
  return (
    <div className="w-full">
        <div className="text-left px-4">
            Kết quả tìm kiếm ({results.length})
        </div>
        <div className="w-[345px]">
            {results.map((item,index)=>{
                return (
                    <div key={index} className="w-full h-[70px] hover:bg-stone-100 cursor-pointer
                    flex justify-between items-center text-left px-4"
                    onMouseEnter={(e)=>{
                        e.target.querySelector('.close_item').style.display='block'
                    }}
                    onMouseLeave={(e)=>{
                        e.target.querySelector('.close_item').style.display='none'
                    }}
                    onClick={()=>{
                        const exists = history.find((his)=>{
                            if(his.id===item.id){
                                return his
                            }
                        })
                        if(!exists){
                            setHistory(history=>[...history,item]);
                        }
                        storeData(`history`,history);
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
            })}
        </div>
    </div>
  )
}

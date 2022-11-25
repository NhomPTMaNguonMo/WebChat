import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { MainTab } from '../../components/SideBar/main_tab'
import { openChatBox, openInfoUser } from '../../actions';
import NavBar from '../../components/SideBar/nav_bar';
import { ChatViewContainer } from '../../components/ChatView/chatview_container';
import io from 'socket.io-client'

export const Home = (props) => {

  const [chat,setChat]=useState({});
  const socket = io();
  useEffect(()=>{
      socket.on("connect", () => {
      console.log(socket.id);
  })
  },[])

  return (
    <div className="h-full w-full flex">
      <div className="w-[410px] h-full flex border-r">
        <MainTab openInfo={props.openInfo} userId={props.userId}/>
        <NavBar openChat={props.openChat}/>
      </div>
      <div className="w-full h-full border-l">
        <ChatViewContainer chat={props.chat} socket={socket}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userId:state.userId,
    chat:state.chat
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
      openInfo:(uid)=>{
          dispatch(openInfoUser(uid));
      },
      openChat:(user,idBox)=>{
        dispatch(openChatBox(user,idBox));
      },
      
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
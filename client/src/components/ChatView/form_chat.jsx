import React,{useRef,useEffect} from 'react'
import { connect } from 'react-redux'
import {sendChatBox} from '../../actions/index.js'
export const FormChat = (props) => {
  const createBoxChat=(id)=>{
    
  }
  const refInput = useRef();
  return (
    <div className="w-full h-[10%] px-4">
        <form className="w-full h-full flex" action="" method="post"
        onSubmit={(e)=>{
          let data = {
            idBox: props.idBox,
            content: refInput.current.value,
        }
        props.socket.emit("sendMess", data);
        props.sendChat(props.idBox,refInput.current.value);
        refInput.current.value=''
        e.preventDefault()
        }}>
            <input ref={refInput} type="text" name="chattext" 
            className="h-full outline-none w-[80%]" placeholder="Nhập tin nhắn"/>
            <button type="submit">Gửi</button>
        </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    send:state.send
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    sendChat:(idBox,content)=>{
      dispatch(sendChatBox(idBox,content))
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormChat)
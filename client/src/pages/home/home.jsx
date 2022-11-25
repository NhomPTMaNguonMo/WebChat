import React from 'react'
import { connect } from 'react-redux'
import { MainTab } from '../../components/SideBar/main_tab'
import { openInfoUser } from '../../actions';
import NavBar from '../../components/SideBar/nav_bar';

export const Home = (props) => {
  return (
    <div className="h-full w-full">
      <div className="w-[410px] h-full flex">
        <MainTab openInfo={props.openInfo} userId={props.userId}/>
        <NavBar/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userId:state.userId
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
      openInfo:(uid)=>{
          dispatch(openInfoUser(uid));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
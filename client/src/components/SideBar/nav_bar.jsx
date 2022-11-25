import React from 'react'
import SearchFriend from '../Search/search_friend'

export default function NavBar(props) {
  return (
    <div className="w-[345px] h-full border-r-1">
        <div className="w-full h-[70px] flex items-center">
            <SearchFriend openChat={props.openChat}/>
        </div>
            <div>
                
            </div>
    </div>
  )
}

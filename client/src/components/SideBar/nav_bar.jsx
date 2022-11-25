import React from 'react'
import SearchFriend from '../Search/search_friend'

export default function NavBar() {
  return (
    <div className="w-[335px] h-full">
        <div className="w-full h-[70px] p-4">
            <SearchFriend/>
        </div>
    </div>
  )
}

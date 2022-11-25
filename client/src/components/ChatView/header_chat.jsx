import React, { useEffect, useState } from "react";

export default function HeaderChat(props) {
  const user = props.user;
  useEffect(() => {}, [props.chat]);
  return (
    <div className="w-full h-[10%] bg-white px-4 flex items-center border-b">
      <div className="flex items-center">
        <div className="mr-4">
          <img
            className="w-[45px] h-[45px] rounded-full"
            src={user.avatar !== "anh" ? user.avatar : "/user.png"}
            alt=""
          />
        </div>
        <div className="font-medium">{user.nameUser}</div>
      </div>
    </div>
  );
}

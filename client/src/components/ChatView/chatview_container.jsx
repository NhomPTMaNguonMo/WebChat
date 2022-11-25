import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import HeaderChat from "./header_chat";

import ChatView from "./chatview";
import FormChat from "./form_chat";

export const ChatViewContainer = (props) => {
  const [user, setUser] = useState({});
  const [idBox, setIdBox] = useState(0);

  useEffect(() => {
    if (props.chat) {
      setUser(props.chat.user);
      setIdBox(props.chat.idBox);
    }
    console.log(props.chat.idBox);
  }, [props.chat]);

  return (
    <div className="w-full h-full">
      {user ? (
        <div className="w-full h-full">
          <HeaderChat user={user} />
          <ChatView user={user} idBox={idBox} socket={props.socket} />
          <FormChat user={user} idBox={idBox} socket={props.socket} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatViewContainer);

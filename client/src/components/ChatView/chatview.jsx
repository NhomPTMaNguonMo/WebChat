import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import io from "socket.io-client";
import { connect } from "react-redux";

export const ChatView = (props) => {
  const [uid, setUid] = useCookies("id");
  const [receiveMess, setReceiveMess] = useState({});
  const [loading, setLoading] = useState(true);
  const [sendMess, setSendMess] = useState([]);
  const [allMess, setAllMess] = useState([]);
  const [user, setUser] = useState({});
  const [idBox, setIdBox] = useState(0);
  const messagesEndRef = useRef(null);
  const fetchData = async (id) => {
    const response = await axios.post("/mess/getAllContent", {
      idBox: id,
    });
    if (response.status === 200) {
      setAllMess(response.data.list.reverse());
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(props.idBox);
    setUser(props.user);
    setIdBox(props.idBox);
    props.socket.on("receiveMess", (data) => {
      fetchData(props.idBox);
    });
    if (messagesEndRef) {
      messagesEndRef.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, [props]);
  return (
    <div
      ref={messagesEndRef}
      className="w-full h-[80%] bg-blue-500 overflow-y-scroll px-4 "
    >
      {idBox
        ? allMess.map((item, index) => {
            return (
              <div key={index} className="w-full">
                {item.idUser != uid.id ? (
                  <div className="text-left flex items-center w-full">
                    <div className="mr-4 w-[45px] h-[45px]">
                      {index == 0 ? (
                        allMess[index].idUser == item.idUser ? (
                          <img
                            className="w-[45px] h-[45px] rounded-full"
                            src={
                              user.avatar !== "anh" ? user.avatar : "/user.png"
                            }
                            alt=""
                          />
                        ) : (
                          ""
                        )
                      ) : allMess[index - 1].idUser != item.idUser ? (
                        <img
                          className="w-[45px] h-[45px] rounded-full"
                          src={
                            user.avatar !== "anh" ? user.avatar : "/user.png"
                          }
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className="bg-white select min-w-[40px] min-h-[40px]
                               flex justify-center items-center rounded-xl"
                    >
                      {item.content}
                    </div>
                  </div>
                ) : (
                  <div className=" flex items-center w-full justify-end">
                    <div
                      className="bg-white select min-w-[40px] min-h-[40px]
                               flex justify-center items-center rounded-xl"
                    >
                      {item.content}
                    </div>
                    <div className="ml-4 w-[45px] h-[45px]">
                      {index == 0 ? (
                        allMess[index].idUser == item.idUser ? (
                          <img
                            className="w-[45px] h-[45px] rounded-full"
                            src={
                              user.avatar !== "anh" ? user.avatar : "/user.png"
                            }
                            alt=""
                          />
                        ) : (
                          ""
                        )
                      ) : allMess[index - 1].idUser != item.idUser ? (
                        <img
                          className="w-[45px] h-[45px] rounded-full"
                          src={
                            user.avatar !== "anh" ? user.avatar : "/user.png"
                          }
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        : "sad"}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    send: state.send,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatView);

import React, { useEffect, useState } from "react";
import { getData, storeData } from "../localStorage/localStorage";
import { useCookies } from "react-cookie";
import axios from "axios";
export default function History(props) {
  const [uid, setUid] = useCookies("id");
  const [listBoxChat, setListBoxChat] = useState([]);
  const [history, setHistory] = useState(
    getData(`history${uid.id}`) ? getData(`history${uid.id}`) : []
  );
  const fetchData = async () => {
    const response = await axios.post("/box");
    if (response.status === 200) {
      setListBoxChat(response.data.listBoxchat);
    }
  };
  useEffect(() => {
    fetchData();
    storeData(`history${uid.id}`, history);
  }, [history]);
  return (
    <div className="w-full">
      <div className="text-left px-4">Tìm gần đây</div>
      <div className="w-[345px]">
        {history.length ? (
          history.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-[70px] hover:bg-stone-100 cursor-pointer
                    flex justify-between items-center text-left px-4"
                onMouseEnter={(e) => {
                  e.target.querySelector(".close_item").style.display = "block";
                }}
                onMouseLeave={(e) => {
                  e.target.querySelector(".close_item").style.display = "none";
                }}
                onClick={() => {
                  const box = listBoxChat.find(
                    (boxchat) => boxchat.idUser === item.id
                  );
                  if (box) {
                    props.openChat(item, box.idBox);
                  } else {
                    props.openChat(item, 0);
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      className="w-[45px] h-[45px] rounded-full"
                      src={item.avatar === "anh" ? "/user.png" : item.avatar}
                      alt=""
                    />
                  </div>
                  <div className="font-medium">{item.nameUser}</div>
                </div>
                <div
                  className="text-gray-500 hidden close_item"
                  onClick={() => {
                    setHistory(history.filter((his) => his.id !== item.id));
                  }}
                >
                  <i className="fa fa-times"></i>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-left px-4">Không có tìm kiếm nào gần đây</div>
        )}
      </div>
    </div>
  );
}

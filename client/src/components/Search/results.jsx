import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { getData, storeData } from "../localStorage/localStorage";
export default function Results(props) {
  const [uid, setUid] = useCookies("id");
  const [listFriend, setListFriend] = useState([]);
  const [listBoxChat, setListBoxChat] = useState([]);
  const [loading, setLoading] = useState(true);

  const [history, setHistory] = useState(
    getData(`history${uid.id}`) ? getData(`history${uid.id}`) : []
  );
  const fetchData = async () => {
    setLoading(true);
    const response = await axios.post("/friends");
    if (response.status === 200) {
      setListFriend(response.data.listFirends);
      setLoading(false);
    }
  };
  const fetchListBoxChat = async () => {
    setLoading(true);
    const response = await axios.post("/box");
    if (response.status === 200) {
      setListBoxChat(response.data.listBoxchat);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    fetchListBoxChat();
    storeData(`history${uid.id}`, history);
  }, [history]);
  const results = listFriend.filter((item) =>
    item.nameUser.includes(props.value)
  );
  return (
    <div className="w-full">
      <div className="text-left px-4">Kết quả tìm kiếm ({results.length})</div>
      <div className="w-[345px]">
        {results.length ? (
          results.map((item, index) => {
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
                  props.openChat(item, 8);
                  const exists = history.find((his) => his.id === item.id);
                  if (!exists) {
                    setHistory((history) => [item, ...history]);
                  }
                  const box = listBoxChat.find(
                    (boxchat) => boxchat.idUser === item.id
                  );
                  if (box) {
                    props.openChat(item, box.idBox);
                  } else {
                    props.openChat(item, box, 0);
                  }
                  storeData(`history${uid.id}`, history);
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
                <div className="text-gray-500 hidden close_item">
                  <i className="fa fa-times"></i>
                </div>
              </div>
            );
          })
        ) : (
          <div>Không tìm thấy kết quả</div>
        )}
      </div>
    </div>
  );
}

function postData(url: string, params: {}, cb: Function) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(params),
  })
    .then((v) => {
      return v.json();
    })
    .then((v) => {
      cb(JSON.stringify(v));
    });
}
function xml(url: string, params: {}, cb: Function, method?: string) {
  var req = new XMLHttpRequest();

  req.open(method?method:"POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.onloadend = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(this.responseText);
    }
    if (this.readyState == 4 && this.status == 400) {
      cb(this.responseText);
    }
  };

  req.send(JSON.stringify(params));
}
var root = document.getElementById("root");
function render(params: string) {
  root!.innerHTML = "";
  root?.append(params);
}

var listAddFriendRequest = document.getElementById("FriendsList");
listAddFriendRequest?.addEventListener("click", () => {
  xml("/friends/", {}, (data: string) => {
    render(data);
  });
});

var findNameFriends =<HTMLInputElement> document.getElementById("findNameFriends");
var submitFindNameFriends = document.getElementById("submitFindNameFriends");
submitFindNameFriends?.addEventListener("click", () => {
  var n = findNameFriends?.value;
  xml("/friends/search", { name: n }, (data: string) => {
    render(data);
  });
});

var idFriend =<HTMLInputElement> document.getElementById("idFriend");
var submitIdFriend = document.getElementById("submitIdFriend");
submitIdFriend?.addEventListener("click", () => {
  var id = idFriend?.value;
  xml(
    "/friends/addFriendsRequset",
    { idFriend: id },
    (data: string) => {
      render(data);
    }
  );
});

var listAddFriendRequest = document.getElementById("listAddFriendRequest");
listAddFriendRequest?.addEventListener("click", () => {
  xml(
    "/friends/listAddFriendRequest",
    {},
    (data: string) => {
      render(data);
    }
  );
});

var CacelAddFriendRequest =<HTMLInputElement> document.getElementById("CacelAddFriendRequest");
var SubmitCacelAddFriendRequest = document.getElementById(
  "SubmitCacelAddFriendRequest"
);
SubmitCacelAddFriendRequest?.addEventListener("click", () => {
  var n = CacelAddFriendRequest?.value;
  xml(
    "/friends/cacelAddFriendRequest",
    { idFriend: n },
    (data: string) => {
      root?.append(data);
    }
  );
});

var AcceptAddFriendRequest =<HTMLInputElement> document.getElementById("AcceptAddFriendRequest");
var SubmitAcceptAddFriendRequest = document.getElementById(
  "SubmitAcceptAddFriendRequest"
);
SubmitAcceptAddFriendRequest?.addEventListener("click", () => {
  var n = AcceptAddFriendRequest?.value;
  xml(
    "/friends/acceptAddFriendRequest",
    { idFriend: n },
    (data: string) => {
      root?.append(data);
    }
  );
});

var SubmitBoxChatList = <HTMLInputElement>document.getElementById("SubmitBoxChatList");
SubmitBoxChatList?.addEventListener("click", () => {
  xml("/box/", {}, (data: string) => {
    render(data);
  });
});

var cancelFriends = <HTMLInputElement>document.getElementById("cancelFriends");
var SubmitCancelFriends = document.getElementById("SubmitCancelFriends");
SubmitCancelFriends?.addEventListener("click", () => {
  var n = cancelFriends?.value;
  xml(
    "/friends/cancelFriends",
    { idFriend: n },
    (data: string) => {
      render(data);
    }
  );
});

var HiddenBoxChat =<HTMLInputElement> document.getElementById("HiddenBoxChat");
var SubmitHiddenBoxChat = document.getElementById("SubmitHiddenBoxChat");
SubmitHiddenBoxChat?.addEventListener("click", () => {
  var n = HiddenBoxChat?.value;
  xml(
    "/box/hiddenBoxChat",
    { idBox: n },
    (data: string) => {
      render(data);
    }
  );
});

var Chat =<HTMLInputElement> document.getElementById("Chat");
var SubmitChat = document.getElementById("SubmitChat");
SubmitChat?.addEventListener("click", () => {
  var n = Chat?.value;
  xml("/box/chat", { idFriend: n }, (data: string) => {
    render(data);
  });
});

var SubmitSentFriendRequest = document.getElementById(
  "SubmitSentFriendRequest"
);
SubmitSentFriendRequest?.addEventListener("click", () => {
  xml(
    "/friends/sentFriendRequest",
    {},
    (data: string) => {
      render(data);
    }
  )
});

var GetContentInBox =<HTMLInputElement> document.getElementById("GetContentInBox");
var SubMitGetContentInBox = document.getElementById("SubMitGetContentInBox");
SubMitGetContentInBox?.addEventListener("click", () => {
  var n = GetContentInBox?.value;
  xml("/mess/getAllContent", { idBox: n }, (data: string) => {
    render(data);
  });
});

var password =<HTMLInputElement> document.getElementById("password");
var password1 =<HTMLInputElement> document.getElementById("password1");
var password2 =<HTMLInputElement> document.getElementById("password2");
document.getElementById("ChangePassword")?.addEventListener("click", () => {
  xml(
    "/account/ChangePassword",
    {
      password: password?.value,
      password1: password1?.value,
      password2: password2?.value,
    },
    (res: string) => {
      render(res);
    }
  );
});

// <div class="s">
//                 <h1>Ẩn lới nhắn </h1>
//                 <input type="text" placeholder="nhập mã số lới nhắn" id="idHiddenMess"><br>
//                 <input type="submit" id="sbHiddenMess">
//             </div>
var idHiddenMess =<HTMLInputElement> document.getElementById("idHiddenMess");
document.getElementById("sbHiddenMess")?.addEventListener("click", ()=>{
  xml("/mess/hiddenMess",{
    idMess:idHiddenMess.value
  },(res:string)=>{
    render(res)
  })
})

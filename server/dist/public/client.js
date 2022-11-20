"use strict";
var _a, _b;
function postData(url, params, cb) {
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
function xml(url, params, cb, method) {
    var req = new XMLHttpRequest();
    req.open(method ? method : "POST", url, true);
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
function render(params) {
    root.innerHTML = "";
    root === null || root === void 0 ? void 0 : root.append(params);
}
var listAddFriendRequest = document.getElementById("FriendsList");
listAddFriendRequest === null || listAddFriendRequest === void 0 ? void 0 : listAddFriendRequest.addEventListener("click", () => {
    xml("/friends/", {}, (data) => {
        render(data);
    });
});
var findNameFriends = document.getElementById("findNameFriends");
var submitFindNameFriends = document.getElementById("submitFindNameFriends");
submitFindNameFriends === null || submitFindNameFriends === void 0 ? void 0 : submitFindNameFriends.addEventListener("click", () => {
    var n = findNameFriends === null || findNameFriends === void 0 ? void 0 : findNameFriends.value;
    xml("/friends/search", { name: n }, (data) => {
        render(data);
    });
});
var idFriend = document.getElementById("idFriend");
var submitIdFriend = document.getElementById("submitIdFriend");
submitIdFriend === null || submitIdFriend === void 0 ? void 0 : submitIdFriend.addEventListener("click", () => {
    var id = idFriend === null || idFriend === void 0 ? void 0 : idFriend.value;
    xml("/friends/addFriendsRequset", { idFriend: id }, (data) => {
        render(data);
    });
});
var listAddFriendRequest = document.getElementById("listAddFriendRequest");
listAddFriendRequest === null || listAddFriendRequest === void 0 ? void 0 : listAddFriendRequest.addEventListener("click", () => {
    xml("/friends/listAddFriendRequest", {}, (data) => {
        render(data);
    });
});
var CacelAddFriendRequest = document.getElementById("CacelAddFriendRequest");
var SubmitCacelAddFriendRequest = document.getElementById("SubmitCacelAddFriendRequest");
SubmitCacelAddFriendRequest === null || SubmitCacelAddFriendRequest === void 0 ? void 0 : SubmitCacelAddFriendRequest.addEventListener("click", () => {
    var n = CacelAddFriendRequest === null || CacelAddFriendRequest === void 0 ? void 0 : CacelAddFriendRequest.value;
    xml("/friends/cacelAddFriendRequest", { idFriend: n }, (data) => {
        root === null || root === void 0 ? void 0 : root.append(data);
    });
});
var AcceptAddFriendRequest = document.getElementById("AcceptAddFriendRequest");
var SubmitAcceptAddFriendRequest = document.getElementById("SubmitAcceptAddFriendRequest");
SubmitAcceptAddFriendRequest === null || SubmitAcceptAddFriendRequest === void 0 ? void 0 : SubmitAcceptAddFriendRequest.addEventListener("click", () => {
    var n = AcceptAddFriendRequest === null || AcceptAddFriendRequest === void 0 ? void 0 : AcceptAddFriendRequest.value;
    xml("/friends/acceptAddFriendRequest", { idFriend: n }, (data) => {
        root === null || root === void 0 ? void 0 : root.append(data);
    });
});
var SubmitBoxChatList = document.getElementById("SubmitBoxChatList");
SubmitBoxChatList === null || SubmitBoxChatList === void 0 ? void 0 : SubmitBoxChatList.addEventListener("click", () => {
    xml("/box/", {}, (data) => {
        render(data);
    });
});
var cancelFriends = document.getElementById("cancelFriends");
var SubmitCancelFriends = document.getElementById("SubmitCancelFriends");
SubmitCancelFriends === null || SubmitCancelFriends === void 0 ? void 0 : SubmitCancelFriends.addEventListener("click", () => {
    var n = cancelFriends === null || cancelFriends === void 0 ? void 0 : cancelFriends.value;
    xml("/friends/cancelFriends", { idFriend: n }, (data) => {
        render(data);
    });
});
var HiddenBoxChat = document.getElementById("HiddenBoxChat");
var SubmitHiddenBoxChat = document.getElementById("SubmitHiddenBoxChat");
SubmitHiddenBoxChat === null || SubmitHiddenBoxChat === void 0 ? void 0 : SubmitHiddenBoxChat.addEventListener("click", () => {
    var n = HiddenBoxChat === null || HiddenBoxChat === void 0 ? void 0 : HiddenBoxChat.value;
    xml("/box/hiddenBoxChat", { idBox: n }, (data) => {
        render(data);
    });
});
var Chat = document.getElementById("Chat");
var SubmitChat = document.getElementById("SubmitChat");
SubmitChat === null || SubmitChat === void 0 ? void 0 : SubmitChat.addEventListener("click", () => {
    var n = Chat === null || Chat === void 0 ? void 0 : Chat.value;
    xml("/box/chat", { idFriend: n }, (data) => {
        render(data);
    });
});
var SubmitSentFriendRequest = document.getElementById("SubmitSentFriendRequest");
SubmitSentFriendRequest === null || SubmitSentFriendRequest === void 0 ? void 0 : SubmitSentFriendRequest.addEventListener("click", () => {
    xml("/friends/sentFriendRequest", {}, (data) => {
        render(data);
    });
});
var GetContentInBox = document.getElementById("GetContentInBox");
var SubMitGetContentInBox = document.getElementById("SubMitGetContentInBox");
SubMitGetContentInBox === null || SubMitGetContentInBox === void 0 ? void 0 : SubMitGetContentInBox.addEventListener("click", () => {
    var n = GetContentInBox === null || GetContentInBox === void 0 ? void 0 : GetContentInBox.value;
    xml("/mess/getAllContent", { idBox: n }, (data) => {
        render(data);
    });
});
var password = document.getElementById("password");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
(_a = document.getElementById("ChangePassword")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    xml("/account/ChangePassword", {
        password: password === null || password === void 0 ? void 0 : password.value,
        password1: password1 === null || password1 === void 0 ? void 0 : password1.value,
        password2: password2 === null || password2 === void 0 ? void 0 : password2.value,
    }, (res) => {
        render(res);
    });
});
// <div class="s">
//                 <h1>Ẩn lới nhắn </h1>
//                 <input type="text" placeholder="nhập mã số lới nhắn" id="idHiddenMess"><br>
//                 <input type="submit" id="sbHiddenMess">
//             </div>
var idHiddenMess = document.getElementById("idHiddenMess");
(_b = document.getElementById("sbHiddenMess")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    xml("/mess/hiddenMess", {
        idMess: idHiddenMess.value
    }, (res) => {
        render(res);
    });
});
//# sourceMappingURL=client.js.map
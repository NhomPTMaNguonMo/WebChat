var sex;
(function (sex) {
    sex[sex["nu"] = 0] = "nu";
    sex[sex["nam"] = 1] = "nam";
})(sex || (sex = {}));
export default class User {
    constructor() {
        this.id = "";
        this.accout = "";
        this.nameUser = "";
        this.status = 0;
        this.avatar = "anh";
        this.birthday = "";
        this.sex = "";
    }
    setAll(d) {
        this.id = d.id;
        this.accout = d.account;
        this.nameUser = d.nameUser;
        this.status = d.status;
        this.avatar = d.avatar ? d.avatar : "anh";
        this.birthday = d.birthday;
        this.sex = d.sex;
    }
}

import { formatDate } from "../../confi.js";
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
        for (const key in this) {
            this[key] = d[key];
        }
    }
    json() {
        var s = {};
        for (const key in this) {
            const element = this[key];
            if (element) {
                s[key] = element;
            }
        }
        if (s["birthday"]) {
            s["birthday"] = formatDate(s["birthday"]);
        }
        return s;
    }
}

var status;
(function (status) {
    status[status["offline"] = 0] = "offline";
    status[status["online"] = 1] = "online";
})(status || (status = {}));
export default class Validateuser {
    constructor() {
        this.id = "";
        this.cookie = "";
        this.socket = "";
        this.status = 1;
    }
    setAll(p) {
        for (const key in this) {
            this[key] = p[key];
        }
    }
    Json() {
        var s = {};
        for (const key in this) {
            const element = this[key];
            if (element) {
                s[key] = element;
            }
        }
        return s;
    }
}

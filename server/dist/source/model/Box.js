export default class Box {
    constructor() {
        this.idBox = "";
        this.idUser = "";
        this.nameUser = "";
        this.avatar = "";
    }
    setAll(p) {
        for (const key in this) {
            this[key] = p[key];
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
        return s;
    }
}

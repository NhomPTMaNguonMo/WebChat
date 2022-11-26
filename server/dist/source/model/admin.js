import entity from "./interface/entity.js";
export default class Admin extends entity {
    constructor() {
        super();
        this.account = "",
            this.password = "";
    }
    json() {
        return super.json();
    }
    setAll(p) {
        super.setAll(p);
    }
}
//# sourceMappingURL=admin.js.map
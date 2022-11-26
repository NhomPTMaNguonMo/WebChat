import entity from "./interface/entity.js";

export default class HiddenMess extends entity{
    constructor(){
        super();
    }
    setAll(p: any): void {
        super.setAll(p)
    }
    json() {
        return super.json()
    }
}
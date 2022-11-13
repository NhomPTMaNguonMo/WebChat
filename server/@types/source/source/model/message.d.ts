export declare enum typeMess {
    content = "0",
    image = "1"
}
export default class message {
    idBox: string;
    idUser: string;
    content: string;
    type: typeMess;
    idMess: string;
    ngay: string;
    constructor();
    setAll(d: any): void;
    json(): any;
}

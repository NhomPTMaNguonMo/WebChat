export default class User {
    id: string;
    accout: string;
    nameUser: string;
    status: number;
    avatar: string;
    sex: string;
    birthday: string | undefined;
    constructor();
    setAll(d: any): void;
    json(): any;
}

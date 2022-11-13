import { Request } from "express";
declare const __dirname: string;
export default __dirname;
export interface sign {
    account: string;
    password: string;
}
export declare const confi: {
    host: string;
    user: string;
    password: string;
    database: string;
};
export interface result {
    result: any;
    err: boolean;
}
export declare function hash(params: string, length?: number): string;
export declare function validateEmail(email: string): boolean;
export declare function validatedate(day: string, month: string, year: string): boolean;
export interface postRegister {
    day: string;
    month: string;
    year: string;
    account: string;
    password: string;
    nameUser: string;
    sex: string;
}
export declare function UnknownString(p: string): boolean;
export declare function UnknownObject(p: any): boolean;
export interface sercurity {
    id: string;
    ab: string;
    sercurity: string;
    time: number;
}
export interface content {
    idBox: string;
    content: string;
}
export declare function formatDate(d: string): string;
export declare function validate(req: Request): boolean;

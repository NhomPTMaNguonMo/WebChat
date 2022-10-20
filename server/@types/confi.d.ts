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
export declare function hash(params: string): string;
export declare function google(): {
    web: {
        client_id: string;
        project_id: string;
        auth_uri: string;
        token_uri: string;
        auth_provider_x509_cert_url: string;
        client_secret: string;
    };
};
export declare function validateEmail(email: string): RegExpMatchArray | null;
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
    sercurity: string;
}
export interface content {
    idBox: string;
    content: string;
}
export declare function formatDate(d: string): string;

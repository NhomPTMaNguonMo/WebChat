export default class GamiAPI {
    private time;
    private client_id;
    private client_secret;
    private refresh_token;
    private AccessToken;
    constructor();
    loadToken(): Promise<unknown>;
    setAll(p: any): void;
    updateAccessToken(): Promise<string | true | null | undefined>;
    loadAll(): Promise<boolean>;
    contentGmail(recerver: string, content: string, Subject?: string): Promise<boolean>;
    sendMail(s: string): Promise<boolean>;
    getAccessToken(): string | null | undefined;
}

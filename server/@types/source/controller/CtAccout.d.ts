import { result } from "../../confi.js";
import Account from "../model/Account.js";
export default class ctAccout {
    rt: result;
    account: Account | undefined;
    listAccount: Account[];
    constructor();
    GetAccout(s: Account): Promise<Account | undefined>;
    InsertAccount(s: Account): Promise<result>;
    private Refesh;
    UpdatePassword(account: string, password: string): Promise<boolean>;
    setlistAccount(s: any): void;
    GetAccoutById(id: string): Promise<Account | undefined>;
}

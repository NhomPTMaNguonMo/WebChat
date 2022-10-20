declare class CTListSocket {
    list: any;
    constructor();
    addSocket(id: string, socketId: string): Promise<void>;
    getSocketIdStringFirst(id: string): any;
}
declare const _default: CTListSocket;
export default _default;

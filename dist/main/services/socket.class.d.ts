export interface PathChange {
    path: string;
}
export declare class Socket {
    private socket;
    constructor(options: SocketIO.Socket | undefined);
    emit(event: string, ...args: any[]): boolean;
}

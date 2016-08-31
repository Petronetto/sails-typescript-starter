/* tslint:disable:max-line-length */
import {
    //
} from "../../main/utility/importer";
/* tslint:enable:max-line-length */

export class Socket {

    /**
     * ------------------------------------------------------------------------
     *                                Properties
     * ------------------------------------------------------------------------
     */
    private socket: SocketIO.Socket | undefined;

    constructor(options: SocketIO.Socket | undefined) {
        this.socket = options;
    }

    /**
     * ------------------------------------------------------------------------
     *                                 Methods
     * ------------------------------------------------------------------------
     */
    public emit(event: string, ...args: any[]): boolean {
        if (!this.socket) {
            return false;
        }

        this.socket.emit(event, ...args);
        return true;
    }

}

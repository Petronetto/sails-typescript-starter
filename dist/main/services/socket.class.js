"use strict";
class Socket {
    constructor(options) {
        this.socket = options;
    }
    emit(event, ...args) {
        if (!this.socket) {
            return false;
        }
        this.socket.emit(event, ...args);
        return true;
    }
}
exports.Socket = Socket;
//# sourceMappingURL=socket.class.js.map
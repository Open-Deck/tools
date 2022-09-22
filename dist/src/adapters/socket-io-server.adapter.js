"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIOServerAdapter = void 0;
const socket_io_1 = require("socket.io");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
class SocketIOServerAdapter {
    application;
    httpServer;
    port;
    server;
    constructor(listenPort) {
        this.port = listenPort;
        this.application = (0, express_1.default)();
        this.httpServer = http_1.default.createServer(this.application);
    }
    create(socketHandler, configs) {
        this.server = new socket_io_1.Server(this.httpServer, configs);
        this.server.on('connection', socketHandler);
        this.httpServer.listen(this.port, this.onListenServer(this.port));
    }
    onListenServer(port) {
        console.log(`Running socket server at ${port}`);
    }
    disponse() {
        this.server.close();
    }
}
exports.SocketIOServerAdapter = SocketIOServerAdapter;
//# sourceMappingURL=socket-io-server.adapter.js.map
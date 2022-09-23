import { ServerOptions, Socket } from 'socket.io';
declare type TSocketHandler = (socket: Socket) => void;
export declare class SocketIOServerAdapter {
    private readonly application;
    private readonly httpServer;
    private readonly port;
    private server;
    constructor(listenPort: number);
    create(socketHandler: TSocketHandler, configs: Partial<ServerOptions>): void;
    private onListenServer;
    disponse(): void;
}
export {};

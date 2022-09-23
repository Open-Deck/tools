import { Server, ServerOptions, Socket } from 'socket.io';
import express, { Express } from 'express';
import http from 'http';

type TSocketHandler = (socket: Socket) => void;

export class SocketIOServerAdapter {
  private readonly application: Express;
  private readonly httpServer: any;
  private readonly port: number;
  private server: Server;

  constructor(listenPort: number) {
    this.port = listenPort;
    this.application = express();
    this.httpServer = http.createServer(this.application);
  }

  create(socketHandler: TSocketHandler, configs: Partial<ServerOptions>) {
    this.server = new Server(this.httpServer, configs);

    this.server.on('connection', socketHandler);

    this.httpServer.listen(this.port, this.onListenServer(this.port));
  }

  private onListenServer(port: number) {
    console.log(`Running socket server at ${port}`);
  }

  disponse(): void {
    this.server.close();
  }
}

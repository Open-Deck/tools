import { Socket, createConnection } from 'net';
import { ICreateSocketConnection } from '../domain/create-socket-connection.interface';
import { IBufferToStringDecoder } from '../domain/buffer-to-string-decoder.interface';

export class NetCreateSocketConnectionAdapter implements ICreateSocketConnection<Socket> {
  private connection: Socket | null = null;

  constructor(private readonly stringDecoderAdapter: IBufferToStringDecoder) {}

  create(path: string) {
    this.connection = createConnection(path);
    return this.connection;
  }

  disponse(): void {
    if (!this.connection || this.connection?.closed) {
      console.warn('DONT EXIST CONNECTION TO DISPONSE.');
      return;
    }
    this.connection.destroy();
  }

  writeSync(command: string, handleError: (error: Error) => void): boolean {
    return this.connection.write(command, (error) => {
      if (error) {
        handleError(error);
      }
    });
  }

  writeAsync(command: string): Promise<any> {
    return new Promise((resolve, reject) => {
      function listener(data: Buffer) {
        const stringData = this.stringDecoderAdapter.execute(data);
        resolve(stringData);
        this.off('data', listener);
      }

      this.on('data', (data: any) => listener.call(this, data));
      this.connection.write(command, (error) => {
        if (error) {
          reject(error);
        }
      });
    });
  }

  on(eventName: string, listener: any): Socket {
    return this.connection.on(eventName, listener);
  }

  off(eventName: string, listener: any): Socket {
    return this.connection.off(eventName, listener);
  }

  get getConnection(): Socket {
    return this.connection;
  }
}

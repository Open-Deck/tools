/// <reference types="node" />
import { Socket } from 'net';
import { ICreateSocketConnection } from '../domain/create-socket-connection.interface';
import { IBufferToStringDecoder } from '../domain/buffer-to-string-decoder.interface';
export declare class NetCreateSocketConnectionAdapter implements ICreateSocketConnection<Socket> {
    private readonly stringDecoderAdapter;
    private connection;
    constructor(stringDecoderAdapter: IBufferToStringDecoder);
    create(path: string): Socket;
    disponse(): void;
    writeSync(command: string, handleError: (error: Error) => void): boolean;
    writeAsync(command: string): Promise<any>;
    on(eventName: string, listener: any): Socket;
    off(eventName: string, listener: any): Socket;
    get getConnection(): Socket;
}

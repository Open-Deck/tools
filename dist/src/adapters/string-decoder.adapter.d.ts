/// <reference types="node" />
import { IBufferToStringDecoder } from '../domain/buffer-to-string-decoder.interface';
export declare class StringDecoderAdapter implements IBufferToStringDecoder {
    private readonly decoder;
    constructor(encoding?: BufferEncoding);
    execute(data: Buffer): string;
}

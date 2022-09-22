import { IBufferToStringDecoder } from '../domain/buffer-to-string-decoder.interface';
import { StringDecoder } from 'string_decoder';

export class StringDecoderAdapter implements IBufferToStringDecoder {
  private readonly decoder: StringDecoder;

  constructor(encoding: BufferEncoding = 'utf-8') {
    this.decoder = new StringDecoder(encoding);
  }

  execute(data: Buffer): string {
    return this.decoder.write(data);
  }
}

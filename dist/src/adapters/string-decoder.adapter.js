"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringDecoderAdapter = void 0;
const string_decoder_1 = require("string_decoder");
class StringDecoderAdapter {
    decoder;
    constructor(encoding = 'utf-8') {
        this.decoder = new string_decoder_1.StringDecoder(encoding);
    }
    execute(data) {
        return this.decoder.write(data);
    }
}
exports.StringDecoderAdapter = StringDecoderAdapter;
//# sourceMappingURL=string-decoder.adapter.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetCreateSocketConnectionAdapter = void 0;
const net_1 = require("net");
class NetCreateSocketConnectionAdapter {
    stringDecoderAdapter;
    connection = null;
    constructor(stringDecoderAdapter) {
        this.stringDecoderAdapter = stringDecoderAdapter;
    }
    create(path) {
        this.connection = (0, net_1.createConnection)(path);
        return this.connection;
    }
    disponse() {
        if (!this.connection || this.connection?.closed) {
            console.warn('DONT EXIST CONNECTION TO DISPONSE.');
            return;
        }
        this.connection.destroy();
    }
    writeSync(command, handleError) {
        return this.connection.write(command, (error) => {
            if (error) {
                handleError(error);
            }
        });
    }
    writeAsync(command) {
        return new Promise((resolve, reject) => {
            function listener(data) {
                const stringData = this.stringDecoderAdapter.execute(data);
                resolve(stringData);
                this.off('data', listener);
            }
            this.on('data', (data) => listener.call(this, data));
            this.connection.write(command, (error) => {
                if (error) {
                    reject(error);
                }
            });
        });
    }
    on(eventName, listener) {
        return this.connection.on(eventName, listener);
    }
    off(eventName, listener) {
        return this.connection.off(eventName, listener);
    }
    get getConnection() {
        return this.connection;
    }
}
exports.NetCreateSocketConnectionAdapter = NetCreateSocketConnectionAdapter;
//# sourceMappingURL=net-create-socket-connection.adapter.js.map
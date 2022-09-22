"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginUUID = void 0;
const tokens_1 = require("./tokens");
const PluginUUID = (uuid) => {
    return (target) => {
        Reflect.defineMetadata(tokens_1.PLUGIN_WATERMARK, true, target);
        Reflect.defineMetadata(tokens_1.PLUGIN_UUID, uuid, target);
    };
};
exports.PluginUUID = PluginUUID;
//# sourceMappingURL=plugin-uuid.decorator.js.map
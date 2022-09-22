"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionUUID = void 0;
const tokens_1 = require("./tokens");
const ActionUUID = (uuid) => {
    return (target, propertyKey, descriptor) => {
        Reflect.defineMetadata(tokens_1.ACTION_WATERMARK, true, descriptor.value);
        Reflect.defineMetadata(tokens_1.ACTION_UUID, uuid, descriptor.value);
    };
};
exports.ActionUUID = ActionUUID;
//# sourceMappingURL=action-uuid.decorator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionsFromClass = exports.getPluginUUID = exports.getActionUUID = exports.isAction = exports.isPlugin = void 0;
require("reflect-metadata");
const decorators_1 = require("../decorators");
const isPlugin = (target) => {
    const hasWaterMark = Reflect.getMetadata(decorators_1.tokens.PLUGIN_WATERMARK, target);
    return !!hasWaterMark;
};
exports.isPlugin = isPlugin;
const isAction = (target) => {
    const hasWaterMark = Reflect.getMetadata(decorators_1.tokens.ACTION_WATERMARK, target);
    return !!hasWaterMark;
};
exports.isAction = isAction;
const getActionUUID = (target) => {
    const uuid = Reflect.getMetadata(decorators_1.tokens.ACTION_UUID, target);
    return !uuid ? null : uuid;
};
exports.getActionUUID = getActionUUID;
const getPluginUUID = (target) => {
    const uuid = Reflect.getMetadata(decorators_1.tokens.PLUGIN_UUID, target);
    return !uuid ? null : uuid;
};
exports.getPluginUUID = getPluginUUID;
const getFunctionsFromClass = (classElement) => {
    const functions = Reflect.ownKeys(classElement.prototype);
    return functions.map((fn) => fn.toString()).filter((fn) => !['constructor', 'init'].includes(fn));
};
exports.getFunctionsFromClass = getFunctionsFromClass;
//# sourceMappingURL=reflect-helper.js.map
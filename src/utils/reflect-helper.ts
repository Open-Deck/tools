import 'reflect-metadata';
import { tokens } from '../decorators';

const isPlugin = (target: any) => {
  const hasWaterMark = Reflect.getMetadata(tokens.PLUGIN_WATERMARK, target);
  return !!hasWaterMark;
};

const isAction = (target: any) => {
  const hasWaterMark = Reflect.getMetadata(tokens.ACTION_WATERMARK, target);
  return !!hasWaterMark;
};

const getActionUUID = (target: any): string | null => {
  const uuid = Reflect.getMetadata(tokens.ACTION_UUID, target);

  return !uuid ? null : uuid;
};

const getPluginUUID = (target: any): string | null => {
  const uuid = Reflect.getMetadata(tokens.PLUGIN_UUID, target);

  return !uuid ? null : uuid;
};

const getFunctionsFromClass = (classElement: any): string[] => {
  const functions = Reflect.ownKeys(classElement.prototype);
  return functions.map((fn) => fn.toString()).filter((fn) => !['constructor', 'init'].includes(fn));
};

export { isPlugin, isAction, getActionUUID, getPluginUUID, getFunctionsFromClass };

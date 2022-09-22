import { PLUGIN_UUID, PLUGIN_WATERMARK } from './tokens';

const PluginUUID = (uuid: string): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(PLUGIN_WATERMARK, true, target);
    Reflect.defineMetadata(PLUGIN_UUID, uuid, target);
  };
};

export { PluginUUID };

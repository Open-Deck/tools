import { ACTION_UUID, ACTION_WATERMARK } from './tokens';

const ActionUUID = (uuid: string): MethodDecorator => {
  return (target, propertyKey, descriptor) => {
    Reflect.defineMetadata(ACTION_WATERMARK, true, descriptor.value);
    Reflect.defineMetadata(ACTION_UUID, uuid, descriptor.value);
  };
};

export { ActionUUID };

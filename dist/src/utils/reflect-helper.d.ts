import 'reflect-metadata';
declare const isPlugin: (target: any) => boolean;
declare const isAction: (target: any) => boolean;
declare const getActionUUID: (target: any) => string | null;
declare const getPluginUUID: (target: any) => string | null;
declare const getFunctionsFromClass: (classElement: any) => string[];
export { isPlugin, isAction, getActionUUID, getPluginUUID, getFunctionsFromClass };

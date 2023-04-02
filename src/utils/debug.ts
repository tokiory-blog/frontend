import * as process from "process";

const isDevelopment = () => process.env['NODE_ENV'] === '"development"';
export function debugDo(callback: () => void): void {
  if (isDevelopment()) {
    callback();
  }
}

export function debugInfo(info: DebugInfo): void {
  if (!isDevelopment()) {
    return;
  }
  
  console.group(info.group.title);
  for (const statement in info.info) {
    console.log(statement + ':', info.info[statement]);
  }
  console.groupEnd();
}

interface DebugInfo {
  group: {
    title: string;
  }
  info: Object;
}
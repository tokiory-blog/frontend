export function debugDo(callback: () => void): void {
  callback();
}

export function debugInfo(info: DebugInfo): void {
  
  console.group(info.group.title);
  for (const statement in info.info) {
    console.log(statement + ":", info.info[statement as keyof typeof info.info]);
  }
  console.groupEnd();
}

interface DebugInfo {
  group: {
    title: string;
  }
  info: object;
}
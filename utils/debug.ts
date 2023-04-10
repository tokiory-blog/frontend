export function debugDo(callback: () => void): void {
  if (process.dev) {
    callback();
  }
}
export function createKey() {
  return "KEY-" + Math.random().toString(36).substring(2, 10).toUpperCase();
}

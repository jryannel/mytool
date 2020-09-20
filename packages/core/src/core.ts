export function core(name: string): string {
  console.log(`core: ${name} visited`);
  return `${name} touched the core`;
}

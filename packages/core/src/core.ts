console.log("running the core");

export class Core {
  visit(name: string): string {
    console.log(`core: ${name} visited`);
    return `${name} touched the core`;
  }
}

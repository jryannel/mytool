import { Core } from "@mytool/core";

console.log("running the cli");

export class CommandLine {
  run() {
    console.log("cli.run");
    const core = new Core();
  }
}

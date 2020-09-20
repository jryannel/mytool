import { Core } from "@mytool/core";
console.log("running the server");

export class Server {
  run() {
    console.log("server.run");
    const core = new Core();
    core.visit("John");
  }
}

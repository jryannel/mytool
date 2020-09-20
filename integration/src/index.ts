import { CommandLine } from "@mytool/cli";
import { Server } from "@mytool/Server";
import { Core } from "@mytool/core";

const cli = new CommandLine();
cli.run();

const server = new Server();
server.run();

const core = new Core();
core.visit("foo");

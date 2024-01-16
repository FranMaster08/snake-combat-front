import { Server } from "./server";
export interface ServerFactory {
  createServer<Server>(): Server;
}

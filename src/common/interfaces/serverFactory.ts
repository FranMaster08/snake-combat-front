import { TypeServer } from "../enum/TypeServer";
import { Server } from "./server";
export interface ServerFactory {
  createServer(name: TypeServer): Server;
}

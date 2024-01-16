import { TypeServer } from "../../common/enum/TypeServer";
import { Server } from "../../common/interfaces/server";
import { ServerFactory } from "../../common/interfaces/serverFactory";
import { ServerExpress } from "../server/server-express";
export class ServerFactoryImp implements ServerFactory {
  createServer(name: TypeServer): Server {
    switch (name) {
      case TypeServer.Express:
        return new ServerExpress(3000);

      default:
        return new ServerExpress(3000);
    }
  }
}

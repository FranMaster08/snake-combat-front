import { ServerFactoryImp } from "./adapters/factories/serverFactories";
import { TypeServer } from "./common/enum/TypeServer";
const server: ServerFactoryImp = new ServerFactoryImp();

server.createServer(TypeServer.Express)
      .setMiddleware()
      .listen(3000);

import { Server } from "../../common/interfaces/server";
import express, { Express, Application } from "express";
import { join } from "path";
export class ServerExpress implements Server {
  private app: Application;
  constructor(private port: number) {
    this.app = express();
    return this;
  }

  setMiddleware(): Server {
    this.app.use(express.json());
    this.app.use(express.static(join(__dirname , "../../ui")));
    return this;
  }
  listen(port: number): void {
    this.app.listen(port);
    console.log("listening on port " + port);
  }
  setRutes(): Server {
    throw new Error("Method not implemented.");
  }
}

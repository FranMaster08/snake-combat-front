import { Server } from "../../common/interfaces/server";
import express, { Express, Application } from "express";
import { join } from "path";
export class ServerExpress implements Server {
  private app: Application;
  constructor(private port: number) {
    this.app = express();
  }

  setMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.static(join("../../ui/index.html")));
  }
  listen(port: number): void {
    this.app.listen(port);
    console.log("listening on port " + port);
  }
  setRutes(): void {
    throw new Error("Method not implemented.");
  }
}

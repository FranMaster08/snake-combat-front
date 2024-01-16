export interface Server {
  setMiddleware(): Server;
  listen(port: number):  void;
  setRutes(): Server;
}

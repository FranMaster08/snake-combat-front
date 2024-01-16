export interface Server {
  setMiddleware(): void;
  listen(port: number):  void;
  setRutes(): void;
}

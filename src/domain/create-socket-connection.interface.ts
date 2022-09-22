export interface ICreateSocketConnection<TServer = any, TWriteResponse = boolean> {
  create(path: string): TServer;
  disponse(): void;
  writeSync(command: string, handleError: (error: Error) => void): TWriteResponse;
  writeAsync(command: string): Promise<any>;
  on(eventName: string, listener: any): any;
  off(eventName: string, listener: any): any;
  get getConnection(): TServer | null;
}

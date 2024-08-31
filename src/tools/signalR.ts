import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

class SignalRService {
  public connection: HubConnection | null = null;

  public createConnection(userId: string) {
    this.connection = new HubConnectionBuilder()
      .withUrl(`${process.env.NEXT_PUBLIC_SERVER}/hub?userId=${userId}`)
      .withAutomaticReconnect()
      .build();
  }

  public startConnection() {
    if (this.connection) {
      return this.connection.start();
    }
  }

  public stopConnection() {
    if (this.connection) {
      return this.connection.stop();
    }
  }

  public on(methodName: string, newMethod: (...args: any[]) => void) {
    if (this.connection) {
      this.connection.on(methodName, newMethod);
    }
  }

  public send(methodName: string, ...args: any[]) {
    if (this.connection) {
      return this.connection.invoke(methodName, ...args);
    }
  }
}

export const signalRService = new SignalRService();

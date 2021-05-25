import { Server } from '@overnightjs/core';
import express, { Application } from 'express';
import { Server as SocketServer } from 'socket.io';
import http from 'http';
import cors from 'cors';

export class SetupServer extends Server {
  private io: SocketServer;
  private close: http.Server;
  constructor(private port = 3333) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }
  private setupControllers(): void {}

  public getIo(): SocketServer {
    return this.io;
  }
  public getApp(): Application {
    return this.app;
  }
  public async stop(): Promise<void> {
    this.close.close();
  }
  public start(): void {
    this.io = new SocketServer(
      this.app.listen(this.port, () =>
        console.log('Server and socket listen on port: ', this.port)
      ),{
        cors:{
          origin:"http://localhost:3000"
        }
      }
    );
  }
}

import './util/module-alias';
import { SetupServer } from '@/server';
import { Application as App } from 'express';
import { Server as SocketServer } from 'socket.io';
import Chat from '@/services/chat';

(async () => {
  const server = new SetupServer();
  server.init();
  server.start();
  new Chat(server.getIo());
})();

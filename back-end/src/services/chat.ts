import { Server, Socket } from 'socket.io';

interface Isocket extends Socket {
  username: string;
}
interface User {
  id: number;
  username: string;
}
interface Room {
  id: string;
  title: string;
  // interests?: InterestData | InterestData[];
}
const users = new Map<number, User>();

class Chat {
  private io: Server;
  private rooms: Map<string, Room>;
  constructor(io: Server) {
    this.io = io;
    this.rooms = new Map();
    this.init();
  }
  private async init() {
    console.info('Init chat service');

    this.io.on('connection', (socket: Isocket) => {
      console.info('A user connect to the socket!');

      socket.broadcast.emit('user connected', {
        userID: socket.id,
        username: socket.username,
      });

      socket.on('join room', (room) => {
        console.info(
          `user ${socket.id}, ${socket.username} joined to room ${room.id} `
        );
        socket.join(room.id);
        socket
          .to(room.id)
          .emit('user joined', { id: socket.id, username: socket.username });
        if (!this.rooms.has(room.id)) {
          this.rooms.set(room.id, room);
          // broadcast for all users, including the socket itself
          this.io.emit('rooms', Array.from(this.rooms.values()));
          console.log('all roms', this.io.of('/').adapter.rooms);
        }
      });

      socket.on('room message', ({ content, from, room }) => {
        console.log('new room message', { content, from, room });
        socket.to(room).emit('private message', { content, from });
      });

      socket.on('get rooms', () => {
        this.emitRooms(socket);
      });
      this.io.of('/').adapter.on('delete-room', (room) => {
        if (room != socket.id && this.rooms.has(room)) {
          this.rooms.delete(room);
          this.io.emit('rooms', Array.from(this.rooms.values()));
        }
      });
    });

    this.io.use((socket: Isocket, next) => {
      const username = socket.handshake.auth.username;
      if (!username) {
        console.log('erroooooooooor');
        return next(new Error('invalid username'));
      }
      socket.username = username;
      next();
    });
  }
  private emitRooms(socket): void {
    socket.emit('rooms', Array.from(this.rooms.values()));
  }
}

export default Chat;

import { InterestData } from '@/store/ducks/interest/types'
import socket from '@/util/socket'
import { Socket } from 'socket.io-client'

interface Props {
  username: string
}
interface Room {
  id: string
  title: string
  interests?: InterestData | InterestData[]
}
class Chat {
  private username: string
  private socket: Socket
  constructor({ username }: Props) {
    this.username = username
    this.socket = socket
    this.socket.auth = { username }
    if (this.username) {
      this.init()
    }
  }

  private init(): void {
    this.socket.connect()
    // this.socket.onAny((e, ...args) => {
    //   console.log(e, args)
    // })
  }

  public joinRoom(room: Partial<Room>): void {
    this.socket.emit('join room', room)
  }

  public roomMessage(cb): void {
    this.socket.on('room message', ({ content, from }) => {
      console.log(`content:${content} from ${from}`)

      cb(content, from)
    })
  }

  public sendMessageToRoom({ content, room }): void {
    console.log('call here')
    this.socket.emit('room message', {
      content,
      from: this.username,
      room: room
    })
  }

  public getRooms(cb): void {
    this.socket.emit('get rooms')

    this.socket.on('rooms', (rooms: Room | Room[]) => {
      console.log(rooms)
      cb(rooms)
    })
  }
}

export default Chat

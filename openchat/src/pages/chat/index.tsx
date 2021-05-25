import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import ChatMessages from '@/components/chat/chatMessages'
import SendMessages from '@/components/chat/sendMessages'
import Rooms from '@/components/chat/rooms'
import usersList from '@/components/chat/usersList'

import Chat from '@/services/chat'
import { ApplicationState } from '@/store'

function index(props): JSX.Element {
  const [chat] = useState(new Chat({ username: props.userState.user.name }))
  const [room] = useState({ id: uuidv4(), title: 'oi' })
  useEffect(() => {
    console.log(props)
    chat.joinRoom(room)
  }, [])
  return (
    <div>
      {chat && (
        <>
          <Rooms chat={chat} />
          <ChatMessages chat={chat} />
          <SendMessages chat={chat} room={room} />
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  ...state
})

export default connect(mapStateToProps)(index)

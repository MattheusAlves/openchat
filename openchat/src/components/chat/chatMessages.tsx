import React, { useState } from 'react'

export default function chatMessages({ chat }): JSX.Element {
  const [messages, setMessages] = useState([])
  chat.roomMessage(({ content, from }) => {
    console.log(content, from)
  })
  return <div></div>
}

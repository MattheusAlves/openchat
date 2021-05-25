import React, { useState } from 'react'

export default function sendMessage({ chat, room }): JSX.Element {
  const [message, setMessage] = useState<string>('')
  return (
    <div>
      <input
        type="text"
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <button
        onClick={() => chat.sendMessageToRoom({ content: message, room: room })}
      >
        Enviar
      </button>
    </div>
  )
}

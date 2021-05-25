import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/room.module.scss'

export default function rooms({ chat }): JSX.Element {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    chat.getRooms(rooms => {
      setRooms(rooms)
    })
  }, [])
  return (
    <div className={styles.container}>
      {rooms &&
        rooms.map(room => (
          <div className={styles.room} key={room.id}>
            <span>{room.title}</span>
          </div>
        ))}
    </div>
  )
}

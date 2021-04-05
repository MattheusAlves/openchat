import React from 'react'

export interface Interest {
  title: string
  id: number
}
interface Props {
  interests: Interest[]
}
export default function Interests(props: Props): JSX.Element {
  return (
    <div>
      {props.interests.map(interest => (
        <span key={interest.id}>{interest.title}</span>
      ))}
    </div>
  )
}

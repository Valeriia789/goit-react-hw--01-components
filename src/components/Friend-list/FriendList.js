import React from 'react'
import { FriendCard } from './FriendCard'
import {FriendListContainer } from './FriendListContainer.styles'

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer >
      {friends.map(friend => (
        <FriendCard
          key={friend.id}
          name={friend.name}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
        />
      ))}
    </FriendListContainer >
  )
}

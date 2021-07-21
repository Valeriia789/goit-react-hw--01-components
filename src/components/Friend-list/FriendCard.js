import React from 'react'
import { FriendListItem } from './FriendListItem.styles'
import { FcNightPortrait, FcPortraitMode } from "react-icons/fc";

export const FriendCard = ({ avatar, name, isOnline }) => {
  const Icon = isOnline ? FcPortraitMode : FcNightPortrait
  return (
  <FriendListItem>
    <Icon size="25px"/>
    <img src={avatar} alt={name} width="148"></img>
    <h3>{name}</h3>
  </FriendListItem>)
}

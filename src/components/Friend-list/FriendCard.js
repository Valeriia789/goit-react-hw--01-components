import React from 'react'
import { FriendListItem } from './FriendListItem.styles'
import { FcNightPortrait, FcPortraitMode } from 'react-icons/fc'
import PropTypes from 'prop-types'

export const FriendCard = ({ avatar, name, isOnline }) => {
  const Icon = isOnline ? FcPortraitMode : FcNightPortrait
  return (
    <FriendListItem>
      <Icon size='25px' />
      <img src={avatar} alt={name} width='148'></img>
      <h3>{name}</h3>
    </FriendListItem>
  )
}

FriendCard.defaultProps = {
  avatar:
    'https://icons-for-free.com/iconfiles/png/512/avatar+man+people+person+profile+user+icon-1320195822522856427.png'
}

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}

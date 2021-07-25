import React from 'react'
import PropTypes from 'prop-types'
import { ProfileContainer, ProfileInfo, StatsList, StatsListItem} from './Profile.styles'

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileInfo>
        <img src={avatar} alt={name} width='148px' />
        <p>
          <b>{name}</b>
        </p>
        <p>{tag}</p>
        <p>{location}</p>
      </ProfileInfo>

      <StatsList>
        <StatsListItem>
          <span>
            <b>Followers</b>
          </span>
          <span>{stats.followers}</span>
        </StatsListItem>
        <StatsListItem>
          <span>
            <b>Views</b>
          </span>
          <span>{stats.views}</span>
        </StatsListItem>
        <StatsListItem>
          <span>
            <b>Likes</b>
          </span>
          <span>{stats.likes}</span>
        </StatsListItem>
      </StatsList>
    </ProfileContainer>
  )
}

Profile.defaultProps = {
  avatar:
    'https://icons-for-free.com/iconfiles/png/512/avatar+man+people+person+profile+user+icon-1320195822522856427.png'
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
}
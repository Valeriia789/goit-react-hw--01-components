import friends from './components/Friend-list/friends.json'
import { FriendList } from './components/Friend-list/FriendList'

import user from './components/Social-profile/user.json'
import { Profile } from './components/Social-profile/Profile'

function App () {
  return (
    <>
      <FriendList friends={friends} />

      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  )
}

export default App

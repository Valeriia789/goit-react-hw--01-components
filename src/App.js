import friends from './components/Friend-list/friends.json'
import { FriendList } from './components/Friend-list/FriendList'

import user from './components/Social-profile/user.json'
import { Profile } from './components/Social-profile/Profile'

import statisticalData from './components/Statistics/statistical-data.json'
import {Statistics} from './components/Statistics/Statistics'

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

      <Statistics title="Upload stats" stats={statisticalData}/>
    </>
  )
}

export default App

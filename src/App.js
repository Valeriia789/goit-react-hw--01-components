import friends from './components/Friend-list/friends.json'
import { FriendList } from './components/Friend-list/FriendList'

function App () {
  return (
    <>
      <FriendList friends={friends} />
    </>
  )
}

export default App

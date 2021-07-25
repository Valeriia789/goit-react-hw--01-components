import user from './components/Social-profile/user.json'
import { Profile } from './components/Social-profile/Profile'

import statisticalData from './components/Statistics/statistical-data.json'
import { Statistics } from './components/Statistics/Statistics'

import friends from './components/Friend-list/friends.json'
import { FriendList } from './components/Friend-list/FriendList'

import transactions from './components/Transaction-history/transactions.json'
import { TransactionHistory } from './components/Transaction-history/TransactionHistory'

function App () {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title='Upload stats' stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App

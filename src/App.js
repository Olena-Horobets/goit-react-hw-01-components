import user from 'components/Profile/user.json';
import statisticalData from 'components/Statistics/statistical-data.json';
import friends from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';

import Section from 'components/Section';
import Profile from 'components/Profile/Profile';
import StatisticsList from 'components/Statistics/StatisticsList';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div>
      <Section title='My profile'>
        <Profile user={user} />
      </Section>

      <StatisticsList data={statisticalData} />

      <FriendList data={friends} />

      <TransactionHistory data={transactions} />
    </div>
  );
}

export default App;

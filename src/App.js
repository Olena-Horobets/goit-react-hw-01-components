import s from 'components/Section/Section.module.css';

import user from 'components/Profile/user.json';
import statisticalData from 'components/Statistics/statistical-data.json';
import friends from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';

import Section from 'components/Section/Section';
import Profile from 'components/Profile/Profile';
import StatisticsList from 'components/Statistics/StatisticsList';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className='container'>
      <h1 className='hidden'>Let's be friends</h1>
      <div>
        <Section className={s.profile} title='My profile'>
          <Profile user={user} />
        </Section>
        <Section className={s.statistics} title='Upload stats'>
          <StatisticsList data={statisticalData} />
        </Section>
      </div>
      <Section className={s.friendList} title='My friends'>
        <FriendList data={friends} />
      </Section>
      <Section className={s.transactions} title='My transactions'>
        <TransactionHistory data={transactions} />
      </Section>
    </div>
  );
}

export default App;

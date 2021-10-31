import user from 'components/Profile/user.json';
import statisticalData from 'components/Statistics/statistical-data.json';
import friends from 'components/FriendList/friends.json';

import Section from 'components/Section';
import Profile from 'components/Profile/Profile';
import StatisticsList from 'components/Statistics/StatisticsList';
import FriendList from 'components/FriendList/FriendList';

function App() {
  return (
    <div>
      <Section title='My profile'>
        <Profile user={user} />
      </Section>

      <StatisticsList data={statisticalData} />

      <FriendList data={friends} />
    </div>
  );
}

export default App;

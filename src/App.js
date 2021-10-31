import PaintigsList from './components/PaintingsList';
import db from './db.json';
import user from './components/Profile/user.json';
import Section from './components/Section';
import Profile from './components/Profile/Profile';
// console.log(user);
function App() {
  return (
    <div>
      <Section title='The best offer'>
        <Profile user={user} />
      </Section>
      <Section>
        <PaintigsList list={db} />
      </Section>
    </div>
  );
}

export default App;

import PaintigsList from './components/PaintingsList';
import db from './db.json';
import Section from './components/Section';

function App() {
  return (
    <div>
      <Section title='The best offer'>
        <PaintigsList list={db} />
      </Section>
      <Section>
        <PaintigsList list={db} />
      </Section>
    </div>
  );
}

export default App;

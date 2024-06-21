import './App.css';
import PeopleList from './components/PeopleList';
import { Person } from './interfaces/person.interface';
import { useEffect, useState } from 'react';

function App() {
  const [people, setPeople] = useState<Person[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/people')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => setPeople(res))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="App">
      <PeopleList people={people} error={error} />
    </div>
  );
}

export default App;

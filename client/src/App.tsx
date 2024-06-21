import React, { useEffect, useState } from 'react';
import './App.css';

interface Person {
  id: number;
  name: string;
  age: number;
}

interface Props {
  people: Array<Person>;
}

const PeopleList: React.FC<Props> = ({ people }) => {
  if (!people.length) return <p>Loading...</p>;

  return (
    <>
      {people.map((p) => {
        return (
          <p key={p.id}>
            {p.name} / {p.age}
          </p>
        );
      })}
    </>
  );
};

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
      {error ? <p>Error: {error}</p> : <PeopleList people={people} />}
    </div>
  );
}

export default App;

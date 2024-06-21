import React, { useEffect, useState } from 'react';
import { Person } from '../interfaces/person.interface';

interface Props {
  people: Array<Person>;
  error: string | null;
}

const PeopleList: React.FC<Props> = ({ people, error }) => {
  if (error) return <p style={{ color: 'red' }}>ERROR!</p>;
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

export default PeopleList;

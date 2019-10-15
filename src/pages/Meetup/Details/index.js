import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { Container } from './styles';

export default function Details() {
  const meetups = useSelector(state => state.meetup.meetups);

  const { id } = useParams();

  return (
    <ul>
      {meetups
        .filter(meetup => meetup.id === Number(id))
        .map(meetup => (
          <li key={meetup.id}>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt={meetup.title}
            />
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.date}</span>
            </div>
          </li>
        ))}
    </ul>
  );
}

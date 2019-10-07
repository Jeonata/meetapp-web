import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  // useEffect(() => )
  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/meetup/add">
          <MdAddCircleOutline size={20} color="#fff" />
          Novo meetup
        </Link>
      </header>
      <ul>
        <Meetup>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de Junho, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </div>
        </Meetup>
        <Meetup>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de Junho, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </div>
        </Meetup>
        <Meetup>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de Junho, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </div>
        </Meetup>
      </ul>
    </Container>
  );
}

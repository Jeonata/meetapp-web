import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import api from '~/services/api';

import { Container, Meetup, List } from './styles';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setLoading(true);

    async function loadMeetups() {
      const response = await api.get('meetups/list');

      setMeetups(response.data);
      setLoading(false);
    }
    loadMeetups();
  }, []);

  function dateFormat(date) {
    return format(date, "d 'de' MMMM', às' HH'h'", { locale: pt });
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/meetup/add">
          <MdAddCircleOutline size={20} color="#fff" />
          Novo meetup
        </Link>
      </header>
      <List loading={loading ? 1 : 0}>
        {loading ? (
          <li>
            <FaSpinner color="fff" size={24} />
          </li>
        ) : (
          meetups.map(meetup => (
            <Meetup key={meetup.id}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{dateFormat(parseISO(meetup.date))}</span>
                <MdChevronRight size={24} color="#fff" />
              </div>
            </Meetup>
          ))
        )}
      </List>
    </Container>
  );
}

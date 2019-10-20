import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { parseISO } from 'date-fns';
import history from '~/services/history';

import { dateFormat } from '~/utils/index';
import { Container, Meetup, List } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      setLoading(true);

      const response = await api.get('meetups/list');

      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: dateFormat(parseISO(meetup.date)),
      }));

      setLoading(false);
      setMeetups(data);
    }

    loadMeetup();
  }, []);

  function handleDetails(id) {
    history.push(`/meetup/${id}/details`);
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
            <Meetup key={meetup.id} onClick={() => handleDetails(meetup.id)}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.formattedDate}</span>
                <MdChevronRight size={24} color="#fff" />
              </div>
            </Meetup>
          ))
        )}
      </List>
    </Container>
  );
}

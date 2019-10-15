import React from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

import history from '~/services/history';

import { Container, Meetup, List } from './styles';

export default function Dashboard() {
  const loading = useSelector(state => state.meetup.loading);
  const meetups = useSelector(state => state.meetup.meetups);

  function dateFormat(date) {
    return format(date, "d 'de' MMMM', às' HH'h'", { locale: pt });
  }

  function handleDetails(id) {
    history.push(`/meetup/details/${id}`);
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

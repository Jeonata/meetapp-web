import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import DatePicker, { registerLocale } from 'react-datepicker';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import 'react-datepicker/dist/react-datepicker.css';
import { Container } from './styles';

registerLocale('pt', pt);

export default function SelectDate({ name }) {
  const { defaultValue, registerField } = useField(name);
  const [date, setDate] = useState();

  const ref = useRef();

  useEffect(() => {
    registerField({
      name,
      ref: ref.current,
      path: 'props.selected',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  useEffect(() => {
    if (defaultValue) {
      setDate(parseISO(defaultValue));
    }
  }, [defaultValue]);

  return (
    <Container>
      <DatePicker
        name={name}
        placeholderText="Selecione a data"
        selected={date}
        minDate={new Date()}
        onChange={newDate => setDate(newDate)}
        locale="pt"
        dateFormat="dd 'de' MMMM 'de' yyyy, 'às' hh:mm aa"
        showTimeSelect
        timeFormat="HH:mm"
        timeCaption="Horário"
        timeIntervals={1}
        ref={ref}
        autoComplete="off"
      />
    </Container>
  );
}

SelectDate.propTypes = {
  name: PropTypes.string.isRequired,
};

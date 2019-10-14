import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updateMeetupSuccess,
  updateMeetupFailure,
  loadMeetupsSuccess,
} from './actions';

export function* loadMeetup() {
  try {
    const response = yield api.get('meetups/list');

    const { data } = response;

    yield put(loadMeetupsSuccess(data));
  } catch (err) {
    toast.error('ERRO');
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { data } = payload;
    const { id } = payload.data;

    const meetup = {
      ...data,
    };

    const response = yield call(api.put, `meetups/${id}`, meetup);

    toast.success('Meetup atualizado com sucesso!');

    yield put(updateMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar meetup, tente novamente mais tarde');
    yield put(updateMeetupFailure());
  }
}

export default all([takeLatest('@meetup/LOAD_MEETUPS_REQUEST', loadMeetup)]);

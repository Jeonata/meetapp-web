import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_MEETUPS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/LOAD_MEETUPS_SUCCESS': {
        draft.loading = false;
        draft.meetups = action.payload.data;
        break;
      }
      default:
    }
  });
}

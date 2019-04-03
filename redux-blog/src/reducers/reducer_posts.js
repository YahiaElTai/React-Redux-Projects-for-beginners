import { FETCH_POSTS, FETCH_POST } from '../actions/types';

const INITAIL_STATE = { all: [], post: null };

export default function(state = INITAIL_STATE, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, post: action.payload.data };

    case FETCH_POSTS:
      return { ...state, all: action.payload.data };

    default:
      return state;
  }
}

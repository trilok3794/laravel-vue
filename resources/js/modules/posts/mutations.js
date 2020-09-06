import initialState from './state';

const mutations = {
  SET_ERRORS(state, data) {
    state.errors = data;
  },
  SET_POSTS(state, data) {
    state.posts = data;
  },
  SET_POST(state, data) {
    state.post = data;
  },
};

export default mutations;

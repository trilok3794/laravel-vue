import initialState from './state';

const mutations = {
  SET_ERRORS(state, error){
     const errors = {};
     if (Object.keys(error).length) {
         Object.keys(error.errors).forEach((key) => {
           errors[key] = error.errors[key][0];
         });
     }
     state.errors = errors;
  },
  SET_POSTS(state, data) {
    state.posts = data;
  },
  SET_POST(state, data) {
    state.post = data;
  },
};

export default mutations;

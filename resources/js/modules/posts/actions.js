import {router} from "./../../app.js"

const actions = {
  getPosts({ commit }, page = 1) {
    axios.get('/posts').then((resp) => {
      commit('SET_POSTS', resp.data);
    }, (error) => {
      console.log(error);
    });
  },
  savePost({ store, commit, dispatch }, params) {
    axios.post('/posts', params).then((resp) => {
      if (resp.data == 'success') {
        router.push({ name: 'PostIndex' });
      }
    }, (error) => {
      commit('SET_ERRORS', error.response.data);
    });
  },
  getPost({ commit }, id) {
    axios.get(`/posts/${id}/edit`).then((resp) => {
      commit('SET_POST', resp.data);
    }, (error) => {
      console.log(error);
    });
  },
  deletePost({ commit }, id) {
    axios.get(`/posts/delete/${id}`).then((resp) => {
      if (resp.data == 'success') {

      }
    }, (error) => {
      console.log(error);
    });
  },
};
export default actions;

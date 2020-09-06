import postModule from './posts'

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        postModule,
    },
});

export default store;

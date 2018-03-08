import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    opacity: 100
  },
  mutations: {
    setOpacity (state, value) {
      state.opacity = value;
    }
  }
});

export default store;

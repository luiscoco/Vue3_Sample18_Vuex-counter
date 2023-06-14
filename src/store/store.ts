import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment"); // Trigger the 'increment' mutation
    },
    decrement(context) {
      context.commit("decrement"); // Trigger the 'decrement' mutation
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
  },
});

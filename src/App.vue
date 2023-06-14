<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="counter">
    {{ $store.state.counter }}
  </div>
  <div class="buttons">
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
  computed: {
    ...mapState(["counter"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

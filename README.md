# vuex-simple-sample

Vuex is a state management pattern and library for Vue.js applications. It helps you manage the state of your application in a centralized manner, making it easier to track and modify the data throughout your components. In Vue 3, Vuex works seamlessly with the Composition API, which is a new way of organizing and reusing logic in Vue.js.

We create a new Vue3 project. Open VSCode and run the command:
vue create vuex-sample

Select the options, move with arrow keys and select with the space bar:
Options selection summary:
```
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Linter
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) n
```

To start using Vuex in a Vue 3 project with Composition API, you need to install Vuex and import it into your project. You can do this by running the following command in your project's directory:

npm install vuex

Once Vuex is installed, you can create a store with a simple example. In this example, we'll create a counter store that increments and decrements a counter value.

## store.ts
First, create a file called store.ts in your project's directory and add the following code:

```typescript
import { createStore } from 'vuex';

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
      context.commit('increment');
    },
    decrement(context) {
      context.commit('decrement');
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
  },
});
```

In this code, we define the store using the createStore function from Vuex. We have a state object with a counter property, mutations to modify the state, actions to perform asynchronous operations, and getters to retrieve computed state values.

## App.vue

Next, open your main Vue component file (usually App.vue) and update it with the following code:

```vue
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
```

## main.ts

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import store from "../src/store/store";

createApp(App).use(store).mount("#app");
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

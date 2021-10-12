import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

import HelloWorld from './components/HelloWorld.vue';

HelloWorld.install = function (Vue) {
  Vue.component(HelloWorld.name, HelloWorld);
};

console.log(HelloWorld);
console.log(HelloWorld.name);
export default HelloWorld;

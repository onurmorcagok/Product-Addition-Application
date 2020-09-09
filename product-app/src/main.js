import Vue from "vue";
import App from "./App.vue";

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

export const eventBus = new Vue();

new Vue({
  el: "#app",
  render: (h) => h(App),
});

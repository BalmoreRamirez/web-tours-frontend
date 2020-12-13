import Vue from "vue";
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from "vee-validate";
import es from "vee-validate/dist/locale/es.json";
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/es.json';

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

localize("es", es);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

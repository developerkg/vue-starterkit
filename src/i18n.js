
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const kg = require('./i18n/kg.json');
const ru = require('./i18n/ru.json');
const en = require('./i18n/en.json');

const i18n = new VueI18n({
  locale: 'ru',
  messages: { kg, ru, en },
});

export default i18n;

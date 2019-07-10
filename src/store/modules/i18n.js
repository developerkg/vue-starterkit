
const state = {
  locales: [],
  current_locale: 'ru',
};

const getters = {
  currentLocale: state => state.current_locale,
  supportedLocales: state => state.locales,
};

const mutations = {
  SET_CURRENT_LOCALE(state, { locale }) {
    state.current_locale = locale;
  },
};

const actions = {
  setLocale({ commit }, locale) {
    commit('SET_CURRENT_LOCALE', { locale });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

const actions = {
  /**
   * @return {boolean}
   */
  MainIncrement({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER');
    return true;
  },
};

export default actions;

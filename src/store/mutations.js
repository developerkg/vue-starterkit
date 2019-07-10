const mutations = {
  DECREMENT_MAIN_COUNTER(state) {
    state.mainCounter -= 1;
  },
  INCREMENT_MAIN_COUNTER(state) {
    state.mainCounter += 1;
  },
};

export default mutations;

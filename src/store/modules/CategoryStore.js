const state = () => ({
    categories: []
  });
  
  const getters = {
    
  };
  
  const mutations = {
    SET_USER: (state, data) => {
      state.users = data;
    },
  };
  
  const actions = {
    ADD_USER({ commit }, customer) {
      commit("SET_USER", customer);
    },
  };
  
  export default {
    state,
    getters,
    mutations,
    actions,
  };
const state = () => ({
  users: []
});

const getters = {
  
};

const mutations = {
  SET_USER: (state, users) => {
    state.users = users;
  },
};

const actions = {
  SET_USER({ commit }, users) {
    console.log('users', users)
    commit("SET_USER", users);
  },

  REMOVE_USER({state}, userIndex){
    state.users.splice(userIndex, 1)
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
import Vuex from "vuex";
import Vue from "vue";
import MainStore from "./modules/MainStore";
import CategoryStore from "./modules/CategoryStore";

Vue.use(Vuex)
Vue.config.devtools = true

const store = () => {
  return new Vuex.Store({
    state: {

    },
    modules: {
      MainStore,
      CategoryStore
    }
  })
}

export default store;
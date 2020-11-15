import Vue from 'vue'
import Vuex from 'vuex'
import vocabulary from './modules/vocabulary'
import training from './modules/training.js'
import authUser from './modules/authUser'
import puzzle from './modules/puzzle'
import grammar from './modules/grammar'

Vue.use(Vuex)

export default new Vuex.Store({

  state : {
    secondNum : 13
  },

  modules: {
    vocabulary,
    training,
    authUser,
    puzzle,
    grammar
  }
  
})

import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios';
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default createStore({
  state: {
    portfolio: []
  },
  getters: {
    PORTFOLIO(state){
      return state.portfolio
    }
  },
  mutations: {
    SET_PORTFOLIO_TO_STATE: (state, portfolio) =>{
      state.portfolio = portfolio
    },
  },
  actions: {
    async GET_PORTFOLIO_FROM_DB({commit}){
      try {
        //const products = await axios("https://raw.githubusercontent.com/sedm1/selldish/main/db-2.json", {
        const portfolio = await axios("http://localhost:3000/portfolio", {
          method: "GET"
        })
        commit("SET_PORTFOLIO_TO_STATE", portfolio.data)
        return portfolio.data
      } catch (error) {
        console.log("Ошибка при получении портфолио " + error)
        return error
      }
    }
  },
  plugins: [
    vuexLocal.plugin
  ]
})

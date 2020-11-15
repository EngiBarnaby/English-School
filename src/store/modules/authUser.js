import axios from 'axios'
import jwt_decode from 'jwt-decode'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const baseUrl = 'http://127.0.0.1:8000/'

export default {

    state : {
      status : '',
      token : localStorage.getItem('token') || '',
      refreshToken : '',
      user : localStorage.getItem('username') || '',
      userProfile : {},
      userStats : {},
      userWordsStats : {},
    },

    mutations: {
        auth_request(state){
          state.status = "loading"
        },

        auth_success(state, payload){
          state.status = "success"
          state.token = payload.token
          state.user = payload.username
        },

        auth_error(state){
          state.status = 'error'
        },

        logout(state){
          state.status = '',
          state.token = ''
          state.user = ''
        },

        setRefreshToken(state, payload){
          state.refreshToken = payload
        },

        refreshedToken(state, token){
          state.token = token
        },

        setUserProfile(state, data){
          state.userProfile = data
        },

        setUserStats(state, data){
          state.userStats = data
        },

        setUserWordsStats(state, data){
          state.userWordsStats = data
        }

      },

    actions : {
      loginUser({ commit }, user){
        return new Promise((  resolve, reject) => {
          commit('auth_request')
          axios({ url : baseUrl + 'api/token/', data : user, method : 'POST' })
          .then( resp => {
            const token = resp.data.access
            const refreshToken = resp.data.refresh
            localStorage.setItem("token", token)
            localStorage.setItem("refreshToken", refreshToken)
            localStorage.setItem('username', user.username)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            const payload = { token : token , username : user.username}
            commit('auth_success', payload)
            resolve(resp) 
          })
          .catch( err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
      },

      logoutUser({ commit }){
        return new Promise(( resolve, reject ) => {
          commit('logout')
          localStorage.removeItem('token')
          localStorage.removeItem('username')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
      },

      registerUser(context, data){
        return new Promise(( resolve, reject ) => {
          axios({ url : baseUrl + 'users/users/', data : data, method : 'POST' })
          .then( resp =>  {
            resolve()
          })
          .catch( err => {
            reject("Ошибка")
          })
        })
      },

      REFRESH_TOKEN: ({commit}) => {
        return new Promise((resolve, reject) => {
          const refreshToken = localStorage.getItem('refreshToken')
          axios
            .post(baseUrl + 'api/token/refresh/', {"refresh" : refreshToken})
            .then(response => {
              const token = response.data.access
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
              commit('refreshedToken', token)
              resolve(token)
            })
            .catch(error => {
              console.log("Что-то пошло не так");
              reject(error);
            });
        });
      },

      userProfile({ commit, state }){
        return new Promise((resolve, reject) => {
          axios({ url : baseUrl + `users/profile/${state.user}`, method : 'GET' })
            .then( resp => {
              commit("setUserProfile", resp.data)
              resolve(resp);
            })
            .catch( error => {
              console.log(error);
              reject("Error")
            })
        })
      },

      async fetchUserStats(context){
        let { data } = await axios.get(baseUrl + "users/stats/")
        context.commit("setUserStats", data)
      },

      async fetchUserWordsStats(context){
        let { data } = await axios.get(baseUrl + "api/get-user-stats/")
        context.commit("setUserWordsStats", data)
      }

    },

    getters : {
      isLoggedIn: state => !!state.token,
      authStatus: state => state.status,
      userToken : state => state.token,
      getUserName : state => state.user,
      getUserProfile : state => state.userProfile,
      getUserStats : state => state.userStats,
      getUserWordsStats : state => state.userWordsStats
  }
}
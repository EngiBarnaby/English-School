import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
// import Axios from 'axios';
import dateForFilter from '@/filter/dateFilter'

Vue.prototype.$http = axios
const token = localStorage.getItem('token')

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

let isAlreadyFetchingAccessToken = false
let subscribers = []

function onAccessTokenFetched(access_token) {
  subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber(callback) {
  subscribers.push(callback)
}

axios.interceptors.response.use(
  
function (response) {
  return response
}, 

function (error) {
  const { config, response: { status } } = error
  const originalRequest = config

  if (status === 401) {
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true

      // instead of this store call you would put your code to get new token  
      store.dispatch("REFRESH_TOKEN").then((access_token) => {
        isAlreadyFetchingAccessToken = false
        onAccessTokenFetched(access_token)
      })
    }

    const retryOriginalRequest = new Promise((resolve) => {
      addSubscriber(access_token => {
        originalRequest.headers.Authorization = 'Bearer ' + access_token
        resolve(axios(originalRequest))
      })
    })
    return retryOriginalRequest
  }
  return Promise.reject(error)
})

Vue.filter('DateFilter', dateForFilter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// axios.interceptors.response.use(
//   response => { 
//     return response
//   },
//   error => {
//     const { config, response : { status, data }} = error
//     const originalRequest = config

//     if(status === 401 && data.detail === "Given token not valid for any token type"){

//       if(!isAlreadyFetchingAccessToken) {

//         isAlreadyFetchingAccessToken = true
//         store.dispatch("REFRESH_TOKEN")
//         .then( access_token => {
//           isAlreadyFetchingAccessToken = false
//           onAccessTokenFetched(access_token)
//         })
//         .catch( error => {
//           console.log(error);
//         })
//       }
      
//     }
//   }
// )
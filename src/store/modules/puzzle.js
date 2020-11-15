import axios from 'axios'

const urlTask = "http://127.0.0.1:8000/task/"

export default {

    state : {
        puzzleData : [],
        puzzleCategories : [],
        userStats : ''
    },

    mutations : {
        setPuzzleData(state, payload){
            state.puzzleData = payload
        },

        setPuzzleCategories(state, payload){
            state.puzzleCategories = payload
        },

        setUserData(state, payload){
            state.userStats = payload
        }
    },

    actions : {
        async fetchPuzzle(context, params){
            if(params.count === null){
                params.count = 5
            }
            if(params.category === null){
                params.category = "Случайная тема"
            }
            let { data } = await axios.get(urlTask + "tasks/", { params : params })
            context.commit("setPuzzleData", data)
        },

        async fetchPuzzleCategories(context){
            let { data } = await axios.get(urlTask + "categories/")
            context.commit("setPuzzleCategories", data)
        },

        async setUserTask(context, id){
            let { data } = await axios.post(urlTask + 'set-user-task/', id)
        },

        async getUserData(context){
            let { data } = await axios.get(urlTask + "get-user-data/")
            context.commit('setUserData', data)
        },

        async refreshUserData(context, payload){
            console.log("Тут будут передоваться данные", payload);
            let { data } = await axios.post(urlTask + "refresh-user-data/", id)
        },

    },

    getters : {
        getPuzzleData(state){
            return state.puzzleData
        },

        getPuzzleCategories(state){
            return state.puzzleCategories
        },

    },

}
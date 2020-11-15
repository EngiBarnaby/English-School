import axios from 'axios'

const url = "http://127.0.0.1:8000/api/random"

export default {
    state : {
        randomWords : [],
        userResult : []
    },

    mutations : {
        setRandomWords(state, data){
            state.randomWords = data
        },

        addResult(state, data){
            state.userResult.push(data)
        }

    },

    actions : {
        getRandomWordsFromBase : async (context, nums = 5) => {
            let { data } = await axios.get(url + `?nums=${nums}`)
            context.commit("setRandomWords", data)
        }
    },

    getters : {
        getRandomWords(state){
            return state.randomWords
        },

        getUserResult(state){
            return state.userResult
        },

        getCountWrongAnswer(state){
            let count = 0
            for (let item of state.userResult){
                if ( item.Answer == "Wrong" ){
                    count += 1
                }
            }
            return count
        }

    }
}

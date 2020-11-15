import axios from 'axios'

const baseUrl = "http://127.0.0.1:8000/api/"

const url = "http://127.0.0.1:8000/api/words/"

const urlAllWords = "http://127.0.0.1:8000/api/all-words"

const urlUser = "http://localhost:8000/api/words/userList/"

export default {

    state: {
        wordsList : [],
        userList : [],
        wordsCount : 0,
        irregularVerbs : []
    },

    mutations: {
        updateWordsList(state, data){
            state.wordsList = data
        },

        addWord(state, word){
            state.wordsList.push(word)
        },

        addUserWord(state, word){
            state.userList.push(word)
        },

        updateUserWordsList(state, data){
            state.userList = data
        },

        deleteWord(state, id){
            state.wordsList = state.wordsList.filter( word => word.id !== id)
        },

        updateWordsCount(state, payload){
            state.wordsCount = payload
        },

        setIrregularVerbs(state, verbs){
            state.irregularVerbs = verbs
        }
        

    },

    actions: {
        async getAllWords(context){
            let { data } = await axios.get(urlAllWords)
            context.commit("updateWordsList", data)
        },

        async getUserWords(context){
            let { data } = await axios.get(baseUrl + "user-words/")
            context.commit("updateUserWordsList", data)
        },

        getWordsCount : async (context) => {
            let { data } = await axios.get("http://127.0.0.1:8000/api/words-count")
            context.commit("updateWordsCount", data.wordsCount)
        },

        addWordInBase : async (context, payload) => {
            let { data } = await axios.post(baseUrl + 'add-word/' , payload)
            context.commit("addWord", data)
            context.commit("addUserWord", data)
        },

        deleteWordInBase : async (context, id) => {
            await axios.delete(url + id)
            context.commit("deleteWord", id)
        },

        fetchIrregularVerbs : async (context) => {
            let { data } = await axios.get("http://127.0.0.1:8000/api/irregular-verbs/")
            context.commit("setIrregularVerbs", data)
        },

    },

    getters : {
        allWordsList(state){
            return state.wordsList
        },

        allUserWordsList(state){
            return state.userList
        },

        countVocabularyWords(state){
            return state.wordsCount
        },

        getVerbs : state => state.irregularVerbs

    },

}
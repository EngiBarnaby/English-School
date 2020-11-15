import axios from 'axios'

const baseUrl = "http://127.0.0.1:8000/"

export default {
    state : {
        grammarData : {},
        grammarCategoryData : {},
        grammarDetailData : {},
    },

    mutations : {
        setGrammarData(state, data){
            state.grammarData = data
        },

        setGrammarCategoryData(state, data){
            state.grammarCategoryData = data
        },

        setGrammarDetailData(state, data){
            state.grammarDetailData = data
        },
    },

    actions : {
        async fetchGrammars(context, category =''){
            let { data } = await axios.get(baseUrl + "grammar/get-grammars/" + `?category=${category}`)
            context.commit("setGrammarData", data)
        },

        async fetchGrammarsCategory(context){
            let { data } = await axios.get(baseUrl + "grammar/get-grammars-category/")
            context.commit("setGrammarCategoryData", data)
        },

        async fetchGrammarsList(context){
            let { data } = await axios.get(baseUrl + "grammar/get-grammars/")
            context.commit("setGrammarData", data)
        },

        async fetchGrammarDetail(context, grammarId=4){
            let { data } = await axios.get(baseUrl + `grammar/grammar-detail/${grammarId}/`)
            context.commit("setGrammarDetailData", data)
        },

    },

    getters : {
        getGrammars : state => state.grammarData,
        getGrammarsCategory : state => state.grammarCategoryData,
        getGrammarDetail : state => state.grammarDetailData,
    }
}
<template>
    <div v-html="getGrammarDetail.content" >
    </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex"

export default {
    
    props : ["grammarId"],

    data(){
        return {
            data : {}
        }
    },

    methods : mapActions(["fetchGrammarDetail"]),

    computed : mapGetters(["getGrammarDetail"]),

    async mounted(){
        await this.fetchGrammarDetail(this.grammarId)
    }

}
</script>
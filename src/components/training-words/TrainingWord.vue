<template>
    <div>
        <v-row justify="center">
            <v-col cols="12" xs='12' sm="12" md="5" lg="5" xl="5">
                <h2 class="text-center" >{{ word[currentLang] }}</h2>
                <hr/>
            </v-col>
        </v-row>
        <v-row justify="center" >
            <v-col cols="12" xs='12' sm="12" md="5" lg="5" xl="5" v-for="(item, index) in word.words" :key="index">
                <WordForChoice  
                    :word="item" 
                    @disableBtn="disBtn" 
                    :lang="currentLang" 
                    :status-btn="statusBtn" 
                    />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import WordForChoice from './WordForChoice'
import { mapMutations } from 'vuex';

export default {
    
    props : ["word", "currLang"],

    data(){
        return {
            currentLang : this.currLang,
            answer : "unknow",
            disClass : false,
            statusBtn : false,
        }
    },

    methods : {
        checkAnswer(i){
            if(i === "False"){
                this.answer = false
                this.disClass = true
            }
        },

        ...mapMutations(["addResult"]),

        disBtn(data){
            this.$emit("wordFinished")
            this.addResult(data)
            this.statusBtn = true
        }

    },

    components : {
        WordForChoice
    }

}
</script>

<style scoped>

</style>
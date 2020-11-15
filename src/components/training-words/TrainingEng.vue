<template>
    <div>
        <v-row justify="center">
            <v-col cols="12" xs='12' sm="8" md="8" lg="8" xl="8">
                <h2 class="text-center" >Выберите правильный перевод слова</h2>
                <div v-for="word in getRandomWords" :key="word.id" class="my-10">
                    <TrainingWord :word="word" :currLang="currentLang" @wordFinished="addCountWords"/>
                </div>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col md="6" xs="12">
                <v-btn  
                    x-large
                    block
                    :disabled="!complete"
                    color="success">
                    <router-link :to="{ name : 'TrainingRus', params : { count : count, lang : 'rus' }}">Продолжить</router-link>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TrainingWord from '@/components/training-words/TrainingWord'

export default {

    props : ["count", "lang"],

    data(){
        return {
            currentLang : this.lang,
            currentWordEnd : 0
        }
    },

    computed : {

        ...mapGetters(["getRandomWords"]),

        thatLang(){
            return this.currentLang
        },

        complete(){
            if(this.currentWordEnd === this.count){
                return true
            }
            else{
                return false
            }
        }

    },

    components : {
        TrainingWord
    },

    methods : { 
        ...mapActions(["getRandomWordsFromBase"]),

        addCountWords(){
            this.currentWordEnd += 1
        }
    },

    async mounted(){
        this.getRandomWordsFromBase(this.count)
    }
}
</script>

<style scoped>
a {
    text-decoration : none;
    color: black !important;
 }
</style>

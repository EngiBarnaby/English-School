<template>
    <v-container >
        <router-view></router-view>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TrainingWord from '@/components/training-words/TrainingWord'

export default {

    // props : ["count"],

    // computed : mapGetters(["getRandomWords"]),

    // components : {
    //     TrainingWord
    // },

    // methods : { 
    //     ...mapActions(["getRandomWordsFromBase"]),
    // },

    // async mounted(){
    //     console.log("mounted");
    //     this.getRandomWordsFromBase(this.count)
    // }
}
</script>

<style scoped>
a {
    text-decoration : none;
    color: black !important;
 }
</style>

<!-- <h2 class="text-center">Здесь будет страница для тренировки</h2>
<v-row justify="center">
    <v-col cols="6">
        <div v-for="word in getRandomWords" :key="word.id" class="my-10">
            <TrainingWord :word="word" />
        </div>
    </v-col>
</v-row>
<v-row justify="center">
    <v-col cols="5">
        <v-btn block color="success" dark><router-link to="/UserResult">Закончить тренировку</router-link></v-btn>
    </v-col>
</v-row> -->
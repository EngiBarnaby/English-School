<template>
    <div class="vocabulary">
        <v-tabs 
            centered
        >           
            <v-tab :to="{ name : 'global'}">
                <h3 class="text-center my-title">Общий словарь</h3>
            </v-tab>
            <v-tab :to="{ name : 'verbs'}">
                <h3 class="text-center my-title">Неправильные глаголы</h3>
            </v-tab>
            <v-tab 
                :to="{ name : 'user-words' }"
                :disabled="!isLoggedIn"
                >
                <h3 class="text-center my-title mr-10">Ваш словарь</h3>
            </v-tab>     
        </v-tabs>
        <hr class="mb-5">
        <router-view></router-view>
    </div>
</template>

<script>
import Word from './Word'
import { mapGetters, mapActions } from 'vuex';

export default {

    components : {
        Word
    },

    data(){
        return {
            tab : "Local",
        }
    },

    computed : mapGetters(['allWordsList', "isLoggedIn", "allUserWordsList"]),

    methods : {
        ...mapActions(["getAllWords", "getUserWords"]),

        changeList(value){
            this.tab = value
        }

    },

    async mounted(){
        
        this.getAllWords()

        if( this.isLoggedIn === true){
            this.getUserWords()
        }
        
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');
.my-title {
    font-family: 'Bad Script', cursive;
}
</style>
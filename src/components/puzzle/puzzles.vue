<template>
    <div class="puzzles" >
        <div v-for="puzzle in getPuzzleData" :key="puzzle.id" >
            <v-row justify="center">
                <v-col  xs='12' sm="8" md="8" lg="8" xl="8">
                    <Puzzle 
                        :puzzleText="puzzle.content"
                        :puzzleTitle="puzzle.title"
                        :puzzleID="puzzle.id"
                        :options="puzzle.options"
                        :puzzleComplete="puzzleComplete" 
                        />
                </v-col>
            </v-row>
        </div>
        <v-row justify="center">
            <div v-show="finishedPuzzles">
                <v-row justify="center">
                    <h2>Вы выполнили все задания</h2>
                </v-row>
                <v-row  justify="center">
                    <router-link
                        class="text-decoration-none"
                        :to="{ name : 'puzzles-stats', params : { taskComplete : clearTasks, mistakes : currentMistakes }}" 
                    >
                        <v-btn
                            @click="refreshData" 
                            color="success"
                            >Продолжить
                        </v-btn>  
                    </router-link>
                </v-row>
            </div>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Puzzle from './puzzle'

export default {
    
    props : ['category', 'count'],

    components : { Puzzle },

    data(){
        return {
            currentFinished : 0,
            currentMistakes : 0,
            clearTasks : 0
        }
    },

    computed : {

        ...mapGetters(["getPuzzleData"]),

        finishedPuzzles : {
            get : function(){
                if(this.currentFinished === this.count){
                    return true
                }
                else{
                    return false
                }
            }
        }
    },

    methods : {
        ...mapActions(["fetchPuzzle", "refreshUserData"]),

        puzzleComplete(mistakes){
            this.currentFinished += 1
            
            if(mistakes === 0){
                this.clearTasks = 0
            }
            else{
                this.currentMistakes += mistakes
            }
        },

        refreshData(){
            this.refreshUserData({ taskComplete : this.clearTasks, mistakes : this.currentMistakes })
        }
    },

    async mounted(){
        this.fetchPuzzle({ category : this.category, count : this.count })
    }

}
</script>
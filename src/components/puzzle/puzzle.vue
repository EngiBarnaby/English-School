<template>
    <div class="my-3 mx-3" >
        <v-row class="ml-6 mb-5">
            <h2>{{ puzzleTitle }}</h2>
        </v-row>
        <h4 :style="changeColor" v-html="formatText" class="mb-4 " ></h4>
        <v-row >
            <puzzleOption 
                v-for="option in options" :key="option.postion" 
                :option="option"
                :currentRightPosition="currentRightPosition"
                @userClick="userPick"
                :complete="complete"
                />
        </v-row>
        <h3 class="text-center" v-if="finishTask === 'clear'" >Well done!</h3>
        <h3 class="text-center" v-if="finishTask === 'miss'" >You have made a mistake! Mistakes {{ mistakes }}</h3>
    </div>
</template>

<script>
import puzzleOption from './puzzleOption.vue'

export default {
    props : ['puzzleText', 'puzzleTitle', 'options', 'puzzleID', 'puzzleComplete'],

    components : {
        puzzleOption
    },

    data(){
        return {
            formatText : "&emsp;&emsp;&emsp;",
            currentRightPosition : 1,
            mistakes : 0,
            complete : false
        }
    },

    methods : {
        userPick(value){
            if(value.answer === true){
                this.currentRightPosition += 1
                this.formatText = this.formatText.replace('&emsp;&emsp;&emsp;', value.text)

            }
            else{
                this.mistakes += 1
            }
        },

        changeStatus : function(){
            this.puzzleComplete(this.mistakes)
        }

    },

    computed : {
        changeColor: {
            get : function() {
                if(this.formatText.includes("&emsp;&emsp;&emsp;")){
                    return {color : 'black'}
                }
                else{
                    return {color : 'green'}
                }
            },
        },
        
        finishTask : {
            get : function(){
                if(!this.formatText.includes("&emsp;&emsp;&emsp;") && this.mistakes === 0){
                    this.$store.dispatch("setUserTask", { id : this.puzzleID })
                    this.complete = true
                    return "clear"
                }
                else if(!this.formatText.includes("&emsp;&emsp;&emsp;") && this.mistakes !== 0){
                    this.complete = true
                    return "miss"
                }
            }
        },

    },

    watch : {
        complete : function(){
            this.changeStatus()
        }
    },

    mounted(){
        this.formatText = this.puzzleText.replace(/{##}/g, '<span style="text-decoration:underline"> &emsp;&emsp;&emsp; </span>')
    }

}
</script>

<style scoped>

.puzzle {
    border: 2px solid black;
}

</style>
<template>
    <div>
        <h3 class="text-center" >{{ item.rus }}</h3>
        <v-text-field 
            outlined 
            :background-color="checkCurrentInput ? 'green' : ''" 
            :success="checkCurrentInput" 
            v-model="userInput" 
            :disabled=" checkCurrentInput ? true : false"
            ></v-text-field>
        <v-row justify="center">
            <v-btn 
                color="success" 
                @click="checkAnswer"  
                medium 
                :disabled="checkCurrentInput">
                Показать ответ
            </v-btn>
        </v-row>
    </div>
</template>

<script>
export default {
    props : ['item', 'wordComplete'],

    methods : {
        checkAnswer(){
            this.userInput = this.item.eng
        },

    },

    data(){
        return {
            userInput : '',
            inputComplete : false
        }
    },

    computed : {
        checkCurrentInput(){
            if( this.userInput.toLowerCase() === this.item.eng.toLowerCase()){
                this.inputComplete = true
                return true
            }
        },
    },

    watch : {
        
        inputComplete : function(){
            this.wordComplete()
        }

    }

}
</script>

<style scoped>

.successed { background-color: darkgreen; }

</style>
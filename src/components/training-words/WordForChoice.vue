<template>
    <v-btn 
        block 
        :outlined="outlineBtn"
        :class="{'disable-events': this.statusBtn}"
        large 
        @click="changeColor"
        :color="changeStatus ? 'green' : wordColor"
    >
        {{ lang == "eng" ? word.rus : word.eng }}
    </v-btn>
</template>

<script>

export default {
    
    props : ["word", "statusBtn", "lang"],

    data(){
        return { 
            wordColor : 'blue',
            outlineBtn : true,
        }
    },

    computed : {
        changeStatus(){
            if (this.statusBtn == true && this.word.status == 'True') {
                this.outlineBtn = false
                return true
            }
            else {
                return false
            }
        }
    },

    methods : {
        changeColor(){
            if(this.word.status === "True"){
            this.$emit("disableBtn", 
                { 
                    "lang" : this.lang,
                    "Word" : this.word,
                    "Answer" : "Right",
                 }
            )
                this.wordColor = "green"
                this.outlineBtn = false
            }
            else{
            this.$emit("disableBtn", 
                { 
                    "lang" : this.lang,
                    "Word" : this.word,
                    "Answer" : "Wrong",
                 }
            )
                this.wordColor = "red"
                this.outlineBtn = false
            }
        },
    }

}
</script>

<style scoped>

.disable-events {
  pointer-events: none
}

</style>
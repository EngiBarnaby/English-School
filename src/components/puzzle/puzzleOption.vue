<template>
    <v-btn  
        outlined
        small
        :disabled="complete"
        :color="colorBtn"
        :class="disableBtn" 
        value="option.position"
        @click="Pick( option.position, option.text, option.answer)"
        >
        {{ option.text }}
    </v-btn>
</template>

<script>
export default {

    props : ['option', 'currentRightPosition', 'complete'],

    data(){
        return {
            colorBtn : '',
            disableBtn : 'mx-3 my-3',
        }
    },
    
    methods : {
        Pick(position, text, answer){
            if(position === this.currentRightPosition && answer === true){
                this.changeColor(true)
                this.$emit("userClick", { answer : true, text : this.option.text })
            }
            else{
                this.changeColor(false)
                this.$emit("userClick", false)
            }
        },

        changeColor(answer){
            if(answer === true){
                this.disableBtn = 'disable-events mx-3 my-3'
                this.colorBtn = "success"
            }
            else{
                this.colorBtn = "error"
                setTimeout(() => { this.colorBtn = ""}, 500)
            }
        }
    }

}
</script>

<style scoped>

.disable-events {
  pointer-events: none
}

</style>
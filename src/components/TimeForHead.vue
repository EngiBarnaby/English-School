<template>
    <div class="time mr-4" >
        <span>{{ currentTime | DateFilter }}</span>
    </div>
</template>

<script>
export default {
    
    data(){
        return {
            currentTime : new Date()
        }
    },

    mounted(){
        setInterval(() => {
            this.currentTime = new Date()
        }, 1000)
    }

}
</script>
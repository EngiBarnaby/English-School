<template>
    <div class="query-test">
        <v-btn 
            @click="getQuery"
            color="success">
            text
        </v-btn>
    </div>
</template>

<script>
export default {
    
    methods : {

        getQuery(){
            console.log(this.$route.path);
        }

    }

}
</script>
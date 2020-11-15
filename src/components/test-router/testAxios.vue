<template>
    <div>
        {{ data }}
        <v-btn color="success" @click="getWords" >Получить данные</v-btn>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    
    data(){
        return {
            data : ''
        }
    },

    methods : {
        async getWords(){
            let { data } = await axios.get("http://127.0.0.1:8000/api/all-words")
            console.log(data);
        }
    }

}
</script>
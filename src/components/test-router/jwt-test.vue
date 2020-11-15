<template>
    <div class="jwt" >
        <v-row justify="center" >
            <v-col cols="10" >
                <v-btn @click="getToken" color="lime accent-2">Получит токен из localStorage</v-btn>
                <p class="">{{ localToken }}</p>
                <h4>{{ status }}</h4>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    data(){
        return {
            status : '',
            localToken : '',
        }
    },

    computed : mapGetters(["userToken", "isLoggedIn"]),

    methods : {

        getToken(){
            this.status = this.isLoggedIn
            this.localToken =  this.userToken          
        }

    }

}
</script>
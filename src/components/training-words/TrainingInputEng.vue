<template>
    <div>
            <v-row justify="center">
                <v-col md="6" xs="12">
                    <div v-for="(item, index) in getRandomWords" :key="index" >
                        <ItemsInput class="mb-15" 
                            :item="item"  
                            :wordComplete="wordComplete"
                        />
                    </div>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col md="6" xs="12">
                    <v-row justify="center">
                        <v-btn 
                            block 
                            large
                            :disabled="!WordsInputComplete"
                            color="success"
                            >
                                <router-link :to="{ name : 'UserResult'}" tag="button">
                                    Закончить
                                </router-link>
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
    </div>
</template>

<script>
import ItemsInput from './ItemsForInputTraining'
import { mapGetters } from 'vuex';

export default {
    props : ["words"],

    data(){
        return {
            currentComplete : 0
        }
    },

    methods :{
        wordComplete(){
            this.currentComplete += 1
        },

    },

    computed : {

        WordsInputComplete(){
            if(this.currentComplete === this.getRandomWords.length){
                return true
            }
        },

        ...mapGetters(['getRandomWords']),
    },

    components : {
        ItemsInput
    }

}
</script>
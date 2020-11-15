<template>
    <div>
        <v-row>
            <v-col cols="12" xs="12" sm="6" md="6" class="mb-4" v-for="word in allWordsList" :key="word.id">
                <Word :rus="word.rus" :eng="word.eng" :id="word.id" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Word from '@/components/Word'

export default {
    
    computed : mapGetters(["allWordsList"]),

    methods : mapActions(["getAllWords"]),

    components : {
        Word
    },

    async mounted(){
       await this.getAllWords()
    }

}
</script>
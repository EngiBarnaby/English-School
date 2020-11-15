<template>
    <div>
        <v-row>
            <v-col cols="12" xs="12" sm="6" md="6" class="mb-4" v-for="word in allUserWordsList" :key="word.word.id">
                <Word :rus="word.word.rus" :eng="word.word.eng" :id="word.word.id" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Word from '@/components/Word'

export default {
    
    computed : mapGetters(["allUserWordsList"]),

    methods : mapActions(["getUserWords"]),

    components : {
        Word
    },

    async mounted(){
       await this.getUserWords()
    }

}
</script>
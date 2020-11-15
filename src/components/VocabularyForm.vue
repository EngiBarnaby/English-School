<template>
    <v-container>
        <v-row class="mb-10" justify="space-around">
            <v-col cols="12" xs="12" sm="6">
                <v-text-field
                    name="name"
                    label="Слово"
                    id="id"
                    filled
                    v-model="firstWord"
                ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="6">
                <v-text-field
                    name="name"
                    label="Перевод"
                    id="id2"
                    filled
                    v-model="secondWord"
                ></v-text-field>
            </v-col>
            <v-btn fab  color="primary outline"  @click="Submit" dark><v-icon>mdi-plus</v-icon></v-btn>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {

    data(){
        return {
            firstWord : '', 
            secondWord : '', 
        }
    },

    methods : {
        ...mapActions(["addWordInBase"]),
        Submit(){
            this.addWordInBase({
                rus : this.firstWord,
                eng : this.secondWord
            })
            this.firstWord = this.secondWord = ""
        }
    },

}
</script>
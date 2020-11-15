<template>
    <div id="trainingSettings">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="12" md="8">
                <v-card>
                    <v-card-title>
                        <v-row justify="center">
                            <h4>Выберите количество слов</h4>
                        </v-row>
                    </v-card-title>
                    <v-card-actions>
                        <v-row justify="center">
                            <v-radio-group v-model="valueWords" row>
                                <v-radio
                                    label="5"
                                    :value="5"
                                ></v-radio>
                                <v-radio
                                    label="10"
                                    :value="10"
                                ></v-radio>
                                <v-radio
                                    label="15"
                                    :value="15"
                                ></v-radio>
                            </v-radio-group>
                        </v-row>
                    </v-card-actions>
                    <v-card-actions>
                        <v-row justify="center">
                            <v-btn  
                                large
                                color="success">
                                <router-link :to="{ name : 'TrainingEng', params : { count : valueWords, lang : 'eng' }}">Учить слова</router-link>
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
            <h2 class="text-center mt-8" >Статистика вашего словаря</h2>
            <hr>
            <v-row>
                <div>
                    <h2>Количество слов в словаре {{ this.countVocabularyWords }}</h2>
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data(){
        return {
            valueWords : 5,
        }
    },

    methods : mapActions(["getWordsCount"]),
    computed : mapGetters(["countVocabularyWords"]),

    async mounted(){
        await this.getWordsCount()
    }
}
</script>

<style scoped>
a {
    text-decoration : none;
    color: black !important;
 }
</style>
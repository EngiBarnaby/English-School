<template>
    <div>
        <h3 class="text-center">Заполните данные чтобы получить задание</h3>
        <v-row justify="center">
            <v-col xs="12" sm="11" md="5" cols="12">
                <v-autocomplete
                    label="Выберите категорию"
                    dense
                    solo
                    solo-inverted
                    v-model="category"
                    :items="categories"
                ></v-autocomplete>
            </v-col>
            <v-col xs="12" sm="11" md="5" cols="12">
                <v-autocomplete
                    label="Выберите количество"
                    dense
                    solo
                    solo-inverted
                    v-model="numsValue"
                    :items="nums"
                ></v-autocomplete>
            </v-col>
        </v-row>
        <v-row justify="center" class="mb-5" >
            <router-link 
                :to="{ name : 'puzzles', params : { category : category, count : numsValue } }" 
                class="text-decoration-none"> 
                <v-btn 
                    elevation="6"
                    >
                    Начать тест
                </v-btn>
            </router-link>
        </v-row>
        <hr>
        <h2 class="text-center mt-6">Ваша статистика</h2>
        <v-row justify="center">
            <v-col xs='12' sm="12" md="8" lg="8" xl="8" >
                <h2 v-for="(stat, index) in getUserStats" :key="index">
                    {{ stat.description }} - {{ stat.count }}
                </h2>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    
    data(){
        return {
            categories : [],
            category : null,
            nums : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            numsValue : null
        }
    },

    computed : mapGetters(["getPuzzleCategories", 'getUserStats']),

    methods : {
        ...mapActions(['fetchPuzzleCategories', 'getUserData'])
    },

    async mounted(){
        await this.fetchPuzzleCategories()
        await this.getUserData()
        for (let i of this.$store.state.puzzle.puzzleCategories){
            this.categories.push(i.title);
        }
    }

}
</script>
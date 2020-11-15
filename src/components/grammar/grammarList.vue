<template>
    <div>
        <h3 class="text-center" >Список правил</h3>
        <v-row>
            <template   v-for="item in getGrammarsCategory">
                <v-col :key="item.title" xs='6' sm="6" md="4" lg="4" xl="4" cols="6">
                    <router-link :to="{ name : 'grammars', params : { category : item.title }}" class="text-decoration-none">
                        <v-card class="pa-2 testBlock">
                            <v-card-title primary-title>
                                {{ item.title }}
                            </v-card-title>
                            <v-card-subtitle>
                                {{ item.eng_title }}
                            </v-card-subtitle>
                        </v-card>
                    </router-link>
                </v-col>
            </template >
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {

    methods : mapActions(["fetchGrammarsCategory"]),

    computed : mapGetters(["getGrammarsCategory"]),

   async mounted(){
       await this.fetchGrammarsCategory()
    }

}
</script>

<!-- <p>{{ item.title }}</p>
<p>{{ item.eng_title }}</p> -->

<style scoped>

.testBlock {
    background-color: #8144D6;
}

.testBlock:hover {
    background-color: #510FAD;
}

</style>
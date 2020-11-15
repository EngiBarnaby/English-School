<template>
    <div>
        <h1 class="text-center">{{category}}</h1>
        <v-list>
            <v-row justify="center">
                <v-col xs='12' sm="12" md="8" lg="8" xl="8" cols="12">
                    <v-list-item v-for="item in getGrammars" :key="item.id" 
                                class="grammar-item my-3" 
                                :to="{ name : 'grammar-detail', params : { grammarId : item.id }}">
                        <v-row justify="center">
                            <h4 class="text-center">
                                {{ item.title }}
                            </h4>
                        </v-row>
                    </v-list-item>
                </v-col>
            </v-row>
        </v-list>
        <!-- <div  v-for="item in getGrammars" :key="item.id">
            <v-card>{{ item.title }}</v-card>
            <div v-html="item.content"></div>
        </div> -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {

    props : ["category"],

    methods : mapActions(["fetchGrammars"]),

    computed : mapGetters(["getGrammars"]),

   async mounted(){
    //    console.log(this.category);
       await this.fetchGrammars(this.category)
    }

}
</script>

<style scoped>

.grammar-item {
    border : 1px solid gray;
}

.grammar-item:hover {
    border : 1px solid gray;
    background-color: rgb(114, 112, 112);
    cursor: pointer;
}

</style>
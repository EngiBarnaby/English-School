<template>
    <div id="user-result">
        <v-row justify="center" v-for="(item, index) in getUserResult" :key="index">
            {{ item }}
        </v-row>
        <v-row justify="center" >
            <h3>Количество ошибок : {{ getCountWrongAnswer }}</h3>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    
    computed : mapGetters(["getUserResult", "getCountWrongAnswer"])

}
</script>
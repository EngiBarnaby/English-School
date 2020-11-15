<template>
    <div>
        <h3>Ваша статистика</h3>
        <bar-chart :chartdata="this.getUserWordsStats" />
        <hr class="my-5">
        <doughnut-chart :chartdata="this.getUserStats" :options="doughnutOptions" />
        <hr class="my-5">
        <line-chart />
    </div>
</template>

<script>
import LineChart from "./lineUserStats"
import BarChart from "./barUserStats"
import DoughnutChart from './doughnutUserStat'

import { mapGetters, mapActions } from 'vuex'

import DataBar from './statsData'

export default {

    components : { LineChart, BarChart, DoughnutChart },

    methods : mapActions(["fetchUserStats", "fetchUserWordsStats"]),

    computed : mapGetters(['getUserStats', "getUserWordsStats"]),

    data() {
        return {
            barData : {},
            barOptions : {},
            doughnutData : {},
            doughnutOptions : DataBar.DoughnutOptions
        }
     },

     async mounted(){
         await this.fetchUserStats()
         await this.fetchUserWordsStats()
     }

}

</script>
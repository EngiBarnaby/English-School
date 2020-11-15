import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut ,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },

  data(){
    return {
        DoughnutData : {
          labels  : [],
  
          datasets: [{
              label : "Ваша статистика",
              data : [],
              backgroundColor : [
                  "#FFB540",
                  "#8243D6",
                  "#3CA0D0",
              ]
          }]
      },
    }
  },

  methods : {
    createData(payload){
      for (let i in payload){
        this.DoughnutData.labels.push(payload[i]["description"])
        this.DoughnutData.datasets[0].data.push(payload[i].count)
      }
    }
  },
  
  mounted () {
    this.createData(this.chartdata)
    this.renderChart(this.DoughnutData, this.options)
  }
}
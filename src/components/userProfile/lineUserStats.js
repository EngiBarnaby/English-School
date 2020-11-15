import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  
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

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
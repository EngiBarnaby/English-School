import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,

  props : {
    chartdata: {
      default: null
    }
  },

  data(){
    return {
      BarData : {
        labels: [],
        datasets: [
          {
            label: 'Данные 1',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
      }
    }
  },

  methods : {
    createData(payload){
      for (let item of payload){
        this.BarData.labels.push(item["month"])
        this.BarData.datasets[0].data.push(item.counts)
      }
    }
  },
  
  mounted () {
    this.createData(this.chartdata)
    this.renderChart(this.BarData, this.options)
  }
}
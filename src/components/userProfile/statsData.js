export default {

    // Here will be bar data from Django database

    barData : {
        labels  : ['Кролики', "Собаски", "Еноты"],

        datasets: [{
            label : "Количество животных",
            data : [23, 7, 8],
            backgroundColor : [
                "#FFB540",
                "#8243D6",
                "#3CA0D0",
            ]
        }]
    },

    barOptions : {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                beginAtZero: true,
                padding: 5,
                }
            }]
        },
    },

    // Here will be Doughnut data from Django database

    DoughnutOptions : {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                beginAtZero: true,
                padding: 5,
                }
            }]
        },
    }
}
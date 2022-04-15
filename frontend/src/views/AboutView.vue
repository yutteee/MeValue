<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Chart :chartData="chartItems" :options="chartOptions"/>
  </div>
</template>

<script>
import Chart from "../components/SampleChart.js"

export default {
  components: {
    Chart
  },
  data() {
    return {
      chartItems: {
        labels: ["poor", "fair", "good", "great", "excellent"],
        datasets: [{
          label: "評価数",
          data: [1, 3, 6, 8, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          vorderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 3
        }]
      },
      chartOptions: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: true,
            // X軸グリッド非表示
            gridLines: {
              display:false
            }
          }],
          // Y軸
          yAxes: [{
            display: true,
            position: 'right',
            ticks: {
              // 0から始まる
              beginAtZero: true,
              // 最大5目盛
              maxTicksLimit: 5,
            },
          }]
        },
      }
    }
  },
}
</script>

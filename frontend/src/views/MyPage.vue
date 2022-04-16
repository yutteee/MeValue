<template>
  <div>
    <v-container>
      <h2>過去の投稿</h2>
      <v-row class="posts">
        <v-col cols="6" sm="4">
          <v-img
            src="../assets/sample.jpeg"
            height="400"
            contain
          />
        </v-col>
        <v-col cols="6" sm="8">
          <Chart
            :chartData="chartItems"
            :options="chartOptions"
          />
        </v-col>
      </v-row>
      <v-divider/>

      <v-card elevation="0">
          <v-card-text
              position: relative
          >
              <v-btn
                  class="mx-2"
                  fab
                  dark
                  absolute
                  right
                  color="#a90a56"
              >
              <v-icon dark>
                  mdi-plus
              </v-icon>
              </v-btn>
          </v-card-text>
      </v-card>
    </v-container>
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

<style scoped>
.posts {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>

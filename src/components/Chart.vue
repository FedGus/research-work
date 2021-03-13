<script>
import { Line } from 'vue-chartjs'
export default {
  name: "LineChart",
  extends: Line,
  data() {
return {
      chartdata: {
        labels: ["a", "a", "a", "a"],
        datasets: [
          {
            label: "Количество",
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)"
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            data: [1, 2, 3, 1]
            //data: [this.users, this.orgs]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        labels: {
          fontColor: "white"
        },
        title: {
          display: true,
          text: "Количество новых за последнюю неделю",
          fontSize: "16",
          fontColor: "white"
        },
        tooltips: {
          displayColors: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                display: true,
                fontColor: "white"
              },
              gridLines: {
                color: "rgba(255,255,255,0.2)",
                lineWidth: 1,
                borderDash: [2, 5]
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: "white"
              },
              gridLines: {
                color: "rgba(255,255,255,0.2)",
                lineWidth: 1,
                borderDash: [2, 5]
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
     this.renderChart(this.chartdata, this.options)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

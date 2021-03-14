<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default {
  name: "LineChart",
  extends: Line,
  mixins: [reactiveProp],
  props: ["pointsX", "pointsY"],
  data() {
    return {
      chartdata: {
        labels: this.pointsX,
        datasets: [
          {
            label: "Межосевое расстояние",
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            data: this.pointsY,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        labels: {
          fontColor: "black",
        },
        title: {
          display: true,
          text:
            "Зависимость автоматическая от передаточного числа и межосевого расстояния",
          fontFamily: "Times New Roman",
          fontSize: "14",
          fontColor: "black",
        },
        tooltips: {
          displayColors: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                display: true,
                fontColor: "black",
              },
              gridLines: {
                color: "rgba(255,255,255,0.2)",
                lineWidth: 1,
                borderDash: [2, 5],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: "black",
              },
              gridLines: {
                color: "rgba(255,255,255,0.2)",
                lineWidth: 1,
                borderDash: [2, 5],
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
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

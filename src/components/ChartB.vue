<script>
import { Line } from "vue-chartjs";
export default {
  name: "LineChart",
  extends: Line,
  props: ["pointsX", "pointsY"],
  data() {
    return {
      chartdata: {
        labels: this.pointsX,
        datasets: [
          {
            label: "Диаметр впадин зубчатого колеса",
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            data: this.pointsY,
          },
          {
            label: "Диаметр вершин зубчатого колеса",
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            data: this.pointsX,
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
          text: "Зависимость диаметров вершин и впадин зубчатого колеса",
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
                display: false,
                fontColor: "white",
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
                beginAtZero: false,
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

<script>
import { Line } from "vue-chartjs";
export default {
  name: "LineChart",
  extends: Line,
  props: ["pointsX", "pointsY", "pointsZ"],
  data() {
    return {
      chartdata: {
        labels: this.pointsX,
        datasets: [
          {
            label: "Модуль",
            backgroundColor: ["rgba(99, 132, 0, 0.2)"],
            borderColor: ["rgba(99, 132, 0, 1)"],
            borderWidth: 1,
            data: this.pointsZ,
            yAxisID: "y-axis-module",
          },
          {
            label: "Диаметр впадин зубчатого колеса",
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            data: this.pointsY,
            yAxisID: "y-axis-diameter",
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
          text:
            "Зависимость модуля от диаметров вершин и впадин зубчатого колеса",
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
              id: "y-axis-diameter",
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
            {
              id: "y-axis-module",
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

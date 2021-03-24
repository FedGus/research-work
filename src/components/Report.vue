<template>
  <div id="printMe">
    <h1>Отчет</h1>
    <h2>о научно-исследовательской работе</h2>
    <p>Рассматриваемые данные получены на основе разработки в программе Inventor Autodesk Pro+.</p> <img src="@/assets/logo.png">
    <p>Среди них:  передаточное число, модуль, межосевое расстояние, диаметр вершин зубчатого колеса, диаметр впадин зубчатого колеса. На основе полученных данных рассматриваются зависимости между величинами.</p>
    
    <p>При расчетах во внимание берутся стандартные парамеры:
    <ol type="a">
      <li>Крутящий момент: 480-490</li>
      <li>Допускаемое контактное напряжение: 250-260</li>
      <li>Передаточное число по ГОСТ: 1-1,5</li>
    </ol>
    </p>
    <chart-a :pointsX="pointsX" :pointsY="pointsY" class="chart"></chart-a>
    <h5>График 1.</h5>
    <p>
      Если прямая на графике убывающая, то это значит, что разработанная конструкция не будет иметь больших размеров и
      не зависит от передаточного числа механизмов. Если график возрастающий, то стоит
      определить оптимальное передаточное число. В индивидуальных конструкторских деталях оно может отличаться от значений ГОСТ, указанных выше. 
    </p>
    <chart-b :pointsX="pointsA" :pointsY="pointsB" class="chart"></chart-b>
    <h5>График 2.</h5>
    <p>
      Графики диаметров вершин и впадин зубчатого колеса, как правило,
      симметрично друг от друга.
    </p>
    <chart-c :pointsX="pointsA" :pointsY="pointsB" :pointsZ="pointsC" class="chart"></chart-c>
    <h5>График 3.</h5>
    <p>
      Если в исследовании с уменьшением модуля плавно
      (пропорционально) уменьшается значение вершин и впадин зубчатого колеса, то это означает, что конструкция
      элемента оптимальна. В иной ситуации, когда уменьшение не пропорционально, следует заменить кинематические или конструкционные
      параметры партии.
    </p>
  </div>
</template>

<script>
import axios from "axios";
import ChartA from "./ChartA.vue";
import ChartB from "./ChartB.vue";
import ChartC from "./ChartC.vue";
export default {
  name: "Report",
  components: { ChartA, ChartB, ChartC },
  data() {
    return {
      data: [],
      pointsX: [],
      pointsY: [],
      pointsA: [],
      pointsB: [],
      pointsC: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:8085/api/data")
      .then((response) => {
        this.data = response.data;
        for (let i = 0; i < this.data.length; i++) {
          let x = response.data[i].ratio.replace(/,/i, ".");
          let y = response.data[i].center_distance.replace(/,/i, ".");

          let a = response.data[i].top_diameter.replace(/,/i, ".");
          let b = response.data[i].cavity_diameter.replace(/,/i, ".");

          let c = response.data[i].module.replace(/,/i, ".");

          this.pointsX[i] = x;
          this.pointsY[i] = y;
          this.pointsA[i] = a;
          this.pointsB[i] = b;
          this.pointsC[i] = c;
        }
        // console.log(this.pointsX);
        // console.log(this.pointsY);
        this.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    reload() {
      let block = document.getElementById("printMe");
      block.style.width = block.offsetWidth + 1 + "px";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

P {
  font-size: 14pt;
  text-indent: 1.5em;
  line-height: 1.5;
  text-align: justify;
  & ol {
    text-indent: 0;
    & li {
      display: list-item;
    }
  }
}
h1,
h2 {
  margin: 0;
}
.chart {
  margin-top: 20px;
}
</style>

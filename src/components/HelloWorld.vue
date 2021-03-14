<template>
  <div>
    <chart :pointsX="pointsX" :pointsY="pointsY"></chart>
  </div>
</template>

<script>
import axios from "axios";
import Chart from "./Chart.vue";
export default {
  name: "HelloWorld",
  components: { Chart },
  data() {
    return {
      data: [],
      pointsX: [],
      pointsY: []
    }
  },
  mounted() {
    axios
      .get("http://localhost:8085/api/data")
      .then((response) => {
        this.data = response.data;
        for (let i = 0; i < this.data.length; i++) {
          let x = response.data[i].ratio.replace(/,/i, '.');
          let y = response.data[i].center_distance.replace(/,/i, '.');
          this.pointsX[i] = x;
           this.pointsY[i] = y;
        }
        console.log(this.pointsX);
        console.log(this.pointsY);
      })
      .catch((error) => {
        console.log(error);
      });
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

<template>
  <div>
    <chart></chart>
  </div>
</template>

<script>
import axios from "axios";
import Chart from "./Chart.vue";
export default {
  name: "HelloWorld",
  components: { Chart },
  mounted() {
    axios
      .get("http://localhost:8085/api/data")
      .then((response) => {
        console.log(response.data);
        this.units = response.data;
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

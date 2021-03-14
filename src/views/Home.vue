<template>
  <div class="home">
    <h1>Отчет</h1>
    <h2>о научно-исследовательской работе</h2>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
<style scoped>
.home {
  width: 50vw;
  margin: auto;
  padding: 4rem;
  box-shadow: 0 2px 5px gray;
  font-family: 'Times New Roman';
}
h1, h2 {
  margin: 0;
}
</style>

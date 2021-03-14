<template>
  <div id="home">
    <Report />
    <button v-print class="no-print">Печать отчета</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Report from "@/components/Report.vue";

export default {
  name: "Home",
  components: {
    Report,
  },
};
</script>
<style lang="scss">
@media print {
  #home {
    width: 100% !important;
 box-shadow: none !important;
 margin: 0 !important;
 padding: 0 !important;
  }
  .no-print {
    display: none;
  }
}
#home {
  width: 50vw;
  margin: auto;
  padding: 4rem;
  box-shadow: 0 2px 5px gray;
  font-family: "Times New Roman";
}
</style>

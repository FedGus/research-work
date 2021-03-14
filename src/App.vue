<template>
  <div id="app">
    <div id="nav" class="no-print">
      <router-link to="/">Просмотр отчета</router-link> |
      <router-link to="/about">Загрузка новых данных</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button {
  background: #42b983;
  padding: 20px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 2px 5px #888888;
  border: 0;
  border-radius: 8px;

}
img {
  width: 30vw;
  margin: 10px
}
</style>

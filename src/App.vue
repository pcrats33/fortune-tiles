<template>
  <div id="app">
    <h1>Fortune Tiles {{ gameWidth }} x {{ gameHeigth }} </h1>
    <TilesGame :widthX=gameWidth :widthY=gameHeigth :depth=0 />
  </div>
</template>

<script>
import TilesGame from './components/TilesGame.vue'

export default {
  name: 'App',
  components: {
    TilesGame
  },
  computed: {
    gameWidth: function() {
      return Math.trunc(window.innerWidth * 0.8)
    },
    gameHeigth: function() {
      return Math.trunc(window.innerHeight * 0.6)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

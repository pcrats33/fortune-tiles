<template>
  <div id="app">
    <h1>Fortune Tiles {{ gameWidth }} x {{ gameHeigth }} </h1>
    <!-- <canvas id="gfxCanvas"></canvas> -->
    <Scene id="gfxCanvas">
      <DirectionalLight></DirectionalLight>
      <HemisphericLight diffuse="#8AC"></HemisphericLight>
      <PointLight specular="#0F0"></PointLight>
      <SpotLight></SpotLight>
      <TilesGame :upperLeftX=-1.0 :upperLeftY=-1.0 :upperLeftZ=0 :widthX=2.0 :widthY=2.0 :depth=0 />
    </Scene>
      <TilesGame :upperLeftX=-1.0 :upperLeftY=-1.0 :upperLeftZ=0 :widthX=2.0 :widthY=2.0 :depth=0 />

  </div>
</template>

<script>
import TilesGame from './components/TilesGame.vue'

export default {
  name: 'App',
  components: {
    TilesGame
  },
  // mounted () {
  //   this.runWebGL()
  // },
  computed: {
    gameWidth: function() {
      return Math.trunc(window.innerWidth * 0.8)
    },
    gameHeigth: function() {
      return Math.trunc(window.innerHeight * 0.6)
    }
  },
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

#gfxCanvas {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>

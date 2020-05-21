<template>
  <div id="app">
    <h1>Fortune Tiles</h1>
    <!-- <canvas id="gfxCanvas"></canvas> -->
    <Scene id="gfxCanvas">
      <DirectionalLight></DirectionalLight>
      <HemisphericLight diffuse="#8AC"></HemisphericLight>
      <PointLight specular="#0F0"></PointLight>
      <SpotLight></SpotLight>
      <Camera :name="myCamera"
              :type="universal"
              :position="[0, 0, -100]"
              :target="[0, 0, 0]"
      >
      </Camera>
      <TilesGame :upperLeftX=-50.0 :upperLeftY=-50.0 :upperLeftZ=0 :widthX=100.0 :widthY=100.0 :depth=1 />
    </Scene>
      <!-- <TilesGame :upperLeftX=-0.5 :upperLeftY=-0.5 :upperLeftZ=0 :widthX=1.0 :widthY=1.0 :depth=1 /> -->

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

<template>
  <div id="app">
    <h1>Fortune Tiles</h1>
    <img src="./assets/switch-camera.png" @click="reverseCamera" class="iconbutton">
    <Scene v-model="myScene" @scene="myScene = $event">
      <DirectionalLight></DirectionalLight>
      <HemisphericLight diffuse="#8AC"></HemisphericLight>
      <PointLight specular="#0F0"></PointLight>
      <SpotLight></SpotLight>
      <Camera v-model="myCamera">
      </Camera>
      <TilesGame :gfxCanvas="myScene" 
                 :upperLeftX=-50.0 
                 :upperLeftY=-50.0 
                 :upperLeftZ=0 
                 :widthX=100.0 
                 :widthY=100.0 
                 :depth=1 />
    </Scene>
      <!-- <TilesGame :upperLeftX=-0.5 :upperLeftY=-0.5 :upperLeftZ=0 :widthX=1.0 :widthY=1.0 :depth=1 /> -->

  </div>
</template>

<script>
import TilesGame from './components/TilesGame.vue'
import * as BABYLON from 'babylonjs'

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
  },
  data() {
    return {
      myScene: null,
      myCamera: null,
      camerastart: Number,
    }
  },
  watch: {
    myCamera() {
      this.myCamera.position = new BABYLON.Vector3(0, 0, -100)
      this.myCamera.cameraDirection = new BABYLON.Vector3(0, 0, 0)
    },
    myScene() {
      console.log("scene loaded");
    }
  },
  methods: {
    reverseCamera() {
      this.myCamera.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.LOCAL)
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

#gfxCanvas {
  margin: 0;
  padding: 0;
  height: 100%;
}

.iconbutton {
  display: inline-block;
  width: 60px;
  margin: 0 2% 0 90%;
  padding: 0;
}
</style>

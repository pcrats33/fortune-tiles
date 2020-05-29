<template>
    <!-- :style="{ width: 50 + 'px', height: 150 + 'px' }" -->
    <Entity v-model="myEntity"
            :position="[tilepos(upperLeftX, sizex), tilepos(upperLeftY, sizey), upperLeftZ * 20]">
        <Box v-model="myBox"
                :position="[0, 0, 0]"
                :scaling="[tilescale(sizex), tilescale(sizey), tilescale(sizex * 0.2)]"></Box>
        <!-- 
            {{upperLeftX | decimal4}} x {{upperLeftY | decimal4}} x {{upperLeftZ | decimal4}} <br/>
            ({{sizex | decimal4}}, {{sizey | decimal4}}) 
        -->
    </Entity>
</template>

<script>
import * as BABYLON from 'babylonjs'

export default {
  name: 'TilesGame',
  props: {
    gfxCanvas: Object,
    iX: Number,
    iY: Number,
    upperLeftX: Number,
    upperLeftY: Number,
    upperLeftZ: Number,
    sizex: Number,
    sizey: Number,
    luck: Number
  },
  methods: {
      fortune: function() {
          return "tbd!"
      },
      myrandom: function() {
          return Math.random()
      },
      tilescale: function(w) {
          return w * 0.5;
      },
      tilepos: function(pos, size) {
          var ret = pos + size / 2
          if (ret <= -1)
            ret = -0.9999;
          if (ret >= 1)
            ret = 0.9999;          
          return pos + size / 2

      },
      attachPick(dom) {
          dom.myBox.actionManager = new BABYLON.ActionManager(dom.gfxCanvas)
          dom.myBox.actionManager.registerAction(
              new BABYLON.ExecuteCodeAction(
                  BABYLON.ActionManager.OnPickTrigger,
                  () => {
                      this.$emit('tilePlucked', {
                        x: this.iX, 
                        y: this.iY,
                        actualX: this.tilepos(this.upperLeftX, this.sizex), 
                        actualY: this.tilepos(this.upperLeftY, this.sizey), 
                        actualZ: this.upperLeftZ * 20
                        } )
                  })              
          );
        //   dom.myBox.actionManager.registerAction(
        //     new BABYLON.SetValueAction(
        //         {
        //             trigger: BABYLON.ActionManager.OnPickTrigger
        //         },
        //         dom.myBox,
        //         "scaling",
        //         new BABYLON.Vector3(1.2, 1.2, 1.2)
        //     )
        //   );
      }
  },
  data() {
      return {
          myBox: null,
          myEntity: null,
      }
  },
  watch: {
      myBox() {
          this.attachPick(this)
      },
  },
  filters: {
      decimal4(value, decimals) {
        value = parseFloat(value)
        if (!isFinite(value) || (!value && value !== 0)) return ''
        decimals = decimals != null ? decimals : 4
        var stringified = Math.abs(value).toFixed(decimals)
        var _int = decimals
            ? stringified.slice(0, -1 - decimals)
            : stringified
        var _float = decimals
            ? stringified.slice(-1 - decimals)
            : ''
        var sign = value < 0 ? '-' : ''
        return sign + _int + _float            
    }
  }
}
</script>

<style scoped>
.tile-outer {
    display: inline-block;
    margin: 0 auto;
    border-radius:0.25em;
    background-color: #888;    
}

.tile {
    position: relative;
    display: block;
    width: 70%;
    height: 70%;
    margin: 0 auto;
    background-color: #aaa;
    padding: 0.25em;
}

.tile-inner {
    width: 150%;
    display: block;
    top: 45%;
    position: relative;
}

.tile-place {
  font-family:Arial, Helvetica, sans-serif;
  font-size:16px;
    text-align: center;
}
</style>
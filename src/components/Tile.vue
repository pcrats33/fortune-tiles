<template>
    <div class="tile-outer" :style="{ width: 50 + 'px', height: 150 + 'px' }">
        <div class="tile">
            <div class="tile-inner">
                <span class="tile-place">
                    <Box :position="[tilepos(upperLeftX, sizex), tilepos(upperLeftY, sizey), upperLeftZ]"
                         :scaling="[tilescale(sizex), tilescale(sizey), tilescale(sizex)]"></Box>
                    <!-- <Box :position="[1, 1, 0]"></Box>
                    <Box :position="[15, 1, 0]"></Box>
                    <Box :position="[1, 15, 0]"></Box>
                    <Box :position="[1, 1, 15]"></Box>
                    <Box :position="[1, 15, 15]"></Box>
                    <Box :position="[1, 1, 0]"></Box>
                    <Box :position="[-15, 1, 0]"></Box>
                    <Box :position="[1, -15, 0]"></Box>
                    <Box :position="[1, 1, -15]"></Box>
                    <Box :position="[1, -15, -15]"></Box> -->
                    {{upperLeftX | decimal4}} x {{upperLeftY | decimal4}} x {{upperLeftZ | decimal4}} <br/>
                    ({{sizex | decimal4}}, {{sizey | decimal4}})
                </span>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
  name: 'TilesGame',
  props: {
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
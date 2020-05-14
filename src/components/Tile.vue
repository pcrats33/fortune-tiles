<template>
    <div class="tile-outer" :style="{ width: sizex + 'px', height: sizey + 'px' }">
        <div class="tile">
            <div class="tile-inner">
                <span class="tile-place">
                    <Box :position="[translateX(upperLeftX), translateY(upperLeftY), upperLeftZ]"></Box>
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
                    {{translateX(upperLeftX)}} x {{translateY(upperLeftY)}} x {{upperLeftZ}} <br/>
                    ({{sizex}}, {{sizey}})
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
      translateX: function(x) {
          return ((x / 1250) - 0.5) * 200
      },
      translateY: function(y) {
          return ((y / 627) - 0.5) * 200
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